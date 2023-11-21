<template>
  <q-page padding>
    <TableComponent />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TableComponent from 'src/components/TableComponent.vue';

export default defineComponent({
  name: 'DashboardPage',
  components: {
    TableComponent,
  },
});
</script>
