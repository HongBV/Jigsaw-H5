const state = {
  id: sessionStorage.getItem("userId")
};
const actions = {};
const mutations = {
  setUserId(state, id) {
    state.id = id;
    sessionStorage.setItem("userId", id);
  }
};

export default {
  state,
  actions,
  mutations
};
