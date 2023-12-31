<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="q-pa-md whatsapp-card">
      <q-card-section>
        <div class="text-h5 q-mb-md">Hubungi Kami</div>
        <q-icon name="chat" size="50px" color="green" />
      </q-card-section>
      <q-card-section>
        <q-btn
          color="green"
          label="Allul"
          @click="openWhatsApp"
        />
        <q-btn
          color="green"
          label="Zahir"
          @click="openWhatsApp2"
        />
        <q-btn
          color="green"
          label="Fikrah"
          @click="openWhatsApp3"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelpTodo',
  methods: {
    openWhatsApp() {
      // Ganti nomor WhatsApp dengan nomor yang ingin Anda gunakan
      const phoneNumber = '6281280898820';
      const message = 'Halo, saya memiliki pertanyaan.';

      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank');
    },
    openWhatsApp2(){
      const phoneNumber = '6283871689461';
      const message = 'Halo, saya memiliki pertanyaan.';

      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank');
    },
    openWhatsApp3(){
      const phoneNumber = '6285779113808';
      const message = 'Halo, saya memiliki pertanyaan.';

      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank');
    },
  }
});
</script>

<style scoped>
.whatsapp-card {
  width: 300px;
  max-width: 80vw;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.q-card-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
