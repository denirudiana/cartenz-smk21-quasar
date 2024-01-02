<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

body {
  position: fixed;
  background: url(../../assets/bandung11.jpg);
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
          class="text text-white"
          style="
            font-weight: 700;
            text-shadow: 0 10px 40px rgba(255, 255, 255, 0.8);
            font-size: 65px;
          "
        >
          Welcome To Hotel Ibis Trans Studio
        </div>
      </div>
        <div class="row flex full-width justify-center items-center">
        <div
          class="text-h4 text-uppercase text-white"
          style="
            text-shadow: 0 10px 40px rgba(255, 255, 255, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;

          "
        >
        Vibrant economy hotel, open to everyone</div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Bandung1Page',
};
</script>
