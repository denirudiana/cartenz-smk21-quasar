<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="main-header" >
      <q-toolbar class="main-toolbar" >
        
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="menu-button"
        />

        <q-toolbar-title class="title">
          Dashboard Hotel
        </q-toolbar-title>
        <q-space />
        <!-- Tombol Logout -->
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

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <!-- Tombol Profil -->
        <q-item clickable v-ripple @click="goToProfile">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="person" />
            </q-avatar>
          </q-item-section>
          <q-item-section class="#8d6e63">{{ username || 'User' }}</q-item-section>
        </q-item>

        <!-- Additional buttons for Home, Dashboard, and Help -->
        <q-item clickable v-ripple @click="goToHome">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="home" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="goToAddReg">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="add"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>Tambah Daerah</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="goToData">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="dashboard"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>Data Hotel</q-item-section>
        </q-item>
        
        <q-item clickable v-ripple @click="goToHelp">
          <q-item-section avatar>
            <q-avatar>
              <q-icon name="help"/>
            </q-avatar>
          </q-item-section>
          <q-item-section>Help</q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container class="dashboard-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import { defineComponent, ref, watch } from 'vue';
import { globalUsername } from 'pages/LoginPage.vue';

export default defineComponent({
  name: 'MainLayout',

  setup() {
    const router = useRouter();
    const leftDrawerOpen = ref(false);
    const username = ref('');

    watch(globalUsername, (newUsername) => {
      console.log('New Username', newUsername);
      username.value = newUsername;
    });

    // Ensure that the left drawer is closed initially
    const beforeMount = () => {
      leftDrawerOpen.value = false;
    };

    return {
      username,
      router,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      goToProfile() {
        router.push('/profile');
        leftDrawerOpen.value = false; // Close the drawer after navigating
      },
      logout() {
        console.log('Logout');
        router.push('/');
      },
      goToHome() {
        router.push('/home');
        leftDrawerOpen.value = false;
      },
      goToData() {
        router.push('/data');
        leftDrawerOpen.value = false;
      },
      goToHelp() {
        router.push('/help');
        leftDrawerOpen.value = false;
      },
      goToAddReg() {
        router.push('/tambahdaerah');
        leftDrawerOpen.value = false;
      },
      beforeMount,
    };
  },
});
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 64px);
  background-color: #f5f5f5; /* Light grey background */
}

.main-header {
  background-color: #8d6e63; /* Dark blue-grey background */
  color: #ffffff; /* White text color */
}

.main-toolbar {
  background-color: #8d6e63; /* Dark teal background */
  color: #ffffff; /* White text color */
}

.menu-button {
  color: #ffffff;
}

.title {
  color: #ffffff;
}

.logout {
  color: #ffffff;
}

</style>