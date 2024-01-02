<template>
  <q-layout view="lHh Lpr lFf">
  <!-- <q-layout> -->
    <q-header elevated>
      <q-toolbar style="height: 10vh; padding: 0 2em; background-color: rgba(0, 0, 0, 0.6);">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title style="font-weight: 700; font-size: large;">
          {{ $t('title') }}
        </q-toolbar-title>

        <q-select
            v-model="locale"
            :options="localeOptions"
            emit-value
            map-options
            options-dense
            dark
            outlined
            rounded
            dense
            :input-style="{ backgroundColor: '#ff0000' }"
            style="min-width: 100px; margin: 0 1em;"
          />

          <router-link to="/login"><q-img
          src="../assets/account.png"
          :ratio="1"
          spinner-color="primary"
          spinner-size="82px"
          style="width: 40px; margin: 0 0.5em;"
        /></router-link>
        </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="300"
        :breakpoint="500"
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-white-1'"
    >
      <q-list>

        <!-- <q-item-label
          header
          style="padding: 1em;"
        >
        MENU
        </q-item-label> -->

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <DropdownLink
          v-for="link in dropdowns"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { useI18n } from 'vue-i18n'
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import DropdownLink from 'components/DropdownLink.vue';

const linksList = [
  {
    title: 'Home',
    routeName: 'home',
    icon: 'home',
  },
  {
    title: 'Dashboard',
    routeName: 'dashboard',
    icon: 'dashboard',
  },
  {
    title: 'Help',
    routeName: 'help',
    icon: 'help',
  },
  {
    title: 'Jakarta',
    routeName: 'jakarta',
    icon: 'business',
  },
  {
    title: 'Bandung',
    routeName: 'bandung',
    icon: 'business',
  },
  {
    title: 'Bogor',
    routeName: 'bogor',
    icon: 'business',
  },
  {
    title: 'Bali',
    routeName: 'bali',
    icon: 'business',
  },

];
const DroplinksList = [
  {
    title: 'District',
    routeName: 'district',
    icon: 'business',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    DropdownLink,
  },

  setup () {
    const { locale } = useI18n({ useScope: 'global' })
    const leftDrawerOpen = ref(false)

    return {
      onMainClick () {
        // console.log('Clicked on main button')
      },

      onItemClick () {
        // console.log('Clicked on an Item')
      },
      drawer: ref(false),
      miniState: ref(true),
      locale,
      localeOptions: [
        { value: 'en-US', label: 'English' },
        { value: 'id', label: 'Indonesia' }
      ],
      essentialLinks: linksList,
      dropdowns: DroplinksList,

      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
