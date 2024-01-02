<template>
  <q-layout view="hHr LpR lFf">
    <q-page-container>
      <q-page class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-4 offset-md-4 col-xs-12 q-pl-xl q-pr- q-pt-md">
            <q-card
              class="my-card"
              style="min-height: 580px; max-width: 380px; border-radius: 20px"
            >
              <div class="q-pa-md" style="max-width: 400px">
                <q-card-section class="flex justify-center q-mt-md">
                  <q-img
                    src="../../assets/Modern_Initial_MB_Logo__1_-removebg-preview.png"
                    placeholder-src="../../assets/Modern_Initial_MB_Logo__1_-removebg-preview.png"
                    :ratio="1 / 1"
                    spinner-color="transparent"
                    spinner-size="82px"
                    width="62px"
                  />
                </q-card-section>
                <q-card-section
                  class="flex justify-center"
                  style="
                    font-weight: 700;
                    font-size: 38px;
                    margin-bottom: -0.9em;
                    margin-top: -0.7em;
                  "
                >
                  Register
                </q-card-section>
                <q-card-section
                  class="flex justify-center q-pb-md"
                  style="
                    font-weight: 600;
                    font-size: 20px;
                    font-family: sans-serif;
                    color: rgba(65, 65, 65, 0.5);
                  "
                >
                  Please enter your detail
                </q-card-section>
                <q-form
                  @submit="onSubmit"
                  @reset="onReset"
                  class="q-gutter-xs q-pa-md"
                >
                  <q-input
                    v-model="email"
                    label="Email"
                    color="black"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please type your email',
                    ]"
                  />

                  <q-input
                    type="password"
                    v-model="password"
                    label="Password"
                    color="black"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Please type your password',
                      (val) => val > 16 || 'Maximal 16',
                    ]"
                  />
                  <q-input
                    type="password"
                    v-model="password"
                    label="Confirm Password"
                    color="black"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val !== null && val !== '') ||
                        'Please type your password',
                      (val) => val > 16 || 'Maximal 16',
                    ]"
                  />

                  <div>
                    <q-btn
                      class="full-width q-ma-lg"
                      label="Submit"
                      type="submit"
                      color="grey-10"
                      to="/login"
                      rounded
                    />

                    <div class="flex justify-center items-center">
                      Have an account ?
                      <router-link
                        class="q-ml-xs"
                        to="/login"
                        style="text-decoration: none"
                        >Login</router-link
                      >
                    </div>
                  </div>
                </q-form>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  name: 'RegisterPage',
  setup() {
    const $q = useQuasar();

    const email = ref(null);
    const password = ref(null);
    const accept = ref(false);

    return {
      email,
      password,
      accept,

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      onReset() {
        email.value = null;
        password.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
body {
  font-family: 'Poppins', sans-serif;
}
</style>
