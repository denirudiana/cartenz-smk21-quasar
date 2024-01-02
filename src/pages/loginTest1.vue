  <template>
    <q-layout class="row items-center justify-evenly" style="background-color: rgb(60, 60, 60);">
      <q-card class="q-pa-md" style="width:380px; max-width: 80vw; height: 580px; max-height: 90vh; border: 3px solid black;
      background-color: rgb(255, 255, 255); justify-content: center; align-items: center; border-radius: 35px; display: block;">
      <div class="logo" style="display: flex; align-items: center; justify-content: center;">
        <q-img class="q-mt-lg q-mb-xs" src="../assets/Modern_Initial_MB_Logo__1_-removebg-preview.png" style=" width: 70px;"/></div>
      <div class="text-h4 text-center q-mb-xs q-mt-s" style= "font-weight: 700; font-size: 38px;">Welcome Back!</div>
      <div class="text-p text-center q-mb-xl " style= "font-weight: 700; color: #0000007d; font-size: 18px;">Please enter your detail</div>

        <!-- Tambahkan formulir login di sini -->
        <q-form @submit="login"  style=" width: 100%; display: flex; align-items: center; justify-content: center;">
          <div class="input" style="width: 70%; display: block; align-items: center; justify-content: center;">

          <q-input
            v-model="username"
            type="text"
            label="Email"
          >
          <template v-slot:append><q-icon name="email" /></template>
          </q-input>

          <q-input
            v-model="password"
            type="password"
            label="Password"
          >
          <template v-slot:append><q-icon name="lock" onclick="none" /></template>
          </q-input>
          <router-link to="/register" style="text-decoration: none;">
          <div class="text-p text-grey-7 q-ml- text-right q-mt-sm q-mb-lg">Forgot your password</div></router-link>

          <q-btn
            type="submit"
            color="black"
            label ="Log In"
            rounded
            style="text-transform: capitalize; width: 100%; font-weight: 700; font-size: 16px; margin: 1.5em 0;"
          />
          <q-btn
            type="submit"
            color="grey-4"
            label="‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎Log In with Google"
            rounded
            text-color="black"
            style=" text-transform: capitalize; width: 100%; font-weight: 700; font-size: 16px; max-width: 250px; max-height: 9px;"
            >
            <q-img
              src="../assets/logo-google.png"
              :ratio="1"
              spinner-color="primary"
              spinner-size="82px"
              style="  position: absolute; width: 30px; right: 75%;"
            /></q-btn></div>
        </q-form>
      </q-card>
 </q-layout>
</template>

  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';

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
        router.push('/dashboard');
      };

      return { username, password, login };
    },
  });
  </script>
