export const state = () => ({
  client: {}
});

export const mutations = {
  SET_CLIENT(state, payload) {
    state.client = payload;
  }
};

export const actions = {
  fetchClient({ commit }, passport) {
    console.log(passport, "store");
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
  }
};
