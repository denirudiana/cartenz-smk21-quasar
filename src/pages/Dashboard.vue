<template>
  <q-page class="q-pa-sm q-pt-md">
    <div class="row col-xs-12 q-gutter-md" style="width: 100%">

      <!--      left panel with user tasks details -->
      <!--    end of left panel with user tasks details -->

      <!--      right panel with Closed deals and tasks -->
      <div class="col-xs-12 col-sm-12 col-md-4  q-pa-xs">
        <!--        Closed deals -->
        <q-card class="my-card q-mb-md">
          <q-card-section class="q-pa-sm">
            <div class="row">
              <div>Welcome to Dashboard !</div>
              <q-space />
            </div>
            <q-space />
          </q-card-section>
          <q-separator />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .drp-item {
    font-size: 14px;
  }
</style>
