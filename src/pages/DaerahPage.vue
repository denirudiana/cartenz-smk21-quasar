<template>
  <q-page style="font-family: 'Times New Roman', Times, serif; letter-spacing: 1px;">
    <h3 style="margin-left: 15px;">Manajemen Daerah</h3>
    <hr>
    <br>
    <!-- Tombol Tambah Daerah -->
    <q-btn @click="tambahDaerah" label="Tambah Daerah" class="btn"/>

    <!-- Tambah Daerah -->
    <q-dialog v-model="dialogTambahDaerah" persistent>
      <q-card>
        <q-card-section>
          <q-input v-model="daerahName" label="Nama Daerah" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Batal" color="primary" @click="batalTambahDaerah" />
          <q-btn label="Simpan" color="positive" @click="simpanTambahDaerah" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Daftar Daerah -->
    <div v-if="Array.isArray(daerah) && daerah.length > 0">
      <h3 style="margin-left: 15px;">Daftar Daerah:</h3>
      <ul>
        <li v-for="(nama, index) in daerah" :key="index" style="margin: 5px;">
          {{ nama }}
          <q-btn @click="hapusDaerah(index)" label="Hapus" class="btn-delete" />
        </li>
      </ul>
    </div>
    <div v-else>
      <p style="margin-left: 15px;">Tidak ada daerah.</p>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useRegStore } from 'src/stores/RegStore';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'DaerahPage',
  setup() {
    const regStore = useRegStore();
    const $q = useQuasar();

    // Ensure regStore is initialized on mount
    onMounted(() => {
      const savedDaerah = JSON.parse(localStorage.getItem('daerahs') || '[]');
      regStore.initializeDaerah(savedDaerah);
    });

    const dialogTambahDaerah = ref(false);
    const daerahName = ref('');

    function showDeleteSuccessNotification () {
      $q.notify({
        type: 'negative',
        message: 'Delete Success'
      })
    };

    function showAddSuccessNotification () {
      $q.notify({
        type: 'positive',
        message: 'Added successfully'
      })
    };

    // Use a getter to ensure proper initialization
    const daerah = computed(() => regStore.daerahs);

    const tambahDaerah = () => {
      dialogTambahDaerah.value = true;
    };

    const batalTambahDaerah = () => {
      resetFormTambahDaerah();
      dialogTambahDaerah.value = false;
    };

    const simpanTambahDaerah = () => {
      if (daerahName.value.trim() !== '') {
        regStore.addDaerah(daerahName.value.trim());
        resetFormTambahDaerah();
        dialogTambahDaerah.value = false;
        showAddSuccessNotification();
        saveToLocalStorage();
      }
    };

    const resetFormTambahDaerah = () => {
      daerahName.value = '';
    };

    const hapusDaerah = (index: number) => {
      regStore.deleteDaerah(index);
      showDeleteSuccessNotification();
      saveToLocalStorage();
    };

    const saveToLocalStorage = () => {
      localStorage.setItem('daerahs', JSON.stringify(daerah.value));
    };

    return {
      regStore,
      dialogTambahDaerah,
      daerahName,
      daerah,
      simpanTambahDaerah,
      batalTambahDaerah,
      hapusDaerah,
      tambahDaerah,
    };
  },
});
</script>

<style scoped>
  .btn{
    color: black;
    background-color: #ffd23e;
    margin-left: 15px;
  }
  .btn-delete{
    color: white;
    background-color: red;
    width: 2cm;
    height: 1cm;
    margin-left: 10px;
  }
</style>