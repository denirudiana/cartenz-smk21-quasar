<template>
  <q-page class="login-page">
    <q-page-container>
      <div class="q-gutter-md">
        <q-card class="login-card">
          <q-card-section>
            <div class="text-h6 text-center">Login To Dashboard</div>
          </q-card-section>

          <q-card-section>
            <q-input v-model="email" label="Email" />
          </q-card-section>

          <q-card-section>
            <q-input v-model="password" type="password" label="Password" />
          </q-card-section>

          <q-card-section class="q-mt-md">
            <q-btn color="primary" label="Login" @click="login" />
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login () {
      // Perform login logic here
      // For simplicity, let's just print the entered email and password for now
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.login-page {
  background-color: #f5f6f8;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-right: 25%;
}

.login-card {
  max-width: 700px; /* Adjust the size as needed */
  width: 150%;
  margin: auto;
}

.q-gutter-md {
  padding: 1.5rem;
}
</style>
