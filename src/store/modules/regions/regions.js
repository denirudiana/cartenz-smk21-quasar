// src/store/regions.js

const state = () => ({
  records: [],
  fetchingRegions: true,
  filterItem: '',
  regions: [] // tambahkan regions sebagai bagian dari state
});

const getters = {
  GET_FETCHING_REGIONS: state => state.fetchingRegions,
  SUPER_REGIONS: state => state.records,
  FILTER_ITEM: state => state.filterItem
};

const mutations = {
  SET_FETCHING_REGIONS (state, data) {
    state.fetchingRegions = data;
  },
  SET_REGIONS (state, data) {
    state.records = data;
    saveToLocalStorage(state);
  },
  SET_ADDING_REGION (state, formItem) {
    const newRegion = {
      id: formItem.id,
      cityReg: formItem.cityReg,
      provReg: formItem.provReg
    };

    state.records.push(newRegion);
    saveToLocalStorage(state);
  },
  SET_EDIT_REGION (state, formItem) {
    const objIndex = state.records.findIndex(obj => obj.id === formItem.id);

    if (objIndex !== -1) {
      const updatedRegion = {
        id: formItem.id,
        cityReg: formItem.cityReg,
        provReg: formItem.provReg
      };

      state.records[objIndex] = updatedRegion;
      saveToLocalStorage(state);
    }
  },
  SET_DELETE_REGION (state, selected) {
    // Menangani kasus ketika selected bukan array
    if (!Array.isArray(selected)) {
      selected = [selected];
    }

    selected.forEach(item => {
      const index = state.records.findIndex(record => record.id === item.id);
      if (index !== -1) {
        state.records.splice(index, 1);
      }
    });

    saveToLocalStorage(state);
  },
  SET_FILTER_ITEM (state, filterItem) {
    state.filterItem = filterItem;
    saveToLocalStorage(state);
  }
};

const actions = {
  FETCH_REGIONS ({ commit }) {
    commit('SET_FETCHING_REGIONS', true);

    // Simulating an asynchronous operation (replace with your actual data fetching logic)
    setTimeout(() => {
      const storedRegions = JSON.parse(localStorage.getItem('regions')) || [];
      console.log('Stored Regions:', storedRegions); // Pastikan data benar-benar dimuat

      commit('SET_REGIONS', storedRegions);
      commit('SET_FETCHING_REGIONS', false);
    }, 1000); // Sesuaikan timeout sesuai kebutuhan
  },
  ADD_REGION ({ commit }, form) {
    commit('SET_ADDING_REGION', form);
  },
  EDIT_REGION ({ commit }, formItem) {
    commit('SET_EDIT_REGION', formItem);
  },
  DELETE_REGION ({ commit }, selected) {
    commit('SET_DELETE_REGION', selected);
  },
  FILTER_REGIONS ({ commit }, filterItem) {
    commit('SET_FILTER_ITEM', filterItem);
  }
};

// Fungsi untuk menyimpan state ke localStorage
function saveToLocalStorage (state) {
  try {
    const jsonData = JSON.stringify(state);
    localStorage.setItem('regions', jsonData);
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
};
