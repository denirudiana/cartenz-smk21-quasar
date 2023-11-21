<template>
  <q-page class="">
    <div class="bg-primary">
      <h3 class="text-white q-pa-md text-center">Welcome In Hotel Apps</h3>
    </div>
    <a
      href="/login"
      class="text-center text-h6 q-py-sm"
      style="text-decoration: none"
      >Please Login to Continue
    </a>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta };
  },
});
</script>
