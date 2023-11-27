<template>
  <q-page padding>
    <q-card class="full-width">
      <q-toolbar>
        <q-toolbar-title> {{ $t('failed') }} </q-toolbar-title>
      </q-toolbar>
      <q-card-section>
        <q-select
          v-model="locale"
          :options="optionsLanguage"
          label="Language App"
        ></q-select>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  // name: 'PageName',
  setup() {
    const { locale } = useI18n({ useScope: 'global' });

    return {
      locale,
      optionsLanguage: [
        { value: 'en-US', label: 'English' },
        { value: 'id', label: 'Indonesia' },
      ],
    };
  },
});
</script>
