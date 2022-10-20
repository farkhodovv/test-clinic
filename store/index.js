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
const token = '3ee3da55a7b8db40be4f31a67f2f1b91dd77123e6107e7b888834b09a5328e0f98d96c315b687a8d24e90f919abf6ae5834adf066af7ede57c50b6a5883e96f94e69cdad0b139e01f6b65b17218df1d82d8d6a317bc9863860ac432fca57481aba0d88205e5780819dcc9eb8fcdb0705d3e099243ed4d438600a4962afe2abd2'

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
