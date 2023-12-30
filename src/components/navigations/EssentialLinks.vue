<template>
    <div>
      <q-list>
        <div  v-for="link in links" :key="link.to">
          <q-item
            v-if="!link.expansionLinks"
            :to="link.to"
            clickable
            v-ripple
            exact
          >
            <div class="flex items-center justify-center">
              <q-item-section avatar>
                <q-icon :name="link.icon" size="sm" />
              </q-item-section>

              <q-item-section class="text-subtitle1">
                <span>{{ link.name }}</span>
              </q-item-section>
            </div>
          </q-item>

          <q-expansion-item
            v-else
            :icon="link.icon"
            :label="link.name"
            :to="link.to"
            :header-style="{ fontSize: '16px' }"
            :content-inset-level="0.9"
          >
            <div v-for="link in link.expansionLinks" :key="link.index">
              <q-item :to="link.itemTo" exact clickable dense>
                <div class="flex items-center justify-center">
                  <q-icon class="q-mr-xs q-my-sm" keep-color size="xs" name="radio_button_unchecked" val="orange" :color="link.color" />
                  <span class="text-black">{{ link.item }}</span>
                </div>
              </q-item>
            </div>
          </q-expansion-item>
        </div>
      </q-list>

    </div>
</template>

<script>
export default {
  name: 'EssentialLinks',
  data () {
    return {
      links: [
        { to: '/dashboard', name: 'Dashboard', icon: 'dashboard' },
        { to: '/dashboard/hotels', name: 'Hotels', icon: 'splitscreen' },
        { to: '/dashboard/regions', name: 'Regions', icon: 'view_week' },
        { to: '/dashboard/settings', name: 'Settings', icon: 'more_horiz' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
