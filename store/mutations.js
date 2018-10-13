export default {
  PAGE: (state, page) => {
    state.page = page;
  },
  POSTS: (state, posts) => {
    state.posts = posts;
  },
  POST: (state, post) => {
    state.post = post;
  },
  CATEGORY: (state, category) => {
    state.category = category;
  },
  CATEGORIES: (state, categories) => {
    state.categories = categories;
  },
  leaderboardStatus (state) {
      state.hideLeaderboardGlobal = !state.hideLeaderboardGlobal;
  },
  scrollStatus (state) {
    state.scrollPosition =  window.pageYOffset;
  },
  leaderboardClose (state) {
    state.hideLeaderboardGlobal = true;
  },
  leaderboardOpen (state) {
    state.hideLeaderboardGlobal = false;
  },
  setActiveStore (state, menuItem) {
    state.activeBias = menuItem;
  }
};
