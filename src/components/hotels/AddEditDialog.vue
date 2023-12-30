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
              v-model="userForm.name"
              placeholder="Hotel Name *"
              type="text"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Please enter name', hasWhiteSpacesOnly]"
            />
          </div>
          <div class="col-md-6 col-xs-12 q-pa-md">
            <q-input
              standard
              v-model="userForm.email"
              placeholder="Hotel Email *"
              type="email"
              lazy-rules
              mask="email"
              :rules="[val => !!val || 'Email is missing', isValidEmail]"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-xs-12 q-pa-md">
            <q-input
              standard
              v-model="userForm.companyName"
              placeholder="Hotel Company Name *"
              type="text"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Please enter company name', hasWhiteSpacesOnly]"
            />
          </div>
          <div class="col-md-6 col-xs-12 q-pa-md">
            <q-input
              standard
              v-model="userForm.address"
              placeholder="Hotel Address *"
              type="text"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Please enter address', hasWhiteSpacesOnly]"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-xs-12 q-pa-md">
            <q-input
              standard
              v-model="userForm.stars"
              placeholder="Hotel Stars *"
              type="number"
              lazy-rules
              :rules="[
                val => val !== null && val !== '' || 'Please type a star number',
                val => val > 0 && val < 100 || 'Please type a number'
              ]"
            />
          </div>
          <div class="col-md-6 col-xs-12 q-pa-md">
            <q-input
              standard
              v-model="userForm.uploadedAvatar"
              placeholder="Input the Url of Image *"
              type="text"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Please enter url', hasWhiteSpacesOnly]"
            />
          </div>
          <div class="col-md-6 col-xs-12 q-pa-md">
            <q-select
              v-model="userForm.selectedOption"
              :options="userForm.localStorageData"
              label="Pilih Daerah Kota"
              option-label="cityReg"
              option-value="id"
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
        name: '',
        email: '',
        avatar: 'https://clipart-library.com/images/rcnGLqA5i.jpg',
        companyName: '',
        address: '',
        stars: '',
        uploadedAvatar: '',
        selectedOption: [],
        localStorageData: []
      },
      moment: moment,
      errorMessage: '',
      backendServerUrl: 'http://localhost:3001',
      uploadProgress: 0
    };
  },
  mounted () {
    if (this.editting) {
      this.userForm = cloneDeep(this.selected);
    }
    const storedData = localStorage.getItem('regions');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.userForm.localStorageData = parsedData.records;
      console.log(parsedData.records);
    }
  },
  methods: {
    ...mapActions({
      addHotel: 'ADD_HOTEL',
      editHotel: 'EDIT_HOTEL',
      updateRegions: 'UPDATE_REGIONS'
    }),

    btnSave () {
      const { name, email, companyName, address, stars, uploadedAvatar, selectedOption } = this.userForm;

      if (!name || !companyName || !address || !stars || !uploadedAvatar || !selectedOption) {
        this.errorMessage = 'All fields are required!';
        return;
      }

      if (this.isValidEmail(email) === 'Invalid email') {
        this.errorMessage = 'Invalid email!';
        return;
      }

      if (!this.editting) {
        this.addHotel(this.userForm);
        this.updateRegions(this.userForm.localStorageData); // Pembaruan data daerah
        this.closeDialog();
        this.notify('Hotel Added Success!', 'secondary');
      } else {
        const formItem = this.userForm;
        this.editHotel(formItem);
        this.updateRegions(this.userForm.localStorageData); // Pembaruan data daerah
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
