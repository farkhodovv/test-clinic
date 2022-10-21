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
  fetchClient({ commit }, id) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(`/api/paczients/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
          resolve(res);
          commit("SET_CLIENT", res.data);
        })
        .catch(e => {
          reject(e);
        }); 
    });
  },
  fetchAllClients({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get("/api/paczients", { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
          resolve(res.data);
          commit("SET_ALL_CLIENTS", res.data);
        })
        .catch(e => {
          reject(e);
        });
    });
  },

  filterAllClients({ commit }, name) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(`/api/paczients?filters[full_name][$contains]=${name}`, {
          params: {},
          headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => {
          resolve(res);
          commit("SET_ALL_CLIENTS", res.data);
        })
        .catch(e => {
          reject(e);
        });
    });
  },
};
