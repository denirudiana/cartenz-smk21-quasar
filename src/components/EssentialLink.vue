<!-- <template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
});
</script> -->

<template>
  <q-item
    clickable
    v-ripple
    :class="$route.name == routeName ? 'activeItem' : ''"
    @click="goToPage(routeName)"
  >
            <q-item-section
            v-if="icon"
            avatar
            >
            <q-icon :name="icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ title }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    routeName: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ''
    }
  },

  setup() {

    return {
      linkActive: ref(''),
    }
  },

  methods: {
    goToPage(routeName: string) {
      this.linkActive = routeName;
      this.$router.push({ name: routeName });
    },
  },
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
