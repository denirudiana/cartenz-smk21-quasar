<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          color="yellow"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="q-toolbar-title">
          List Hotel
        </q-toolbar-title>

        <!-- Tombol Logout -->
        <q-btn
          flat
          icon="logout"
          label="LOGOUT"
          aria-label="Logout"
          @click="logout"
          class="logout-btn"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="background-color: rgb(193, 193, 193);"
    >
      <q-list>
        <q-item-label
          header 
          class="nav"
        >
          Navigation
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          class="title_nav"
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
import { defineComponent, ref, getCurrentInstance } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
{
    title : 'Dashboard',
    routeName: 'dashboard',
    link: '/dashboard'
  },
  {
    title: 'Hotel',
    routeName: 'hotel',
    link: '/listhotel'
  },
  {
    title: 'Daerah',
    routeName: 'daerah',
    link: '/daerah'
  },
  {
    title: 'Profile',
    routeName: 'profile',
    link: '/profile'
  },
  {
    title: 'Help',
    routeName: 'help',
    link: '/help'
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    const instance = getCurrentInstance();

    const logout = () => {
      instance.appContext.config.globalProperties.$router.push('/');
    }

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      logout
    }
  }
});
</script>

<style>

.q-toolbar-title{
  color: #ffd23e;
  font-family: 'Times New Roman', Times, serif;
  letter-spacing: 1px;
}
.logout-btn{
  color: #ffd23e;
}
</style>