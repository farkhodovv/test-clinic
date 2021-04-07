export const state = () => ({
  client: {},
  allclients: []
});

export const mutations = {
  SET_CLIENT(state, payload) {
    state.client = payload;
  },
  SET_ALL_CLIENTS(state, payload) {
    state.allclients = payload;
  }
};

export const actions = {
  fetchClient({ commit }, passport) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get("clients", {
          params: {
            passport
          }
        })
        .then(res => {
          resolve(res);
          commit("SET_CLIENT", res[0]);
        })
        .catch(e => {
          reject(e);
        });
    });
  },
  fetchAllClients({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get("clients?_sort=published_at:DESC")
        .then(res => {
          resolve(res);
          commit("SET_ALL_CLIENTS", res);
        })
        .catch(e => {
          reject(e);
        });
    });
  },
  filterAllClients({ commit }, passport) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get("clients?_sort=published_at:DESC", {
          params: {
            passport
          }
        })
        .then(res => {
          resolve(res);
          commit("SET_ALL_CLIENTS", res);
        })
        .catch(e => {
          reject(e);
        });
    });
  },
};
