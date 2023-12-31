<template>
  <q-page class="row items-center justify-center" style="height: 100vh; background-color: transparent;">
    <q-card class="q-pa-md login-card">
      <div class="text-h6 text-center q-mb-md">Login Form</div>

      <!-- Tambahkan formulir login di sini -->
      <q-form @submit="login">
        <q-input v-model="username" dense outlined label="Username" />
        <div><q-input v-model="password" dense outlined type="password" label="Password" /></div>
        <router-link to="/register" class="q-mt-md text-center">Belum punya akun? Register</router-link>
        <div><q-btn type="submit" color="brown" label="Login" style="color: white;" /></div>
      </q-form>
        
      

      

    </q-card>
  </q-page>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export const globalUsername = ref('');
export default defineComponent({
  name: 'LoginTodo',
  setup() {
    const router = useRouter();
    const username = ref('');
    const password = ref('');

    const login = () => {
      // Logika login di sini
      // Anda dapat menambahkan validasi dan logika autentikasi

      // Contoh pengalihan ke halaman setelah login
      globalUsername.value = username.value;
      router.push('/home');
    };

    return { username, password, login };
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
