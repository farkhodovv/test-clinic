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
const token = 'cc397a302814caec31fcf1c2f781bddd3e05e0d17a80074c67387efa8a3bee2ed447de13380296bca203ad135d83cb22ce8a4734de6e478b7653fb188df7f0cf5552d4895b2df0c484bf61f0f8ac1cbe48dea24064c3c98e2ab31fe1fe757e344210b51da9bfb365b766d98b4ccad3c1fb493b381764e02cb6677710ef40727d'

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
