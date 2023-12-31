<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="login-layout">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.login-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #4CAF50, #009688); /* Ubah warna latar belakang sesuai keinginan Anda */
}
</style>
