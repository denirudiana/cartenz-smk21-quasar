<template>
  <q-page padding>
    <q-btn
      label="Create Data"
      class="q-my-md bg-primary text-white"
      icon="add"
      @click="showCardCreate = true"
    ></q-btn>

    <!-- Dialog Create -->
    <q-dialog v-model="showCardCreate" persistent>
      <q-card style="width: 500px">
        <q-toolbar class="text-center">
          <q-toolbar-title>Create Data</q-toolbar-title>
        </q-toolbar>

        <q-card-section>
          <!-- Data Input -->
          <q-input
            v-model="createData.name"
            label="Name"
            hint="example : Hotel Barawuri"
          />
          <q-select
            v-model="selection"
            :options="options"
            label="Area"
          ></q-select>
          <q-btn
            label="Submit"
            color="primary"
            class="q-mt-xl"
            @click="addData"
          />

          <q-btn v-close-popup label="Back" class="q-mt-xl q-ml-sm"></q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Edit Dialog -->
    <q-dialog v-model="showCardEdit" persistent>
      <q-card style="width: 500px">
        <q-toolbar class="text-center">
          <q-toolbar-title>Edit Data</q-toolbar-title>
        </q-toolbar>

        <q-card-section>
          <!-- Data Input -->
          <q-input
            v-model="input.name"
            label="Name"
            hint="example : Hotel Barawuri"
          />
          <q-select
            v-model="input.area"
            :options="options"
            label="Area"
          ></q-select>
          <q-btn
            label="Submit"
            color="primary"
            class="q-mt-xl"
            @click="editData"
          />

          <q-btn v-close-popup label="Back" class="q-mt-xl q-ml-sm"></q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Delete Dialog -->
    <q-dialog v-model="popUpDelete" persistent>
      <q-card style="width: 500px">
        <q-toolbar class="text-center">
          <q-toolbar-title>Are You Sure?</q-toolbar-title>
        </q-toolbar>

        <q-card-section>
          <p>After this the selected data will be deleted. Are you sure?</p>
          <q-btn
            label="Delete"
            color="negative"
            class="q-mt-xl"
            @click="deleteData"
          />

          <q-btn v-close-popup label="Back" class="q-mt-xl q-ml-sm"></q-btn>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Table Data -->
    <div class="justify-end">
      <q-table
        :columns="tableColumns"
        :rows="tableRows"
        title="Data Hotel"
        hide-pagination
      >
        <template #body="props">
          <q-tr :props="props">
            <q-td class="text-center">{{ props.rowIndex + 1 }}</q-td>
            <q-td>{{ props.row.name }}</q-td>
            <q-td>{{ props.row.area }}</q-td>
            <q-td class="text-center">
              <q-btn
                icon="edit"
                class="items-end"
                @click="editDataPopUp(props.row)"
              ></q-btn>
              <q-btn
                icon="delete"
                class="items-end"
                @click="deleteDataPopUp(props.row)"
              ></q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { uid } from 'quasar';

interface dataType {
  id?: string;
  name: string;
  area: string;
}

export default defineComponent({
  name: 'TableComponent',
  setup() {
    const showCardCreate = ref(false);
    const showCardEdit = ref(false);
    const popUpDelete = ref(false);

    const selection = ref('');

    const dataTable = ref(-1);

    const options = [
      'Jakarta Pusat',
      'Jakarta Selatan',
      'Jakarta Utara',
      'Jakarta Barat',
      'Bogor',
    ];

    const tableColumns = [
      {
        name: 'id',
        label: 'ID',
        field: 'id',
        align: 'center',
      },
      {
        name: 'name',
        label: 'Name',
        field: 'name',
        align: 'left',
      },
      {
        name: 'area',
        label: 'Area',
        field: 'area',
        align: 'left',
      },
      {
        name: 'action',
        label: 'Action',
        field: 'action',
        align: 'center',
      },
    ];

    // variabel for rows
    const tableRows = ref([
      {
        id: uid(),
        name: 'Hotel Lumajang',
        area: 'Jakarta Pusat',
      },
    ]);

    // variabel untuk menerima inputan
    let input = ref({
      name: '',
      area: selection.value,
    });

    let createData = ref({
      name: '',
      area: selection.value,
    });

    // method untuk membuat data baru
    const addData = () => {
      tableRows.value.push({
        id: uid(),
        name: createData.value.name,
        area: selection.value,
      });

      showCardCreate.value = false;
    };

    // method untuk mendapatkan data
    const deleteDataPopUp = (data: dataType) => {
      dataTable.value = tableRows.value.findIndex((x) => x.id === data.id);
      popUpDelete.value = true;
    };

    // method untuk menghapus data
    const deleteData = () => {
      if (dataTable.value !== -1) {
        tableRows.value.splice(dataTable.value, 1);
        popUpDelete.value = false;
      }
    };

    // function untuk mengambil data saat tombol pada table di klik
    const editDataPopUp = (data: dataType) => {
      // console.log(data);
      // agar inputan saat di klik sudah muncul
      input.value.name = data.name;
      selection.value = data.area;

      // menambah dataTable dengan tableRows yang sesuai
      dataTable.value = tableRows.value.findIndex((x) => x.id === data.id);

      showCardEdit.value = true;
    };

    // function menghapus data saat tombol pada pop up di klik
    const editData = () => {
      if (dataTable.value !== -1) {
        // mengedit data
        tableRows.value[dataTable.value].name = input.value.name;
        tableRows.value[dataTable.value].area = input.value.area;

        // mengedit data selection
        selection.value = input.value.area;

        showCardEdit.value = false;
      }
    };

    return {
      tableColumns,
      tableRows,
      showCardCreate,
      showCardEdit,
      input,
      deleteData,
      addData,
      popUpDelete,
      deleteDataPopUp,
      editDataPopUp,
      editData,
      options,
      selection,
      createData,
    };
  },
});
</script>
