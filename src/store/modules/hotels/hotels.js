import { getHotels } from 'src/Config/data';

// Function to save state to localStorage
function saveToLocalStorage (state) {
  try {
    const jsonData = JSON.stringify(state);
    localStorage.setItem('hotels', jsonData);
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
}

// Function to initialize state from localStorage
const initializeState = () => {
  try {
    let storedData = localStorage.getItem('hotels');

    if (!storedData) {
      storedData = { records: [], fetchingHotels: false, filterItem: '', regions: [] };
      saveToLocalStorage(storedData);
    } else {
      storedData = JSON.parse(storedData);
    }

    return {
      records: storedData.records,
      fetchingHotels: storedData.fetchingHotels,
      filterItem: storedData.filterItem,
      regions: storedData.regions
    };
  } catch (error) {
    console.error('Error initializing state from localStorage:', error);
    return {
      records: [],
      fetchingHotels: false,
      filterItem: '',
      regions: []
    };
  }
};

const state = initializeState();

const getters = {
  GET_FETCHING_HOTELS: state => state.fetchingHotels,
  GET_HOTELS: state => state.records,
  GET_FILTER_ITEM: state => state.filterItem,
  GET_REGIONS: state => id => {
    const region = state.regions.find(r => r.id === id);
    return region ? region.cityReg : '';
  }
};

const mutations = {
  SET_FETCHING_HOTELS (state, data) {
    state.fetchingHotels = data;
    console.log('Fetching hotels:', data);
  },

  SET_HOTELS (state, data) {
    state.records = data;
    saveToLocalStorage(state);
  },

  SET_ADDING_HOTEL (state, formItem) {
    const newHotel = {
      id: formItem.id,
      name: formItem.name,
      avatar: formItem.avatar,
      uploadedAvatar: formItem.uploadedAvatar,
      email: formItem.email,
      companyName: formItem.companyName,
      address: formItem.address,
      stars: formItem.stars,
      selectedOption: formItem.selectedOption ? formItem.selectedOption.cityReg : null
    };

    state.records.push(newHotel);
    saveToLocalStorage(state);
  },

  SET_EDIT_HOTEL (state, formItem) {
    const objIndex = state.records.findIndex(obj => obj.id === formItem.id);

    if (objIndex !== -1) {
      const updatedHotel = {
        id: formItem.id,
        name: formItem.name,
        avatar: formItem.avatar,
        uploadedAvatar: formItem.uploadedAvatar,
        email: formItem.email,
        companyName: formItem.companyName,
        address: formItem.address,
        stars: formItem.stars,
        selectedOption: formItem.selectedOption
      };

      state.records[objIndex] = updatedHotel;
      saveToLocalStorage(state);
    }
  },

  SET_DELETE_HOTEL (state, hotel) {
    const index = state.records.findIndex(record => record.id === hotel.id);
    if (index !== -1) {
      state.records.splice(index, 1);
      saveToLocalStorage(state);
    }
  },

  SET_FILTER_ITEM (state, filterItem) {
    state.filterItem = filterItem;
    saveToLocalStorage(state);
  },

  SET_REGIONS (state, newData) {
    state.regions = newData;
    saveToLocalStorage(state);
  }
};

const actions = {
  FETCH_HOTELS ({ commit }) {
    commit('SET_FETCHING_HOTELS', true);
    // Simulating an asynchronous operation (replace with your actual data fetching logic)
    setTimeout(() => {
      commit('SET_HOTELS', getHotels);
      commit('SET_FETCHING_HOTELS', false);
    }, 1000); // Adjust the timeout as needed
  },

  ADD_HOTEL ({ commit }, form) {
    commit('SET_ADDING_HOTEL', form);
  },

  EDIT_HOTEL ({ commit }, formItem) {
    commit('SET_EDIT_HOTEL', formItem);
  },

  DELETE_HOTEL ({ commit }, hotel) {
    commit('SET_DELETE_HOTEL', hotel);
  },

  UPDATE_REGIONS ({ commit }, selected) {
    commit('SET_REGIONS', selected);
  },

  FILTER_HOTELS ({ commit }, filterItem) {
    commit('SET_FILTER_ITEM', filterItem);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
