<template>
  <q-table :columns="tableColumns"></q-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'TableComponent',
  setup() {
    const tableColumns = ref([
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
        align: 'left',
      },
    ]);

    return {
      tableColumns,
    };
  },
});
</script>
