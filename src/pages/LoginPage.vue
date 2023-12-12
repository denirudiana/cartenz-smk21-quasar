<template>
  <q-page class="flex flex-center">
    <q-card style="width: 500px">
      <q-toolbar>
        <q-toolbar-title class="text-center">Login Page</q-toolbar-title>
      </q-toolbar>
      <q-card-section>
        <div class="q-gutter-md">
          <q-input v-model="email" label="Email" />
          <q-input v-model="password" label="Password" type="password" />
          <q-btn label="Login" color="primary" to="/dashboard" />
          <q-btn label="Register" class="text-black" to="/register" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>
