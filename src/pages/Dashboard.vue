  <template>
    <q-page class="row items-top justify-end">
      <!-- Add Dialog -->
      <q-dialog v-model="dialogAddNotes">
        <q-card class="q-pa-md" style="width: 700px; max-width: 80vw">
          <div class="text-weight-medium text-center" style="font-size: 30px">
            {{ editingNote.value ? $t('editNote') : $t('addHotel') }}
          </div>

          <div class="row q-mt-xl">
            <div class="col-12 col-sm-6 col-md q-px-lg q-gutter-md">
              <div>
                <div>{{ $t('HotelName') }}</div>
                <q-input
                  dense
                  color="indigo"
                  outlined
                  v-model="input.hotel"
                  lazy-rules
                  :rules="[(val) => val !== '' || $t('HotelNotEmpty')]"
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
                <div>{{ $t('DistrictName') }}</div>
                <q-input
                  dense
                  color="indigo"
                  outlined
                  v-model="input.district"
                  lazy-rules
                  :rules="[(val) => val !== '' || $t('DistrictNotEmpty')]"
                >
                  <template v-if="input.district" v-slot:append>
                    <q-icon
                      name="cancel"
                      @click.stop.prevent="input.district = ''"
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
              :color="editingNote.value ? 'purple' : 'indigo-7'"
              :label="editingNote.value ? $t('editNote') : $t('addHotel')"
              @click="editingNote.value ? editNote() : addNotes()"
            />
          </div>
        </q-card>
      </q-dialog>

      <!-- Edit Dialog -->
      <q-dialog v-model="dialogEditNote">
        <q-card class="q-pa-md" style="width: 700px; max-width: 80vw">
          <div class="text-weight-medium text-center" style="font-size: 30px">
            {{ $t('editNote') }}
          </div>

          <div class="row q-mt-xl">
            <div class="col-12 col-sm-6 col-md q-px-lg q-gutter-md">
              <div>
                <div>{{ $t('HotelName') }}</div>
                <q-input
                  dense
                  color="indigo"
                  outlined
                  v-model="input.hotel"
                  lazy-rules
                  :rules="[(val) => val !== '' || $t('HotelNotEmpty')]"
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
                <div>{{ $t('DistrictName') }}</div>
                <q-input
                  dense
                  color="indigo"
                  outlined
                  v-model="input.district"
                  lazy-rules
                  :rules="[(val) => val !== '' || $t('DistrictNotEmpty')]"
                >
                  <template v-if="input.district" v-slot:append>
                    <q-icon
                      name="cancel"
                      @click.stop.prevent="input.district = ''"
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
              color="purple"
              :label="$t('editNote')"
              @click="editNote()"
            />
          </div>
        </q-card>
      </q-dialog>

      <!-- Delete Dialog -->
      <q-dialog v-model="dialogDeleteNote">
        <q-card class="q-pa-md" style="width: 700px; max-width: 80vw">
          <div class="text-weight-medium text-center" style="font-size: 30px">
            {{ $t('deleteNote') }}
          </div>

          <div class="row q-mt-xl">
            <div class="col q-px-lg">
              <div>
                <p>
                  {{ $t('confirmDeleteNote') }}: <strong>{{ input.hotel }}</strong>?
                </p>
              </div>
            </div>
          </div>
          <div class="" style="margin-top: 20px">
            <q-btn
              class="full-width text-capitalize"
              color="negative"
              :label="$t('deleteNote')"
              @click="deleteNote()"
            />
          </div>
        </q-card>
      </q-dialog>

      <!-- Main Content -->
      <div class="col justify-end">
        <div class="row q-pa-lg justify-start q-gutter-lg">
          <q-table :rows="rows" :columns="columns" row-key="no" style="width: 100%;">
            <template v-slot:top>
              <div class="fit row justify-end q-gutter-sm">
                <q-btn
                  @click="openAddDialog(false)"
                  color="blue"
                  icon="add"
                  :label="$t('addHotel')"
                  class="items-end"
                />
              </div>
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
                  {{ $t(`columns.${col.name}`) }}
                </q-th>
              </q-tr>
            </template>

            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td class="text-center">{{ props.rowIndex + 1 }}</q-td>
                <q-td class="text-center">{{ props.row.HotelName }}</q-td>
                <q-td class="text-center">{{ props.row.DistrictName }}</q-td>
                <q-td class="text-center">{{ props.row.created_at }}</q-td>
                <q-td class="text-center">{{ props.row.status }}</q-td>
                <q-td class="text-center">
                  <q-btn
                    @click="openEditDialog(props.row)"
                    color="blue"
                    icon="edit"
                    class="items-end q-ma-xs"
                  >
                    <q-tooltip class="bg-indigo" :offset="[10, 10]">
                      {{ $t('editNote') }}
                    </q-tooltip>
                  </q-btn>
                  <q-btn
                    @click="openDeleteDialog(props.row)"
                    color="negative"
                    icon="delete"
                    class="items-end q-ma-xs"
                  >
                    <q-tooltip class="bg-indigo" :offset="[10, 10]">
                      {{ $t('deleteNote') }}
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
      label: 'no',
      align: 'center',
    },
    { name: 'HotelName', label: 'Hotel Name', field: 'HotelName', align: 'center' },
    { name: 'DistrictName', label: 'DistrictName', field: 'DistrictName', align: 'center' },
    { name: 'created_at', label: 'Created At', field: 'created_at', align: 'center' },
    { name: 'status', label: 'Notes Status', field: 'status', align: 'center' },
    { name: 'action', label: 'Action', field: 'action', align: 'center' },
  ];

  export default defineComponent({
    name: 'DashboardTodo',
    setup() {
      const rows = ref([
        {
          no: uid(),
          HotelName: 'Hotel Ibis Styles Jakarta',
          DistrictName: 'Jakarta',
          created_at: '2023-11-14',
          status: 'Active',
        },
        {
          no: uid(),
          HotelName: 'InterContinental Hotels',
          DistrictName: 'Jakarta',
          created_at: '2023-11-14',
          status: 'Active',
        },
        {
          no: uid(),
          HotelName: 'Grand Hyatt Hotel',
          DistrictName: 'Jakarta',
          created_at: '2023-11-14',
          status: 'Active',
        },
        {
          no: uid(),
          HotelName: 'Hotel Ibis Trans Studio',
          DistrictName: 'Bandung',
          created_at: '2023-11-14',
          status: 'Active',
        },
        {
          no: uid(),
          HotelName: 'The Gaia Hotel Bandung',
          DistrictName: 'Bandung',
          created_at: '2023-11-14',
          status: 'Active',
        },
        {
          no: uid(),
          HotelName: 'Grand Dafam Braga',
          DistrictName: 'Bandung',
          created_at: '2023-11-14',
          status: 'Active',
        },
        {
          no: uid(),
          HotelName: 'Ibis Styles Bogor Pajajaran',
          DistrictName: 'Bogor',
          created_at: '2023-11-14',
          status: 'Active',
        },
        {
          no: uid(),
          HotelName: 'Whiz Prime Hotel Pajajaran',
          DistrictName: 'Bogor',
          created_at: '2023-11-14',
          status: 'Active',
        },
        {
          no: uid(),
          HotelName: 'THE 1O1 Bogor Suryakancana',
          DistrictName: 'Bogor',
          created_at: '2023-11-14',
          status: 'Active',
        },
        {
          no: uid(),
          HotelName: 'Kuta Paradiso Hotel',
          DistrictName: 'Bali',
          created_at: '2023-11-14',
          status: 'Active',
        },
        {
          no: uid(),
          HotelName: 'Mercure Kuta Bali',
          DistrictName: 'Bali',
          created_at: '2023-11-14',
          status: 'Active',
        },
        {
          no: uid(),
          HotelName: 'Ohana Hotel Kuta',
          DistrictName: 'Bali',
          created_at: '2023-11-14',
          status: 'Active',
        },
      ]);

      const dialogAddNotes = ref(false);
      const dialogEditNote = ref(false);
      const dialogDeleteNote = ref(false);

      const input = ref({
        hotel: '',
        district: '',
      });

      const editingNote = ref(false);
      const editingNoteIndex = ref(-1);

      const openAddDialog = (edit : any) => {
        dialogAddNotes.value = true;
        editingNote.value = edit;
      };

      const openEditDialog = (note : any) => {
        input.value.hotel = note.hotel;
        input.value.district = note.district;
        editingNoteIndex.value = rows.value.findIndex((x) => x.no === note.no);
        dialogEditNote.value = true;
      };

      const openDeleteDialog = (note : any) => {
        input.value.hotel = note.hotel;
        input.value.district = note.district;
        editingNoteIndex.value = rows.value.findIndex((x) => x.no === note.no);
        dialogDeleteNote.value = true;
      };

      const addNotes = () => {
        rows.value.push({
          no: uid(),
          HotelName: input.value.hotel,
          DistrictName: input.value.district,
          created_at: date.formatDate(timeStamp, 'YYYY-MM-DD'),
          status: 'Success',
        });
        dialogAddNotes.value = false;
      };

      const editNote = () => {
        if (editingNoteIndex.value !== -1) {
          rows.value[editingNoteIndex.value].HotelName = input.value.hotel;
          rows.value[editingNoteIndex.value].DistrictName = input.value.district;
          dialogEditNote.value = false;
        }
      };

      const deleteNote = () => {
        if (editingNoteIndex.value !== -1) {
          rows.value.splice(editingNoteIndex.value, 1);
          dialogDeleteNote.value = false;
        }
      };

      return {
        columns,
        rows,
        dialogAddNotes,
        dialogEditNote,
        dialogDeleteNote,
        input,
        editingNote,
        editingNoteIndex,
        openAddDialog,
        openEditDialog,
        openDeleteDialog,
        addNotes,
        editNote,
        deleteNote,
      };
    },
  });
  </script>

  <style scoped>
  /* tambahkan styling sesuai kebutuhan */
  </style>
