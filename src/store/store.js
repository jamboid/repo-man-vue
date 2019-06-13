import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    searchResults: []
  },
  getters: {
    getSearchResults: (state) => {
      return state.searchResults;
    }
  },
  mutations: {
    updateSearchResults: (state, data) => {
      state.searchResults = data;
    }
  },
  actions: {

  }
});
