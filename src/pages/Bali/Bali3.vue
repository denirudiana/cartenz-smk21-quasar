<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

body {
  position: fixed;
  background: url(../../assets/bali33.jpg);
  background-size: cover;
  backdrop-filter: brightness(80%);
  width: 100%;
  height: 100vh;
}

.my-img {
  transition: 0.5s ease;
  cursor: pointer;
}

.my-img:hover {
  transform: scale(1.07);
}
@media only screen and (max-width: 650px) {
}
</style>
<template>
  <q-page class="row items-center justify-center">
    <div class="row full-width">
      <div class="col-md-12 offset-md-1 col-xs-12 q-pl-xl q-pr- q-pt-md">
        <div
          class="text text-white q-pr-xl q-pl-xl"
          style="
            width: 100%;
            font-weight: 700;
            text-shadow: 0 10px 40px rgba(255, 255, 255, 0.8);
            font-size: 65px;
          "
        >
        Welcome To Ohana Kuta Hotel
        </div>
      </div>
        <div class="row flex full-width justify-center items-center">
        <div
          class="text-h6 text-uppercase text-white"
          style="
            text-shadow: 0 10px 40px rgba(255, 255, 255, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;

          "
        >
        Modern Balinese-style rooms are fitted with a flat-screen TV and offer comfortable pool access.</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Bali3Page',
};
</script>
