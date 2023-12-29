<template>
  <q-item
    clickable
    v-ripple
    :class="$route.name == routeName ? 'activeItem' : ''"
    @click="goToPage(routeName)"
    target="_self"
    :href="link"
    avatar
  >
  <q-item-section avatar>
        <q-avatar v-if="routeName == 'dashboard'">
        <q-icon name="dashboard"/>
        </q-avatar>
        <q-avatar v-else-if="routeName == 'hotel'">
        <q-icon name="list"/>
        </q-avatar>
        <q-avatar v-else-if="routeName == 'daerah'">
        <q-icon name="south_america"/>
        </q-avatar>
        <q-avatar v-else-if="routeName == 'profile'">
        <q-icon name="person"/>
        </q-avatar>
        <q-avatar v-else-if="routeName == 'help'">
        <q-icon name="help"/>
        </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },
    routeName: {
      type: String,
      required: true
    }
  },
  setup() {
  return {
  linkActive: ref(''),
  }
  },
  methods: {
  goToPage(routeName: string) {
  this.linkActive = routeName;
  this.$router.push({ name: routeName });
    },
  },
});
</script>
