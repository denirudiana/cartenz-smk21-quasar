<template>
  <q-page class="q-mb-md">
    <div class="q-gutter-md">
      <q-card>
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-avatar icon="sign_language" text-color="black" bg-color="primary" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Hello!</q-item-label>
              <q-item-label caption>Welcome to Cartenz Website</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
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
  { name: 'Daerah', label: 'Reg', field: 'reg', align: 'center'},
  { name: 'Aksi', label: 'Action', field: 'action', align: 'center' },

];

export default defineComponent({
  name: 'DashboardTodo',
  setup() {
    const rows = ref([
      {
        no: uid(),
        hotel: '',
        reg: '',
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
  .q-gutter-md {
    margin: -8px;
  }

  .q-card {
    width: 450px;
  }

  .q-item-label {
    font-size: 7px;
    font-weight: bolder;
  }

  .q-item-label.caption {
    font-size: 0px;
    color: #666;
  }
</style>
