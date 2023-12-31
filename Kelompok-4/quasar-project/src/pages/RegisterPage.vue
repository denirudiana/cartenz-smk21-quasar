<template>
  <q-page class="row items-center justify-center" style="height: 100vh; background-color: transparent;">
    <q-card class="q-pa-md login-card">
      <div class="text-h6 text-center q-mb-md">Registration Form</div>

      <!-- Tambahkan formulir pendaftaran di sini -->
      <q-form @submit="register">
        <q-input v-model="username" dense outlined label="Username" />
        <q-input v-model="email" dense outlined label="Email" type="email" />
        <q-input v-model="password" dense outlined type="password" label="Password" />
        <q-input v-model="confirmPassword" dense outlined type="password" label="Confirm Password" />
        <router-link to="/" class="q-mt-md text-center">Sudah punya akun? Login</router-link>
        <div><q-btn type="submit" color="brown" label="Register" style="color: white;" /></div>
      </q-form>

      

    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'RegisterPage',
  setup() {
    const router = useRouter();
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');

    const register = () => {
      // Logika pendaftaran di sini
      // Anda dapat menambahkan validasi dan logika pendaftaran

      // Contoh pengalihan ke halaman setelah pendaftaran
      router.push('/');
    };

    return { username, email, password, confirmPassword, register };
  },
});
</script>

<style scoped>
.login-card {
  width: 400px;
  max-width: 80vw;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
