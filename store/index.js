import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import mutations from "./mutations";

const store = () => {
  return new Vuex.Store({
    state: {
      page: {
        author: null,
        date: null,
        date_gmt: null,
        excerpt: null,
        featured_media: null,
        guid: null,
        link: null,
        slug: null,
        title: null,
        content: null
      },
      posts: null,
      post: {
        title: null,
        content: null
      },
      category: {
        id: null,
        name: null,
        slug: null
      },
      categories: [],
      hideLeaderboardGlobal: true,
      activeBias: null,
      scrollPosition: null,
      leaderboardPost: null,
      total: null,
      totalPages: null,
      leaderboard: [],
      leaderboardWorkout: [],
      leaderboardWorkoutID: null,
      activeLeaderboard: 'menrx',
      uid: null,
      profileData: []
    },
    actions,
    mutations,
    getters
  });
};

export default store;
