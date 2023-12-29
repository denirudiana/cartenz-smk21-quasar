<template>
    <q-page>
      <div>
        <q-avatar size="110px" class="q-mb-md" style="margin: 20px">
          <img src="https://avatars.githubusercontent.com/u/110520754?v=4" alt="Avatar">
        </q-avatar>
        <q-card style="background-color: rgb(47, 47, 47); margin: 20px; color: #ffd23e; font-family: 'Times New Roman', Times, serif; letter-spacing: 1px;">
          <q-card-section>
            <q-item>
              <q-item-section>
                <q-item-label class="text-h6">Yo Wassup!<br>This is <b>KELOMPOK 1</b> members:</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label class="text-h6">{{ username }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
        <q-card style="background-color:  rgb(47, 47, 47); margin: 20px; color: #ffd23e; font-family: 'Times New Roman', Times, serif;">
          <q-card-section>
            <q-item>
              <q-item-section>
                <q-item-label class="text-h6">My Github: <a href="https://github.com/Kyzune" target="_blank" title="This takes you to Github" style="color: aliceblue;">Fikrah Fathoni Siregar</a></q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>

  export default {
    data() {
      return {
        username: '1. Fikrah Fathoni Siregar 2. Arman Maulana 3. Rheno Satria Andhara Putra',
      };
    },
  };
  </script>

  