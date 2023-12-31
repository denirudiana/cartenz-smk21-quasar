<template>
  <q-page>
    <div>
      <q-avatar size="110px" class="q-mb-md" style="margin: 20px">
        <img
          src="https://imgx.gridoto.com/crop/0x28:1080x745/700x465/photo/2021/04/22/174861873_467310274589527_725703-20210422111515.jpg"
          alt="Avatar"
        />
      </q-avatar>
      <q-card
        style="
          background-color: rgb(255, 255, 255);
          margin: 20px;
          color: #ff0000;
          font-family: cursive;
          letter-spacing: 1px;
        "
      >
        <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6"
                >Let Me Introduce <b>Group 8</b> members:</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label class="text-h6">{{ username }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
      <q-card
        style="
          background-color: rgb(255, 255, 255);
          margin: 20px;
          color: #ff0000;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
        "
      >
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      username: '1. Ruby Hardianto 2. Ramadhan Putra Wahyudi',
    };
  },
};
</script>
