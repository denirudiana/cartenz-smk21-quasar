<template>
  <q-page class="row items-center justify-center" style="height: 100vh; background-color: transparent;">
    <q-card class="q-pa-md profile-card">
      <q-avatar class="round-avatar" icon="person" color="brown" text-color="white" />
      <div> </div>
      <div> </div>
      <div class="text-h6  q-mb-md">Username : Kelompok 4</div>
      <div class="text-h6  q-mb-md">Member Name      : Thiflul Ma'ani Minal M., Siti Fidela Z.</div>
      <q-btn
        color="brown"
        label="Logout"
        @click="logout"
        style="margin-top: 20px;"
      />
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { globalUsername } from 'pages/LoginPage.vue';

export default defineComponent({
  name: 'ProfilePage',
  setup() {
    const router = useRouter();

    const username = globalUsername.value;

    const logout = () => {
      // Log out logic, clear user data, and navigate to login page
      globalUsername.value = '';
      router.push('/');
    };

    return {
      username,
      logout,
    };
  },
});
</script>

<style scoped>
.round-avatar {
  width: 75px;
    height: 75px;
    border-radius: 50%;
  }
  
</style>
