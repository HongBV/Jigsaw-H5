const state = {
  page: [],
  currentMaterial: {}
};
const actions = {};
const mutations = {
  resetPage(state) {
    state.page = [];
  },
  setCurrentMaterial(state, materialData) {
    state.currentMaterial = materialData;
  },
  addMaterial(state, materialData) {
    state.page.push(materialData);
  },
  deleteMaterial(state, material) {
    state.page = state.page.filter(item => item !== material);
  }
};

export default {
  state,
  actions,
  mutations
};
