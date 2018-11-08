import env from 'config'
import axios from 'axios'
export default {
  PAGE: (state, page) => {
    state.page = page;
  },
  POSTS: (state, posts) => {
    state.posts = posts;
  },
  total: (state, total) => {
    state.total = total;
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
  },
  setActiveLeaderboard (state, menuItem) {
    state.activeLeaderboard = menuItem;
  },
    LEADERBOARD: (state, leaderboardWorkout) => {
        state.leaderboardWorkout = leaderboardWorkout;
    },

    saveUID (state, uid) {
        console.log('[STORE MUTATIONS] - saveUID:', uid);
        state.uid = uid;
        // state.profileInfo = axios call with uid and env
    },
    saveProfileData (state, uid) {
        return  axios.get('https://' + env.FIREBASE.PROJECT_ID + '.firebaseio.com/users/' + uid + '.json')
            .then(res => {
                state.profileData = res.data;
            });
        console.log('[STORE MUTATIONS] - saveProfileData');
    }
};
