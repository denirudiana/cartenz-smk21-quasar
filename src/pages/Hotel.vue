<template>
  <q-page class="row items-top justify-end">
    <!-- Add Dialog -->
    <q-dialog v-model="dialogAddHotels">
      <q-card class="q-pa-md" style="width: 700px; max-width: 80vw">
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
                    @click.stop.prevent="input.hotel = null"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
            </div>
            <div>
              <div>{{ $t('regLabel') }}</div>
              <q-input
                dense
                color="indigo"
                outlined
                v-model="input.reg"
                lazy-rules
                :rules="[(val) => val !== '' || $t('regNotEmpty')]"
              >
                <template v-if="input.reg" v-slot:append>
                  <q-icon
                    name="cancel"
                    @click.stop.prevent="input.reg = null"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
            </div>

          </div>
        </div>
        <div class="" style="margin-top: 20px">
          <q-btn
            class="full-width text-capitalize"
            :color="editingHotel.value ? 'purple' : 'indigo-7'"
            :label="editingHotel.value ? $t('editHotel') : $t('addHotel')"
            @click="editingHotel.value ? editHotel() : addHotels()"
          />
        </div>
      </q-card>
    </q-dialog>

    <!-- Edit Dialog -->
    <q-dialog v-model="dialogEditHotel">
      <q-card class="q-pa-md" style="width: 700px; max-width: 80vw">
        <div class="text-weight-medium text-center" style="font-size: 30px">
          {{ $t('editHotel') }}
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
                    @click.stop.prevent="input.hotel = null"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
            </div>
            <div>
            <div>{{ $t('regLabel') }}</div>
            <q-input
              dense
              color="indigo"
              outlined
              v-model="input.reg"
              lazy-rules
              :rules="[(val) => val !== '' || $t('regNotEmpty')]"
            >
              <template v-if="input.reg" v-slot:append>
                <q-icon
                  name="cancel"
                  @click.stop.prevent="input.reg = null"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </div>

          </div>
        </div>
        <div class="" style="margin-top: 20px">
          <q-btn
            class="full-width text-capitalize"
            color="deep-purple"
            :label="$t('editHotel')"
            @click="editHotel()"
          />
        </div>
      </q-card>
    </q-dialog>

    <!-- Delete Dialog -->
    <q-dialog v-model="dialogDeleteHotel">
      <q-card class="q-pa-md" style="width: 700px; max-width: 80vw">
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
        <div class="" style="margin-top: 20px">
          <q-btn
            class="full-width text-capitalize"
            color="red-7"
            :label="$t('deleteHotel')"
            @click="deleteHotel()"
          />
        </div>
      </q-card>
    </q-dialog>



    <!-- Main Content -->
    <div class="col justify-end">
      <div class="row q-pa-lg justify-start q-gutter-lg">
        <div class="fit row justify-end q-gutter-sm">
              <q-btn
                @click="openAddDialog(false)"
                color="primary"
                icon="add"
                :label="$t('addHotels')"
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
                {{ col.label }}
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
                  color="primary"
                  icon="edit"
                  class="items-end"
                >
                  <q-tooltip class="bg-indigo" :offset="[10, 10]">
                    {{ $t('editHotel') }}
                  </q-tooltip>
                </q-btn>
                <q-btn
                  @click="openDeleteDialog(props.row)"
                  color="negative"
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
import { defineComponent, ref } from 'vue';
import { date } from 'quasar';
import { uid } from 'quasar';

const timeStamp = Date.now();

const columns = [
  {
    name: 'no',
    field: 'no',
    label: 'No',
    align: 'center',
  },
  { name: 'Nama Hotel', label: 'Hotel', field: 'hotel', align: 'center' },
  { name: 'Daerah', label: 'Daerah', align: 'center'},
  { name: 'Aksi', label: 'Action', field: 'action', align: 'center' },

];

export default defineComponent({
  name: 'DashboardTodo',
  setup() {
    const rows = ref([
      {
        hotel: 'Aston',
        reg: 'Jakarta Pusat',
      },
    ]);

    const dialogAddHotels = ref(false);
    const dialogEditHotel = ref(false);
    const dialogDeleteHotel = ref(false);

    const input = ref({
      hotel: '',
      reg: '',
    });

    const editingHotel = ref(false);
    const editingHotelIndex = ref(-1);

    const openAddDialog = (edit) => {
      dialogAddHotels.value = true;
      editingHotel.value = edit;
    };

    const openEditDialog = (hotel) => {
      input.value.hotel = hotel.hotel;
      input.value.reg = hotel.reg;
      editingHotelIndex.value = rows.value.findIndex((x) => x.no === hotel.no);
      dialogEditHotel.value = true;
    };

    const openDeleteDialog = (hotel) => {
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

    return {
      columns,
      rows,
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
    };
  },
});
</script>

<style scoped>
/* Page Styling */

</style>
