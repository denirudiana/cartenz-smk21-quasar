<template>
    <q-page class="q-mb-md">
      <div class="q-gutter-md">
        <q-card>
          <q-card-section>
            <q-item>
              <q-item-section>
                <q-avatar icon="sign_language" text-color="black" bg-color="primary" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Hello!</q-item-label>
                <q-item-label caption>Selamat datang didalam Website</q-item-label>
              </q-item-section>
            </q-item>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </template>
  
  <script>
  export default {
    name: 'DashboardPage',
  };
  </script>
  
  <style scoped>
  .q-gutter-md {
    margin: -8px;
  }
  
  .q-card {
    width: 300px;
  }
  
  .q-item-label {
    font-size: 18px;
    font-weight: bold;
  }
  
  .q-item-label.caption {
    font-size: 14px;
    color: #666;
  }
  </style>
  