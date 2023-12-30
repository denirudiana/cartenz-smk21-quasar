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
            label="Add Regions" color="primary" class="q-mr-xs-auto text-white add-contact-button text-capitalize"
            @click="addRegion"
          />
        </div>
      </div>

      <!-- Perbarui loop untuk menampilkan data region -->
      <q-card v-for="region in records" :key="region.id" class="q-mb-md">
        <q-card-section>
          <div class="flex items-center">
            <div>Kota : {{ region.cityReg }}</div>
          </div>
          <div class="flex items-center">
            <div>Provinsi : {{ region.provReg }}</div>
          </div>
        </q-card-section>
        <q-card-actions>
          <!-- Kapan-kapan aja fitur editnyaaa mwhehehehehehhh <q-btn label="Edit" color="primary" @click="editRegion(region)" /> -->
          <q-btn label="Delete" color="negative" @click="deleteRegion(region)" />
        </q-card-actions>
      </q-card>

      <q-dialog v-model="openDialog">
        <AddEditDialog
          :dialogTitle="dialogTitle"
          :records="temporaryRecords"
          :editting="editting"
          :selected="selectedRegion"
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
import AddEditDialog from '../components/regions/AddEditDialog';
import { mapActions } from 'vuex';

export default {
  name: 'Regions',
  components: { DeleteDialog, AddEditDialog },
  data () {
    return {
      openDialog: false,
      dialogTitle: '',
      editting: false,
      confirmDelete: false,
      deleteWarningDetails: [],
      selectedRegion: null,
      records: [], // Data akan diambil langsung dari localStorage
      temporaryRecords: [], // Properti untuk penyimpanan sementara
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 20
      },
      columns: [
        { name: 'cityReg', required: true, label: 'City Name', align: 'left', field: 'cityReg', sortable: true },
        { name: 'provReg', align: 'left', label: 'Province Name', field: 'provReg', sortable: true }
      ]
    };
  },
  mounted () {
    this.loadDataFromLocalStorage();
  },
  methods: {
    ...mapActions({
      deleteRegionComplete: 'DELETE_REGION'
    }),
    loadDataFromLocalStorage () {
      const storedData = localStorage.getItem('regions');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        this.records = parsedData.records || [];
      }
    },
    addRegion () {
      this.openDialog = true;
      this.dialogTitle = 'Add Regions';
      this.editting = false;
    },
    editRegion (region) {
      this.editting = true;
      this.openDialog = true;
      this.dialogTitle = 'Edit  Regions';
      this.selectedRegion = null;

      // Gantilah ini dengan sesuai untuk menghapus data dari localStorage
      const updatedRecords = this.records.map((record) => {
        if (record.id === region.id) {
          return { ...record };
        }
        return record;
      });

      var coba = JSON.stringify(updatedRecords);
      console.log(coba);

      const storedData = localStorage.getItem('regions');
      if (storedData) {
        const parsedData = JSON.parse(storedData);

        // Perbarui local storage dengan data terbaru
        localStorage.setItem('regions', JSON.stringify({ updatedRecords, fetchingRegions: true, filterItem: '', regions: parsedData }));

        // Perbarui state records di komponen
        this.records = updatedRecords;

        // Perbarui state Vuex
        this.selectedRegion = [{ ...region }]; // Tambahkan baris ini
      }
    },

    closeDialog () {
      this.editting = false;
      this.openDialog = false;
    },
    deleteRegion (region) {
      if (region) {
        this.confirmDelete = true;
        this.deleteWarningDetails[0] = `Hapus ${region.cityReg} - ${region.provReg}?`;
        this.selectedRegion = { ...region };
      } else {
        console.warn('Invalid region selected for deletion.');
      }
    },
    async proceedDelete () {
      if (this.selectedRegion) {
        try {
          // Pemanggilan action DELETE_REGION
          await this.$store.dispatch('DELETE_REGION', this.selectedRegion);

          this.selectedRegion = null;
          this.confirmDelete = false;

          console.log('Region Deleted Successfully!');
        } catch (error) {
          console.error('Error deleting region:', error);
          this.notify('Error deleting region. Please try again.', 'red');
        }
      } else {
        console.warn('No region selected for deletion.');
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
