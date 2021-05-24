<template>
  <input type="text" v-model="searchString" v-on:blur="getSearch" v-on:keyup.enter="getSearch">
  <br>
  <SearchResults :data="searchResult" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { searchItems } from '../utils/helpers';
import SearchResults from './SearchResults.vue';
import data from '../assets/data.json';

export default defineComponent({
  name: 'Search',
  components: {
    SearchResults
  },
  data() {
    return {
      searchString: '',
      searchResult: {},
      awaitingSearch: false
    };
  },
  methods: {
    getSearch: async function() {
      // const res = await searchItems({ name: this.searchString });
      // this.searchResult = res;
      this.searchResult = data; // return mock data
    }
  },
  computed: {
  }
});
</script>
