const state = {
  page: [],
  currentMaterial: {}
};
const actions = {};
const mutations = {
  resetPage(state) {
    state.page = [];
  },
  setCurrentMaterial(state, material) {
    state.currentMaterial = material;
  },
  addMaterial(state, material) {
    state.page.push(material);
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
