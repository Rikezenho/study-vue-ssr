import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Assume we have a universal API that returns Promises
// and ignore the implementation details
import { fetchData } from "./api";

export function createStore() {
  return new Vuex.Store({
    // IMPORTANT: state must be a function so the module can be
    // instantiated multiple times
    state: () => ({
      items: {}
    }),

    actions: {
      fetchData({ commit }) {
        // return the Promise via `store.dispatch()` so that we know
        // when the data has been fetched
        return fetchData().then(({ data }) => {
          commit("setData", { data: data.data });
        });
      },
    },

    mutations: {
      setData(state, { data }) {
        state.items = data;
      },
    }
  });
}
