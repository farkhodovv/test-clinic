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
const token = '51eff017a0f32be37bad36e7da3871d42cfba728dc7910532be99bdefc8e32275c1c3e4afaaf0a4e046d83de4f77c7a7c58f1efab640828f8ef04be41e487b1578551fd4b6a34d728f9388682e830e4ead81ca8f2c830eeb1f9e1f404bd4aca3a55520044cb78196c54683b7e3a2e63898f998e6212c1db8323883491b1e9db2'

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
