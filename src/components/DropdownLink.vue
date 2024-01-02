<template>
  <q-btn-dropdown
    icon="business"
    label="‎ ‎ ‎ ‎ District"
    flat
    class="dropdown-btn"
    @click="onMainClick"
    no-caps
    size="15px"
    style="width: 100%; height: 50px; padding-left: 85px; padding-right: 215px"
    v-ripple
    clickable
  >
    <q-btn-dropdown
      icon="business"
      label="‎ ‎ ‎ ‎Jakarta‎ ‎ ‎ ‎"
      flat
      class="dropdown-btn"
      @click="onMainClick"
      no-caps
      size="15px"
      style="height: 50px; display: block"
      v-ripple
      clickable
    >
      <q-list>
        <q-item
          v-close-popup
          to="/jakarta1"
          style="color: black; display: block"
          clickable
          @click="onItemClick"
          ><q-item-section v-if="icon" avatar
            ><q-icon :name="icon" /></q-item-section
          ><q-item-section>
            <q-item-label>Hotel Jakarta 1</q-item-label>
          </q-item-section></q-item
        ></q-list
      >
      <q-list>
        <q-item
          to="/jakarta2"
          style="color: black; display: block"
          clickable
          v-close-popup
          @click="onItemClick"
          ><q-item-section v-if="icon" avatar
            ><q-icon :name="icon" /></q-item-section
          ><q-item-section>
            <q-item-label>Hotel Jakarta 2</q-item-label>
          </q-item-section></q-item
        ></q-list
      >
      <q-list>
        <q-item
          to="/jakarta3"
          style="color: black; display: block"
          clickable
          v-close-popup
          @click="onItemClick"
          ><q-item-section v-if="icon" avatar
            ><q-icon :name="icon" /></q-item-section
          ><q-item-section>
            <q-item-label>Hotel Jakarta 3</q-item-label>
          </q-item-section></q-item
        ></q-list
      ></q-btn-dropdown
    >
    <q-btn-dropdown
      icon="business"
      label="‎ ‎ ‎ ‎Bandung"
      flat
      class="dropdown-btn"
      @click="onMainClick"
      no-caps
      size="15px"
      style="height: 50px; display: block"
      v-ripple
      clickable
    >
      <q-list>
        <q-item
          to="/bandung1"
          style="color: black; display: block"
          clickable
          v-close-popup
          @click="onItemClick"
          ><q-item-section v-if="icon" avatar
            ><q-icon :name="icon" /></q-item-section
          ><q-item-section>
            <q-item-label>Hotel Bandung 1</q-item-label>
          </q-item-section></q-item
        ></q-list
      >
      <q-list>
        <q-item
          to="/bandung2"
          style="color: black; display: block"
          clickable
          v-close-popup
          @click="onItemClick"
          ><q-item-section v-if="icon" avatar
            ><q-icon :name="icon" /></q-item-section
          ><q-item-section>
            <q-item-label>Hotel Bandung 2</q-item-label>
          </q-item-section></q-item
        ></q-list
      >
      <q-list>
        <q-item
          to="/bandung3"
          style="color: black; display: block"
          clickable
          v-close-popup
          @click="onItemClick"
          ><q-item-section v-if="icon" avatar
            ><q-icon :name="icon" /></q-item-section
          ><q-item-section>
            <q-item-label>Hotel Bandung 3</q-item-label>
          </q-item-section></q-item
        ></q-list
      ></q-btn-dropdown
    >
    <q-btn-dropdown
      icon="business"
      label="‎ ‎ ‎ Bogor‎ ‎ ‎ ‎ ‎ ‎ "
      flat
      class="dropdown-btn"
      @click="onMainClick"
      no-caps
      size="15px"
      style="height: 50px; display: block"
      v-ripple
      clickable
    >
      <q-list>
        <q-item
          to="/bogor1"
          style="color: black; display: block"
          clickable
          v-close-popup
          @click="onItemClick"
          ><q-item-section v-if="icon" avatar
            ><q-icon :name="icon" /></q-item-section
          ><q-item-section>
            <q-item-label>Hotel Bogor 1</q-item-label>
          </q-item-section></q-item
        ></q-list
      >
      <q-list>
        <q-item
          to="/bogor2"
          style="color: black; display: block"
          clickable
          v-close-popup
          @click="onItemClick"
          ><q-item-section v-if="icon" avatar
            ><q-icon :name="icon" /></q-item-section
          ><q-item-section>
            <q-item-label>Hotel Bogor 2</q-item-label>
          </q-item-section></q-item
        ></q-list
      >
      <q-list>
        <q-item
          to="/bogor3"
          style="color: black; display: block"
          clickable
          v-close-popup
          @click="onItemClick"
          ><q-item-section v-if="icon" avatar
            ><q-icon :name="icon" /></q-item-section
          ><q-item-section>
            <q-item-label>Hotel Bogor 3</q-item-label>
          </q-item-section></q-item
        ></q-list
      ></q-btn-dropdown
    >
    <q-btn-dropdown
      icon="business"
      label="‎ ‎ ‎ ‎Bali‎ ‎ ‎ ‎‎ ‎ ‎ ‎‎ ‎ ‎"
      flat
      class="dropdown-btn"
      @click="onMainClick"
      no-caps
      size="15px"
      style="height: 50px; display: block"
      v-ripple
      clickable
    >
      <q-list>
        <q-item
          to="/bali1"
          style="color: black; display: block"
          clickable
          v-close-popup
          @click="onItemClick"
          ><q-item-section v-if="icon" avatar
            ><q-icon :name="icon" /></q-item-section
          ><q-item-section>
            <q-item-label>Hotel Bali 1</q-item-label>
          </q-item-section></q-item
        ></q-list
      >
      <q-list>
        <q-item
          to="/bali2"
          style="color: black; display: block"
          clickable
          v-close-popup
          @click="onItemClick"
          ><q-item-section v-if="icon" avatar
            ><q-icon :name="icon" /></q-item-section
          ><q-item-section>
            <q-item-label>Hotel Bali 2</q-item-label>
          </q-item-section></q-item
        ></q-list
      >
      <q-list>
        <q-item
          to="/bali3"
          style="color: black; display: block"
          clickable
          v-close-popup
          @click="onItemClick"
          ><q-item-section v-if="icon" avatar
            ><q-icon :name="icon" /></q-item-section
          ><q-item-section>
            <q-item-label>Hotel Bali 3</q-item-label>
          </q-item-section></q-item
        ></q-list
      ></q-btn-dropdown
    >
  </q-btn-dropdown>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DropdownLink',
  props: {
    title: {
      type: String,
      required: true,
    },
    routeName: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
  },

  setup() {
    return {
      linkActive: ref(''),
      onMainClick() {
        // console.log('Clicked on main button')
      },

      onItemClick() {
        // console.log('Clicked on an Item')
      },
    };
  },

  // methods: {
  //   goToPage(routeName: string) {
  //     this.linkActive = routeName;
  //     this.$router.push({ name: routeName });
  //   },
  // },
});
</script>

<!-- <q-btn-dropdown
>
  <q-list>
    <q-item clickable v-close-popup>
      <q-item-section>
        <q-item-label>Photos</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable v-close-popup>
      <q-item-section>
        <q-item-label>Videos</q-item-label>
      </q-item-section>
    </q-item>

    <q-item clickable v-close-popup>
      <q-item-section>
        <q-item-label>Articles</q-item-label>
      </q-item-section></q-item></q-list></q-btn-dropdown> -->
