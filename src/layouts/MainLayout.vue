<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: rgb(0, 196, 196);">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          {{ $t('title') }}
        </q-toolbar-title>

        <q-item clickable v-ripple @click="logout">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="logout" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="logout"><router-link to="/" style=" color: white; text-decoration: none;">Logout</router-link></q-item-section>
        </q-item>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered style="background-color: cyan ;">
      <q-list>
        <q-item-label header style="background: cyan; color: black; font-family: Verdana, Geneva, Tahoma, sans-serif;"> <b>Cartenz</b> </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Dashboard',
    routeName: 'dashboard',
    link: '/dashboard',
  },
  {
    title: 'Help',
    routeName: 'help',
    link: '/help',
  },
  {
    title: 'Hotel',
    routeName: 'hotel',
    link: '/hotel',
  },
  {
    title: 'Profil',
    routeName: 'profil',
    link: '/profil',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const { locale } = useI18n({ useScope: 'global' });
    const leftDrawerOpen = ref(false);

    return {
      locale,
      localeOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'id', label: 'Indonesia' },
      ],
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
