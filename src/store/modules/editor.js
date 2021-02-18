const state = {
  pageId: null,
  page: JSON.parse(localStorage.getItem("page") || "[]"),
  currentMaterial: {}
};
const actions = {};
const mutations = {
  setPage(state, page) {
    state.page = page;
  },
  addMaterial(state, material) {
    state.page.push(material);
  },
  deleteMaterial(state, material) {
    state.page = state.page.filter(item => item !== material);
  },
  resetCurrentMaterial(state) {
    state.currentMaterial = {};
  },
  setCurrentMaterial(state, material) {
    state.currentMaterial = material;
  },
  setPageId(state, pageId) {
    state.pageId = pageId;
  }
};

export default {
  state,
  actions,
  mutations
};
