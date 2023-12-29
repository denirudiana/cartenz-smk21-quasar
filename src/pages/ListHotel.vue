<template>
  <q-page class="row items-top justify-end" style="font-family: 'Times New Roman', Times, serif; letter-spacing: 1px;">
    <div class="col justify-end">
      <div class="row q-pa-lg justify-start q-gutter-lg">
        <q-table
          :rows="hotels"
          :columns="columns"
          row-key="no"
          style="width: 100%; text-align: center"
        >
          <template v-slot:top-left="props">
            <q-btn
              flat
              icon="add"
              @click="addHotel"
              label="Tambah Hotel"
              :disable="props.inFullscreen"
            />
          </template>

          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
                auto-width
                class="wrap justify-center items-center"
              >
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="no" :props="props">
                {{ props.row.no }}
              </q-td>
              <q-td key="nama" :props="props">
                {{ props.row.nama }}
              </q-td>
              <q-td key="daerah" :props="props">
                {{ props.row.daerah }}
              </q-td>
              <q-td key="bintang" :props="props">
                {{ props.row.bintang }}
              </q-td>
              <q-td>
                <q-btn
                  icon="edit"
                  color="positive"
                  @click="editHotel(props.row)"
                  class="items-end"
                >
                  <q-tooltip class="bg-indigo" :offset="[10, 10]">
                    Edit
                  </q-tooltip>
                </q-btn>
                <q-btn
                  icon="delete"
                  color="negative"
                  @click="deleteHotel(props.row)"
                  class="items-end"
                >
                  <q-tooltip class="bg-indigo" :offset="[10, 10]">
                    Hapus
                  </q-tooltip>
                </q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>

    <!-- tambah -->
    <q-dialog v-model="dialogTambah" persistent>
      <q-card>
        <q-card-section>
          <q-input v-model="newHotel.nama" label="Nama Hotel" />
          <q-select v-model="newHotel.daerah" :options="daerah" label="Daerah" />
          <q-input v-model="newHotel.bintang" label="Bintang" type="number" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Batal" color="primary" @click="cancelTambah" />
          <q-btn label="Simpan" color="positive" @click="simpanTambah" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- edit -->
    <q-dialog v-model="dialogEdit" persistent>
      <q-card>
        <q-card-section>
          <q-input v-model="editedHotel.nama" label="Nama Hotel" />
          <q-select v-model="editedHotel.daerah" :options="daerah" label="Daerah" />
          <q-input
            v-model="editedHotel.bintang"
            label="Bintang"
            type="number"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Batal" color="primary" @click="cancelEdit" />
          <q-btn label="Simpan" color="positive" @click="simpanEdit" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { useHotelStore } from 'src/stores/hotelStore';
import { useRegStore } from 'src/stores/RegStore';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'HotelTable',
  setup() {
    const dialogTambah = ref(false);
    const dialogEdit = ref(false);
    const hotelStore = useHotelStore();
    const RegStore = useRegStore();
    const $q = useQuasar();

    onMounted(() => {
    const savedHotels = JSON.parse(localStorage.getItem('hotels') || '[]');
    hotelStore.initializeHotels(savedHotels);
    const simpanDaerah = JSON.parse(localStorage.getItem('daerahs') || '[]');
    RegStore.initializeDaerah(simpanDaerah);
    });

    const daerah = computed(() => RegStore.daerahs);
    
    const newHotel = ref({
      nama: '',
      daerah: [],
      bintang: 0,
    });
    const editedHotel = ref({
      no: 0,
      nama: '',
      daerah: [],
      bintang: 0,
    });

    const hotels = computed(() => hotelStore.hotels);

    function showDeleteSuccessNotification () {
      $q.notify({
        type: 'negative',
        message: 'Delete Success'
      })
    }

    function showAddSuccessNotification () {
      $q.notify({
        type: 'positive',
        message: 'Added successfully'
      })
    }

    const columns = [
      {
        name: 'no',
        label: 'No',
        align: 'center',
        field: 'no',
        sortable: false,
      },
      {
        name: 'nama',
        label: 'Nama Hotel',
        align: 'center',
        field: 'nama',
        sortable: false,
      },
      {
        name: 'daerah',
        label: 'Daerah',
        align: 'center',
        field: 'daerah',
        sortable: false,
      },
      {
        name: 'bintang',
        label: 'Bintang',
        align: 'center',
        field: 'bintang',
        sortable: false,
      },
      {
        name: 'action',
        label: 'Aksi',
        align: 'center',
        field: 'action',
        sortable: false,
      },
    ];

    const addHotel = () => {
      dialogTambah.value = true;
    };

    const cancelTambah = () => {
      dialogTambah.value = false;
      resetNewHotel();
    };

    const simpanTambah = () => {
    const newHotelData = { ...newHotel.value, no: hotels.value.length + 1 };
    hotelStore.addHotel(newHotelData);
    resetNewHotel();
    dialogTambah.value = false;
    showAddSuccessNotification();
    saveToLocalStorage();
    };



    const resetNewHotel = () => {
      newHotel.value = {
        nama: '',
        daerah: [],
        bintang: 0,
      };
    };

    const editHotel = (row: any) => {
      editedHotel.value = { ...row };
      dialogEdit.value = true;
    };

    const cancelEdit = () => {
      dialogEdit.value = false;
      resetEditedHotel();
    };

    const simpanEdit = () => {
      const index = hotels.value.findIndex(
        (hotel) => hotel.no === editedHotel.value.no
      );
      if (index !== -1) {
        hotels.value[index] = { ...editedHotel.value };
      }
      resetEditedHotel();
      dialogEdit.value = false;
      saveToLocalStorage();
    };

    const resetEditedHotel = () => {
      editedHotel.value = {
        no: 0,
        nama: '',
        daerah: [],
        bintang: 0,
      };
    };

    const deleteHotel = (row: any) => {
    const index = hotels.value.findIndex((hotel) => hotel.no === row.no);
    if (index !== -1) {
      hotels.value.splice(index, 1);
      showDeleteSuccessNotification();
      saveToLocalStorage(); // Add this line to update local storage
    }
    };

    const saveToLocalStorage = () => {
    localStorage.setItem('hotels', JSON.stringify(hotels.value));
    };

    return {
      daerah,
      dialogTambah,
      dialogEdit,
      newHotel,
      editedHotel,
      hotels,
      columns,
      addHotel,
      cancelTambah,
      simpanTambah,
      editHotel,
      cancelEdit,
      simpanEdit,
      deleteHotel,
    };
  },
});
</script>

<style scoped>
.q-table th {
  width: 500px;
  background-color: #ddd;
  border-bottom: 5px solid #858585;
  text-align: center;
}

.q-table td {
  text-align: center;
}

.q-btn {
  margin: 0;
  color: black;
  background-color: #ffd23e;
  transition: 0.3s;
}


.q-dialog {
  max-width: 400px;
}

.q-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.q-card-section {
  padding: 15px;
  background-color: #ffffff;
}

.q-card-actions {
  padding: 10px;
  background-color: #f5f5f5;
}
</style>
