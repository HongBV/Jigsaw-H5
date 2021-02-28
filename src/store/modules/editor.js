const state = {
  pageId: null,
  page: [],
  currentMaterial: {}
};
const actions = {};
const mutations = {
  setPage(state, page) {
    state.page = page;
  },
  addMaterial(state, material, scroll = true) {
    const { component, config, editData, layout, w, h, name } = material;
    const maxHeight = Math.max(...state.page.map(item => item.y + item.h));
    const newMaterial = {
      i: new Date().getTime(),
      x: 0,
      y: maxHeight,
      w: w || layout.w || 24,
      h: h || layout.h || 20,
      component,
      name,
      config,
      editData
    };
    state.page.push(newMaterial);
    if (!scroll) return;
    setTimeout(() => {
      scrollToBottom();
    }, 150);
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

/**
 * 滚动至底部
 */
function scrollToBottom() {
  const scrollTarget = document.getElementById("viewport-wrapper");
  const pre = scrollTarget.scrollTop;
  scrollTarget.scrollTop += (scrollTarget.scrollHeight / 30) >>> 0;
  if (scrollTarget.scrollTop === pre) return;
  window.requestAnimationFrame(scrollToBottom);
}

export default {
  state,
  actions,
  mutations
};
