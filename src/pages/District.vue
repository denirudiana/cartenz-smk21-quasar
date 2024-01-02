<style>
body {
  background: url(../assets/background-hotel-utama.jpg);
  position: fixed;
  background-size: fit;
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  width: 100%;
}

.judul {
  font-size: 80px;
  font-weight: bold;
  color: white;
  margin: auto;
}
@media only screen and (max-width: 650px) {
  .content {
    margin-bottom: 15em;
    margin-top: 5em;
  }

  .judul {
    font-size: 60px;
    line-height: 1.2em;
    margin-top: 50px;
  }
}
</style>
<template>
  <q-page class="row items-center justify-evenly">
    <div class="content" style="height: 40vh">
      <div class="section" style="text-align: center; max-width: 100%">
        <div class="judul">Temukan Hotel Terdekat!</div>
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
  </q-page>
</template>

<script>
export default {
  name: 'DistrictPage',
};
</script>
