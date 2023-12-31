<template>
  <q-page class="reg-page">
    <q-card class="reg-card">
      <q-card-section>
        <q-btn @click="tambahReg" label="Tambah Daerah" class="btn" color="brown" />
      </q-card-section>
      <q-dialog v-model="dialogTambahReg" persistent>
        <q-card>
          <q-card-section>
            <q-input v-model="regName" label="Nama Reg" />
          </q-card-section>
          <q-card-actions align="center">
            <q-btn label="Batal" color="brown" @click="batalTambahReg" />
            <q-btn label="Simpan" color="brown" @click="simpanTambahReg" />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-card-section>
        <div v-if="reg.length > 0">
          <h3 class="q-mb-md">Daftar Daerah:</h3>
          <q-list bordered separator class="reg-list">
            <q-item v-for="(nama, index) in reg" :key="index" clickable>
              <q-item-section>
                <q-item-label>{{ nama }}</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-btn @click="hapusReg(index)" label="Hapus" color="brown" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div v-else>
          <p class="q-mb-md">Tidak ada daerah.</p>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

  
  <script lang="ts">
  import { defineComponent, ref, onMounted, computed } from 'vue';
  import { useRegStore } from 'src/stores/Regstore';
  import { useQuasar } from 'quasar';
  
  export default defineComponent({
    name: 'RegPage',
    setup() {
      const regStore = useRegStore();
      const $q = useQuasar();
  
      // Ensure regStore is initialized on mount
      onMounted(() => {
        const savedReg = JSON.parse(localStorage.getItem('regs') || '[]');
        regStore.initializeReg(savedReg);
      });
  
      const dialogTambahReg = ref(false);
      const regName = ref('');
  
      function showDeleteSuccessNotification() {
        $q.notify({
          type: 'custom-color',
          color: 'brown',
          message: 'Delete Success'
        });
      }
  
      function showAddSuccessNotification() {
        $q.notify({
          type: 'custom-color',
          color: 'brown',
          message: 'Added successfully'
        });
      }
  
      // Use a getter to ensure proper initialization
      const reg = computed(() => regStore.regs);
  
      const tambahReg = () => {
        dialogTambahReg.value = true;
      };
  
      const batalTambahReg = () => {
        resetFormTambahReg();
        dialogTambahReg.value = false;
      };
  
      const simpanTambahReg = () => {
        if (regName.value.trim() !== '') {
          regStore.addReg(regName.value.trim());
          resetFormTambahReg();
          dialogTambahReg.value = false;
          showAddSuccessNotification();
          saveToLocalStorage();
        }
      };
  
      const resetFormTambahReg = () => {
        regName.value = '';
      };
  
      const hapusReg = (index: number) => {
        regStore.deleteReg(index);
        showDeleteSuccessNotification();
        saveToLocalStorage();
      };
  
      const saveToLocalStorage = () => {
        localStorage.setItem('regs', JSON.stringify(reg.value));
      };
  
      return {
        regStore,
        dialogTambahReg,
        regName,
        reg,
        simpanTambahReg,
        batalTambahReg,
        hapusReg,
        tambahReg,
      };
    },
  });
  </script>
  <style scoped>
  .reg-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .reg-card {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .reg-list {
    max-width: 300px;
  }
  
  .btn {
    margin-bottom: 15px;
  }
  </style>