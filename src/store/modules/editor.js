const state = {
  currentMaterial: {}
};
const actions = {};
const mutations = {
  updateCurrentMaterial(state, materialData) {
    state.currentMaterial = materialData;
  }
};

export default {
  state,
  actions,
  mutations
};
