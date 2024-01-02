<style>
body {
  /* background: url(../../assets/pexels-oleksandr-p-2166553.jpg);
  background-size: contain;
  backdrop-filter: blur(10px); */
  background: radial-gradient(at 18% 99%, rgb(223, 229, 113) 0px, transparent 50%) repeat scroll 0% 0%,
            radial-gradient(at 97% 8%, rgb(118, 249, 173) 0px, transparent 50%) repeat scroll 0% 0%,
            radial-gradient(at 79% 82%, rgb(233, 109, 131) 0px, transparent 50%) repeat scroll 0% 0%,
            radial-gradient(at 96% 10%, rgb(222, 81, 251) 0px, transparent 50%) repeat scroll 0% 0%,
            radial-gradient(at 42% 20%, rgb(116, 240, 251) 0px, transparent 50%) repeat scroll 0% 0%,
            radial-gradient(at 4% 49%, rgb(203, 88, 218) 0px, transparent 50%) repeat scroll 0% 0%, rgba(0, 0, 0, 0) radial-gradient(at 57% 33%, rgb(218, 83, 228) 0px, #a299ff 50%) repeat scroll 0% 0%;
  width: 100%;
  height: 300vh;
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
  <q-page class="col items-center justify-center">
    <div class="col full-width">
      <div class="col-md-4 offset-md-4 col-xs-12 q-pl-xl q-pr- q-pt-md">
        <q-page-container class="my-page row items-center justify-evenly ">
          <q-card
            class="my-card row q-mt-xl q-ml-xl q-mb-xl q-pa-xs"
            style="max-width: 1000px; max-height: 450px; border-radius: 10px"
          >
            <router-link to="/bandung1"><q-img
              class="my-img row q-mt-lg q-mb-lg q-ml-lg q-mr-lg"
              src="../../assets/bandung1.jpg"
              style="width: 320px; height: 380px; border-radius: 10px"
              :ratio="1 / 1"
              spinner-size="82px"
            /></router-link>
            <q-card-section class="my-card col items-center q-mt-md">
              <div class="text-h3">Hotel Ibis Trans Studio</div>
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <div class="text-h6">
                Lokasi: Jl. Jenderal Gatot Subroto No. 289, Bandung, Jawa Barat, Indonesia 40273
              </div>
            </q-card-section>
          </q-card>
          <q-card
            class="my-card row q-mt-xl q-ml-xl q-mb-xl q-pa-xs"
            style="max-width: 1000px; max-height: 450px; border-radius: 10px"
          >
            <router-link to="/bandung2"><q-img
              class="my-img row q-mt-lg q-mb-lg q-ml-lg q-mr-lg"
              src="../../assets/bandung2.jpg"
              style="width: 320px; height: 380px; border-radius: 10px"
              :ratio="1 / 1"
              spinner-size="82px"
            /></router-link>
            <q-card-section class="my-card col items-center q-mt-md">
              <div class="text-h3">The Gaia Hotel Bandung</div>
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <div class="text-h6">
                Lokasi: Jl. Doktor Setiabudi No. 430 Lembang, Bandung Barat, Jawa Barat, Indonesia 40143
              </div>
            </q-card-section>
          </q-card>
          <q-card
            class="my-card row q-mt-xl q-ml-xl q-mb-xl q-pa-xs"
            style="max-width: 1000px; max-height: 450px; border-radius: 10px"
          >
            <router-link to="/bandung3"><q-img
              class="my-img row q-mt-lg q-mb-lg q-ml-lg q-mr-lg"
              src="../../assets/bandung3.jpg"
              style="width: 320px; height: 380px; border-radius: 10px"
              :ratio="1 / 1"
              spinner-size="82px"
            /></router-link>
            <q-card-section class="my-card col items-center q-mt-md">
              <div class="text-h3">Grand Dafam Braga</div>
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <q-icon
                class="q-icon q-mt-md q-mb-xl"
                name="star"
                color="green-5"
                size="30px"
              />
              <div class="text-h6">
                Lokasi: Jl. Braga No. 99-101, Bandung, Jawa Barat, Indonesia 40111
              </div>
            </q-card-section>
          </q-card></q-page-container
        >
      </div>
    </div></q-page
  >
</template>

<script>
export default {
  // function fetchPosts (index,done) {
  //   posts.value.push(...samplePosts)
  //   done()
  // }
  name: 'BandungPage',
};
</script>
