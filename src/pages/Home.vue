<style>
body {
  background: url(../assets/background-hotel-utama.jpg);
  position: fixed;
  background-size: fit;
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  width: 100%;
}

.headline {
  margin-top: 1.5em;
  font-size: 80px;
  font-weight: bold;
  color: white;
}
@media only screen and (max-width: 650px) {
  .content {
    margin-bottom: 15em;
    margin-top: 5em;
  }

  .headline {
    font-size: 60px;
    line-height: 1.2em;
    margin-top: 50px;
  }
}
</style>
<template>
  <q-page class="col items-center justify-center">
  <q-page-container
    style="
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <div class="content">
      <div class="section" style="text-align: center; max-width: 100%">
        <div class="headline">{{ $t('headline') }}</div>
        <br />
        <q-input
          v-model="search"
          type="text"
          placeholder="Apa yang ingin anda cari ?"
          flat
          color="black"
          rounded
          outlined
          bg-color="white"
          style="
            font-size: 20px;
            max-width: 768px;
            margin-left: auto;
            margin-right: auto;
          "
          ><template v-slot:prepend
            ><q-icon class="icon-xl q-ml-md q-mr-sm" name="search" size="lg"
          /></template>
          <template v-slot:append
            ><q-btn
              color="yellow"
              label="Cari"
              text-color="black"
              rounded
              outlined
              style="
                width: 100px;
                font-weight: 700;
                letter-spacing: 1px;
                font-size: 16px;
              "
              @click="onClick" /></template
        ></q-input>
      </div>
    </div>
  </q-page-container></q-page>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomePage',

  setup() {
    const { locale } = useI18n({ useScope: 'global' });
    return {
      onClick() {
        alert('Pencarian tidak ditemukan!');
      },
      onMainClick() {
        // console.log('Clicked on main button')
      },

      onItemClick() {
        // console.log('Clicked on an Item')
      },
      search: ref(''),
      locale,
      localeOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'id', label: 'Indonesia' },
      ],
    };
  },
});
</script>
