const state = {
  userInfo: JSON.parse(sessionStorage.getItem("userInfo") || "{}")
};
const actions = {};
const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
  }
};

export default {
  state,
  actions,
  mutations
};
