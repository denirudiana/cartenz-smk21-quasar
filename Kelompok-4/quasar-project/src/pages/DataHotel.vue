<template>
  <q-page class="row items-top justify-end q-pa-md">
    <!-- Add Dialog -->
    <q-dialog v-model="dialogAddHotels" persistent>
      <q-card class="q-pa-md" style="width: 700px; max-width: 80vw; background-color: rgba(199, 137, 45, 0.9); border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
        <div class="text-weight-medium text-center" style="font-size: 30px">
          {{ editingHotel.value ? $t('editHotel') : $t('addHotel') }}
        </div>

        <div class="row q-mt-xl">
          <div class="col-12 col-sm-6 col-md q-px-lg q-gutter-md">
            <div>
              <div>{{ $t('hotelsLabel') }}</div>
              <q-input
                dense
                color="indigo"
                outlined
                v-model="input.hotel"
                lazy-rules
                :rules="[(val) => val !== '' || $t('hotelsNotEmpty')]"
              >
                <template v-if="input.hotel" v-slot:append>
                  <q-icon
                    name="cancel"
                    @click.stop.prevent="input.hotel = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
            </div>
            <div>
              <div>{{ $t('regLabel') }}</div>
              <q-select
                dense
                color="brown"
                outlined
                v-model="input.reg"
                lazy-rules
                :rules="[(val) => val !== '' || $t('regNotEmpty')]"
                emit-value
                map-options
                :options="regs"
              >
                
              </q-select>
            </div>
          </div>
        </div>
        <q-card-actions align="center">
          <q-btn label="Batal" color="brown" @click="batalTambah" />
          <q-btn
  :color="editingHotel ? 'brown' : 'brown'"
  :label="editingHotel ? $t('editHotel') : $t('addHotel')"
  @click="editingHotel ? editHotel() : addHotels()"
/>

       </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Edit Dialog -->
    <q-dialog v-model="dialogEditHotel" persistent>
      <q-card class="q-pa-md" style="width: 700px; max-width: 80vw; background-color: rgba(199, 137, 45, 0.9); border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
        <div class="text-weight-medium text-center" style="font-size: 30px">
          {{ $t('editHotel') }}
        </div>
        <div class="row q-mt-xl">
          <div class="col-12 col-sm-6 col-md q-px-lg q-gutter-md">
            <div>
              <div>{{ $t('hotelsLabel') }}</div>
              <q-input
                dense
                color="brown"
                outlined
                v-model="input.hotel"
                lazy-rules
                :rules="[(val) => val !== '' || $t('hotelsNotEmpty')]"
              >
                <template v-if="input.hotel" v-slot:append>
                  <q-icon
                    name="cancel"
                    @click.stop.prevent="input.hotel = ''"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
            </div>
            <div>
              <div>{{ $t('regLabel') }}</div>
              <q-select
                dense
                color="brown"
                outlined
                v-model="input.reg"
                lazy-rules
                :rules="[(val) => val !== '' || $t('regNotEmpty')]"
                emit-value
                map-options
                :options="regs"
              >
              </q-select>

            </div>
          </div>
        </div>
        <q-card-actions align="center">
          <q-btn label="Batal" color="brown" @click="batalEdit" />
          <q-btn color="brown" :label="$t('editHotel')" @click="editHotel()"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Delete Dialog -->
    <q-dialog v-model="dialogDeleteHotel" persistent>
      <q-card class="q-pa-md" style="width: 700px; max-width: 80vw; background-color: rgba(199, 137, 45, 0.9); border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
        <div class="text-weight-medium text-center" style="font-size: 30px">
          {{ $t('deleteHotel') }}
        </div>

        <div class="row q-mt-xl">
          <div class="col q-px-lg">
            <div>
              <p>
                {{ $t('confirmDeleteHotel') }}: <strong>{{ input.hotel }}</strong>?
              </p>
            </div>
          </div>
        </div>
        <q-card-actions align="center">
          <q-btn label="Batal" color="brown" @click="batalDelete" />
          <q-btn
            color="brown-7"
            :label="$t('deleteHotel')"
            @click="deleteHotel()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Main Content -->
    <div class="col justify-end">
      <div class="row q-pa-lg justify-start q-gutter-lg">
        <div class="fit row justify-end q-gutter-sm">
          <q-btn 
          @click="openAddDialog()" 
          color="brown" 
          icon="add" :label="$t('addHotels')" 
          class="items-end" 
          />
        </div>
        <q-table :rows="rows" :columns="columns" row-key="no" style="width: 100%;">

          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th
                v-for="col in props.cols"
                :key="col.name"
                :props="props"
                auto-width
                class="wrap justify-center items-center"
              >
                {{ $t(`${col.name}`) }}
              </q-th>
            </q-tr>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td class="text-center">{{ props.rowIndex + 1 }}</q-td>
              <q-td class="text-center">{{ props.row.hotel }}</q-td>
              <q-td class="text-center">{{ props.row.reg }}</q-td>
              <q-td class="text-center">
                <q-btn
                  @click="openEditDialog(props.row)"
                  color="brown"
                  icon="edit"
                  class="items-end"
                >
                  <q-tooltip class="bg-indigo" :offset="[10, 10]">
                    {{ $t('editHotel') }}
                  </q-tooltip>
                </q-btn>
                <q-btn
                  @click="openDeleteDialog(props.row)"
                  color="brown"
                  icon="delete"
                  class="items-end"
                >
                  <q-tooltip class="bg-indigo" :offset="[10, 10]">
                    {{ $t('deleteHotel') }}
                  </q-tooltip>
                </q-btn>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue';
