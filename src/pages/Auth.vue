<template>
    <q-page>
      <q-container>
        <div v-if="isLoggedIn">
          <h1>Welcome!</h1>
        </div>
        <div v-else>
          <p>Wait a second...</p>
          <q-spinner-hourglass size="100px" color="primary" />
        </div>
      </q-container>
    </q-page>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    name: 'AuthPage', // Specify a multi-word name for the component
    data() {
      const isLoggedIn = ref(false);
  
      // Simulate the login process when the component is mounted
      const simulateLoginProcess = () => {
        setTimeout(() => {
          isLoggedIn.value = true;
          this.$router.push('/dashboard');
        }, 2000);
      };
  
      // Call simulateLoginProcess when the component is mounted
      onMounted(() => {
        simulateLoginProcess();
        this.$q.notify({
          type: 'positive',
          message: 'Login Success.',
        });
      });
  
      return {
        isLoggedIn,
      };
    },
  });
  </script>
  
  
  
  