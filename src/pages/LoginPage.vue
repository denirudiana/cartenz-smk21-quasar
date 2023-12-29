<template>
    <q-page class="login-page">
      <q-page-container>
        <q-form @submit="login" class="login-form q-gutter-md">
          <q-card class="q-pa-md">
            <q-card-section>
              <q-card-title class="text-h6">Login</q-card-title>
              <q-field label="Username">
                <q-input v-model="username" class="klasik-font"/>
              </q-field>
              <q-field label="Password">
                <q-input v-model="password" type="password" class="klasik-font"/>
              </q-field>
            </q-card-section>
  
            <q-card-section>
              <q-btn
                type="submit"
                class="animated-button"
                :loading="loading"
                :disable="loading"
                @click="goToAuth()"
              >
                Login
              </q-btn>
            </q-card-section>
          </q-card>
        </q-form>
  
        <q-card-section class="q-mt-md text-center">
          <p>
            Don't have an account?
            <q-btn @click="goToRegister()" color="primary" flat class="klasik-font">
              Register
            </q-btn>
          </p>
        </q-card-section>
      </q-page-container>
    </q-page>
  </template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      username: '',
      password: '',
      loading: false,
    };
  },
  methods: {
    login() {
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    },
    goToAuth(){
        this.$router.push('/auth');
    },
    goToRegister() {
      this.$router.push('/regform');
      console.log('Navigating to registration page...');
    },
  },
});
</script>


<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url("bgr.jpg");
}

.login-form {
  background-color: #ffeaa7;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
}

.animated-button {
  font-size: 15px;
  background-color: #d35400;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.animated-button:hover {
  background-color: #e67e22;
}

.animated-button:active {
  transform: scale(0.95);
}

.text-center {
  text-align: center;
}

P{
  color: white;
  font-size: larger;
  Font-family: 'Times New Roman', serif;
}
.klasik-font {
  font-family: 'Times New Roman', serif; 
  font-size: 16px; 
}
</style>