import { useHotelStore } from 'src/stores/Hotelstore';
import { useRegStore } from 'src/stores/Regstore';
import { uid } from 'quasar';


const columns = [
  { name: 'no', label: 'No', align: 'center' },
  { name: 'Nama Hotel', label: 'Hotel', align: 'center' },
  { name: 'Daerah', label: 'Reg', align: 'center' },
  { name: 'Aksi', label: 'Action', field: 'action', align: 'center' },
];

export default defineComponent({
  name: 'DataHotel',
  setup() {
    const rows = ref([
      {
        no: uid(),
        hotel: 'Hotel Bintang 5',
        reg: 'Surabaya',
      },
    ]);

    const dialogAddHotels = ref(false);
    const dialogEditHotel = ref(false);
    const dialogDeleteHotel = ref(false);
    const Hotelstore = useHotelStore();
    const Regstore = useRegStore();

    onMounted(() => {
    const savedHotels = JSON.parse(localStorage.getItem('hotels') || '[]');
    Hotelstore.initializeHotels(savedHotels);
    const simpanReg = JSON.parse(localStorage.getItem('regs') || '[]');
    Regstore.initializeReg(simpanReg);
    });

    const regs = computed(() => Regstore.regs);
    const hotels = computed(() => Hotelstore.hotels);

    const input = ref({
      hotel: '',
      reg: '',
    });

    const editingHotel = ref(false);
    const editingHotelIndex = ref(-1);

    const openAddDialog = () => {
      dialogAddHotels.value = true;
    };

    interface Hotel {
    no: string
    hotel: string;
    reg: string;
    }



    const openEditDialog = (hotel: Hotel) => {
      input.value.hotel = hotel.hotel;
      editingHotelIndex.value = rows.value.findIndex((x) => x.no === hotel.no);
      dialogEditHotel.value = true;
    };

    const openDeleteDialog = (hotel: Hotel) => {
      input.value.hotel = hotel.hotel;
      input.value.reg = hotel.reg;
      editingHotelIndex.value = rows.value.findIndex((x) => x.no === hotel.no);
      dialogDeleteHotel.value = true;
    };

    const addHotels = () => {
      rows.value.push({
        no: uid(),
        hotel: input.value.hotel,
        reg: input.value.reg,
      });
      dialogAddHotels.value = false;
    };

    const editHotel = () => {
      if (editingHotelIndex.value !== -1) {
        rows.value[editingHotelIndex.value].hotel = input.value.hotel;
        rows.value[editingHotelIndex.value].reg = input.value.reg;
        dialogEditHotel.value = false;
      }
    };

    const deleteHotel = () => {
      if (editingHotelIndex.value !== -1) {
        rows.value.splice(editingHotelIndex.value, 1);
        dialogDeleteHotel.value = false;
      }
    };

    const batalTambah = () => {
      dialogAddHotels.value = false;
      };

      const batalEdit = () => {
      dialogEditHotel.value = false;
      };

      const batalDelete = () => {
      dialogDeleteHotel.value = false;
      };

    return {
      columns,
      rows,
      regs,
      dialogAddHotels,
      dialogEditHotel,
      dialogDeleteHotel,
      input,
      editingHotel,
      editingHotelIndex,
      openAddDialog,
      openEditDialog,
      openDeleteDialog,
      addHotels,
      editHotel,
      deleteHotel,
      batalTambah,
      batalEdit,
      batalDelete
    };
  },
});
</script>

<style scoped>
/* Page Styling */

</style>
