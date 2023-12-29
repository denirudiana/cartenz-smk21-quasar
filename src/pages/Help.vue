
<template>
    <q-page class="q-mb-md" style="font-family: 'Times New Roman', Times, serif; letter-spacing: 1px;">
      <h3 style="margin-left: 15px;">Halaman Bantuan</h3>
      <hr>
      <div class="q-gutter-md">
        <q-card>
          <q-card-section>
            <b>
            <p>Selamat datang di halaman bantuan!</p>
            <a>Silahkan hubungi email di bawah ini jika ada pertanyaan</a>
            </b>
          </q-card-section>
          <q-btn class="but">
            <a href="mailto: entity855@gmail.com" class="emailme">Email Me</a>
          </q-btn>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'HelpPage',
  };
  </script>
  
  <style scoped>
  .emailme{
    color: black;
    text-decoration: none; 
  }
  .but{
    background-color: #ffd23e;
    margin-left: 15px;
    transition: 0.3s;
  }
  </style>
  