import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    users: [],
    currentPage: 1,
    itemsPerPage: 10
  },
  getters: {
    paginatedUsers: (state) => {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.users.slice(start, end);
    }
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
  },
  actions: {
    fetchUsers({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          console.log(response, 'response');
          commit("setUsers", response.data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  
  modules: {},
});
