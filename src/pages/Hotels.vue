<template>
  <q-page class="q-pa-sm q-mt-xs">
    <div class="q-pa-xs q-pt-md">
      <div class="flex justify-between items-center q-mb-sm">
        <div class="col-xs-4 col-sm-1">
          <span>Filter:
            <q-expansion-item flat dense dense-toggle no-caps class="top-table-expansion-item" label="All">
              <q-item dense exact clickable><span class="text-caption">10</span></q-item>
              <q-item dense exact clickable><span class="text-caption">50</span></q-item>
            </q-expansion-item>
          </span>
        </div>
        <q-space />
        <div class="float-right">
          <q-btn
            label="Add Hotels" color="primary" class="q-mr-xs-auto text-white add-contact-button text-capitalize"
            @click="addHotel"
          />
        </div>
      </div>

      <q-card v-for="hotel in records" :key="hotel.name" class="q-mb-md">
        <q-card-section>
          <div class="flex items-center">
            <q-avatar size="sm" class="q-mr-xs">
              <img v-if="hotel.avatar" :src="hotel.avatar" alt="Avatar" />
              <q-icon v-else size="sm" name="face" />
            </q-avatar>
            <div>{{ hotel.name }}</div>
            <div>{{ getRegionName(hotel.selectedOption)  }}</div>
          </div>
        </q-card-section>
        <q-card-section>
           <div v-if="hotel.uploadedAvatar">
            <img :src="hotel.uploadedAvatar" alt="Uploaded Avatar" style="max-width: 100%" />
          </div>
          <br>
          <div v-for="col in columns" :key="col.name" class="q-mr-md q-mb-md">
            <strong>{{ col.label }}:</strong> {{ hotel[col.field] }}
          </div>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Edit" color="primary" @click="editHotel(hotel)" />
          <q-btn label="Delete" color="negative" @click="deleteHotel(hotel)" />
        </q-card-actions>
      </q-card>

      <q-dialog v-model="openDialog">
        <AddEditDialog
          :dialogTitle="dialogTitle"
          :records="records"
          :editting="editting"
          :selected="selectedHotel"
          :closeDialog="closeDialog"
        />
      </q-dialog>

      <q-dialog v-model="confirmDelete" transition-show="fadeOut" transition-hide="fadeIn">
        <DeleteDialog :deleteWarningDetails="deleteWarningDetails" :proceedDelete="proceedDelete" />
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import DeleteDialog from '../components/globals/DeletePrompt';
import AddEditDialog from '../components/hotels/AddEditDialog';
import { mapActions } from 'vuex';

export default {
  name: 'Hotels',
  components: { DeleteDialog, AddEditDialog },
  data () {
    return {
      openDialog: false,
      dialogTitle: '',
      editting: false,
      confirmDelete: false,
      deleteWarningDetails: [],
      selectedHotel: null,
      records: [], // Data akan diambil langsung dari localStorage
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 20
      },
      columns: [
        { name: 'name', required: true, label: 'Hotel Name', align: 'left', field: 'name', sortable: true },
        { name: 'email', align: 'left', label: 'Email', field: 'email', sortable: true },
        { name: 'companyName', align: 'left', label: 'Company Name', field: 'companyName', sortable: true },
        { name: 'address', align: 'left', label: 'Address', field: 'address' },
        { name: 'stars', align: 'left', label: 'Stars Hotel', field: 'stars' },
        { name: 'selectedOption', align: 'left', label: 'City Regions', field: 'selectedOption' }
      ]
    };
  },
  mounted () {
    this.loadDataFromLocalStorage();
  },
  methods: {
    ...mapActions({
      deleteHotelComplete: 'DELETE_HOTEL'
    }),
    loadDataFromLocalStorage () {
      const storedData = localStorage.getItem('hotels');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        this.records = parsedData.records || [];
      }
    },
    getRegionName (hotel) {
      const regionId = hotel.selectedOption;
      const storedData = localStorage.getItem('hotels');
      if (storedData) {
        const parsedData = JSON.parse(storedData);

        // Pastikan 'regions' ada dan merupakan array
        const regionsArray = Array.isArray(parsedData.regions) ? parsedData.regions : [];

        const region = regionsArray.find((r) => r.id === regionId);
        return region ? region.cityReg : '';
      }
      return '';
    },
    addHotel () {
      this.openDialog = true;
      this.dialogTitle = 'Add Hotels';
      this.editting = false;
    },
    editHotel (hotel) {
      this.editting = true;
      this.openDialog = true;
      this.dialogTitle = 'Edit Hotels';
      this.selectedHotel = null;

      // Gantilah ini dengan sesuai untuk menghapus data dari localStorage
      const updatedRecords = this.records.map((record) => {
        if (record.id === hotel.id) {
          return { ...record /* ganti properti yang diubah */ };
        }
        return record;
      });

      const storedData = localStorage.getItem('regions');
      if (storedData) {
        const parsedData = JSON.parse(storedData);

        // Perbarui local storage dengan data terbaru
        localStorage.setItem('hotels', JSON.stringify({ records: updatedRecords, fetchingHotels: true, filterItem: '', regions: parsedData }));

        // Perbarui state records di komponen
        this.records = updatedRecords;

        this.selectedHotel = { ...hotel };
      }
    },
    closeDialog () {
      this.editting = false;
      this.openDialog = false;
    },
    deleteHotel (hotel) {
      this.confirmDelete = true;
      this.deleteWarningDetails[0] = 'Kamu yakin ingin menghapus data?';
      this.selectedHotel = { ...hotel };
    },
    async proceedDelete () {
      if (this.selectedHotel) {
        try {
          // Pemanggilan action DELETE_HOTEL
          await this.$store.dispatch('DELETE_HOTEL', this.selectedHotel);

          this.selectedHotel = null;
          this.confirmDelete = false;

          console.log('Hotel Deleted Successfully!');
        } catch (error) {
          console.error('Error deleting hotel:', error);
          this.notify('Error deleting hotel. Please try again.', 'red');
        }
      } else {
        console.warn('No hotel selected for deletion.');
      }
    }
  }
};
</script>

<style scoped>
  .top-table-expansion-item {
    margin-left: 60px;
    margin-top: -25px;
    color: #109CF1;
  }
  .add-contact-button {
    margin-top: -20px;
  }
</style>
