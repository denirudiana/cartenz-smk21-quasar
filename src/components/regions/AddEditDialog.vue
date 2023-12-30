<template>
  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section>
      <q-toolbar>
        <q-toolbar-title>{{ dialogTitle }}</q-toolbar-title>
      </q-toolbar>
      <ErrorMessage :errorMessage="errorMessage" />
      <q-form ref="userForm">
        <div class="row">
          <div class="col-md-6 col-xs-12 q-pa-md">
            <q-input
              hide-bottom-space
              standard
              v-model="userForm.cityReg"
              placeholder="City Name *"
              type="text"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Please enter name', hasWhiteSpacesOnly]"
            />
          </div>
          <div class="col-md-6 col-xs-12 q-pa-md">
            <q-input
              standard
              v-model="userForm.provReg"
              placeholder="Province Name *"
              type="text"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Please enter name', hasWhiteSpacesOnly]"
            />
          </div>
        </div>
      </q-form>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn color="info" class="q-pl-md q-pr-md" outline label="Cancel" @click="closeDialog" />
      <q-btn label="Save" color="primary" class="q-pl-md q-pr-md" @click="btnSave" />
    </q-card-actions>
  </q-card>
</template>

<script>
import { cloneDeep } from 'lodash';
import ErrorMessage from '../globals/ErrorMessage';
import commonMixins from '../../mixins/commonMixins';
import { mapActions } from 'vuex';
import { getRegions } from '../../config/data';

const moment = require('moment');

export default {
  name: 'AddEditDialog',
  components: { ErrorMessage },
  mixins: [commonMixins],
  props: {
    dialogTitle: {
      type: String,
      required: true
    },
    records: {
      type: Array,
      required: true
    },
    closeDialog: {
      type: Function,
      required: false
    },
    editting: {
      type: Boolean,
      required: true
    },
    selected: {
      type: [Array, Object], // Menerima Array atau Object
      default: () => []
    }
  },
  data () {
    return {
      userForm: {
        cityReg: '',
        provReg: ''
      },
      moment: moment,
      errorMessage: ''
    };
  },
  mounted () {
    if (this.editting && this.selected && this.selected.length > 0) {
    // Pastikan bahwa objek `selected` ada dan memiliki properti 'id'
      this.userForm = cloneDeep(this.selected[0]);
    }
  },
  methods: {
    ...mapActions({
      addRegion: 'ADD_REGION',
      editRegion: 'EDIT_REGION'
    }),

    btnSave () {
      const { cityReg, provReg } = this.userForm;

      if (!cityReg || !provReg) {
        this.errorMessage = 'All fields are required!';
        return;
      }

      if (!this.editting) {
        // Tambahkan data baru ke dalam getRegions
        const newRegion = {
          id: getRegions.length + 1,
          cityReg: this.userForm.cityReg,
          provReg: this.userForm.provReg
        };
        getRegions.push(newRegion);

        // Simpan data baru ke dalam Config/data.js
        localStorage.setItem('regions', JSON.stringify(getRegions));

        // Panggil aksi untuk menambahkan data baru ke dalam Vuex store
        this.addRegion(newRegion);

        this.closeDialog();
        this.notify('Regions Added Success!', 'secondary');
      } else {
        const formItem = { ...this.userForm };
        this.editRegion(formItem);
        this.closeDialog();
        this.notify('Hotel Updated Success!', 'secondary');
      }
    }
  }
};
</script>

<style scoped>
/* ... existing styles ... */
</style>
