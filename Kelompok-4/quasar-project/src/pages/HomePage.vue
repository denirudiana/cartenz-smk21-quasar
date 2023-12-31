<template>
    <q-page>
      <q-page-container class="q-pa-md">
        <q-card class="home-card hotel-theme">
          <q-card-section class="text-h5 text-center">
            Welcome to Our Hotel!
          </q-card-section>
  
          <q-card-section class="text-h6">
            Explore our luxurious offerings and find what you're looking for.
          </q-card-section>
  
          <q-card-section>
            <q-input
              v-model="searchQuery"
              outlined
              dense
              placeholder="Search for rooms, amenities, and more..."
              @keyup.enter="searchPages"
              class="search-input"
            >
              <template v-if="searchQuery" v-slot:append>
                <q-btn
                  color="primary"
                  icon="search"
                  @click="searchPages"
                  class="search-btn"
                />
              </template>
            </q-input>
          </q-card-section>
  
          <q-card-actions align="center" class="q-mb-md">
            <q-btn
              v-for="page in suggestedPages"
              :key="page.id"
              :label="page.name"
              color="brown"
              @click="handlePageClick(page.name)"
            />
          </q-card-actions>
        </q-card>
  
        <q-card v-if="showSearchResult" class="result-card hotel-theme">
          <q-card-section>
            <div v-if="searchResult.length > 0">
              <div class="text-h5">Search Results:</div>
              <ul>
                <li
                  v-for="result in searchResult"
                  :key="result.id"
                  @click="navigateToPage(result.id)"
                  class="clickable-result"
                >
                  {{ result.name }}
                </li>
              </ul>
            </div>
            <div v-else>
              <div class="text-h5">No results found.</div>
            </div>
          </q-card-section>
        </q-card>
      </q-page-container>
    </q-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'HomePage',
    data() {
      return {
        searchQuery: '',
        suggestedPages: [
          { name: 'Dashboard' },
          { name: 'Help' }
        ],
        searchResult: [],
        showSearchResult: false,
      };
    },
    methods: {
      searchPages() {
        console.log('Searching for:', this.searchQuery);

        this.searchResult = this.suggestedPages.filter((page) =>
          page.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );

        this.showSearchResult = true;
      },
      navigateToPage(name) {
        console.log('Navigating to:', name);
        this.$router.push(`/${name.toLowerCase()}`);
      },
      handlePageClick(pageName) {
        this.navigateToPage(pageName.toLowerCase());
      },
      handleLogout() {
        this.$router.push('/');
        // Add your logout logic here
      },
    },
  });
</script>

  
  
<style scoped>
.home-card {
  max-width: 400px;
  margin: auto;
}

.hotel-theme {
  background-color: #fafafa; /* Light gray background */
  color: #333; /* Dark gray text color */
}

.search-input {
  width: calc(100% - 50px);
  background-color: #fff; /* White background for input */
  border: 1px solid #ccc; /* Light gray border */
}

.search-btn {
  height: 100%;
  background-color: #2196f3; /* Blue color for the search button */
  color: #fff; /* White text color for the search button */
}

.result-card {
  margin-top: 20px;
  background-color: #fff; /* White background for result card */
  border: 1px solid #ccc; /* Light gray border */
}

.clickable-result {
  cursor: pointer;
  color: #333; /* Dark gray color for clickable items */
}
</style>