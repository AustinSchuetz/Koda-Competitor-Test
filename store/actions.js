import api from "../api/index";
import firebaseApp from '~/firebase/app';
import axios from 'axios'

// set env = dev axios url = localhost:3000 or get site url????????

export const getPage = ({ commit, state }, slug) => {
  return new Promise((resolve, reject) => {
    api.getPage(slug).then(
      response => {
        commit("PAGE", response);
        resolve(response);
      },
      response => {
        reject(response);
      }
    );
  });
};

export const getPost = ({ commit, state }, slug) => {
  return new Promise((resolve, reject) => {
    api.getPost(slug).then(
      response => {
        commit("POST", response);
        resolve(response);
      },
      response => {
        reject(response);
      }
    );
  });
};

export const getPosts = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    api.getPosts().then(
      response => {
        commit("POSTS", response);
        resolve(response);
        console.log('dispatched posts');
      },
      response => {
        reject(response);
      }
    );
  });
};

export const getCategory = ({ commit, state }, slug) => {
  return new Promise((resolve, reject) => {
    api.getCategory(slug).then(
      response => {
        commit("CATEGORY", response);
        resolve(response);
      },
      response => {
        reject(response);
      }
    );
  });
};

export const getCategories = ({ commit, state }, slug) => {
  return new Promise((resolve, reject) => {
    api.getCategories(slug).then(
      response => {
        commit("CATEGORIES", response);
        resolve(response);
      },
      response => {
        reject(response);
      }
    );
  });
};

export const getLeaderboard = ({ commit, state }) => {
    return new Promise((resolve, reject) => {
        axios.get('https://wod.kodacompetitor.com/wp-json/wp/v2/posts?categories=5&posts_per_page=1').then(
            response => {
                commit("LEADERBOARD", response.data);
                resolve(response.data);
            },
            response => {
                reject(response);
            }
        );
    });
};

export const saveUID = ({commit}, uid) => {
    console.log('[STORE ACTIONS] - saveUID');
    commit('saveUID', uid);
};
export const saveProfileData = ({commit}, uid) => {
    console.log('[STORE ACTIONS] - saveProfileData');
    commit('saveProfileData', uid);
};
export const nuxtServerInit = async ({ dispatch }, { req }) => {
    console.log('[STORE ACTION]- in nuxServerInit:', req.session);

    if (req.session && req.session.userId) {
        console.log(`[STORE ACTION] found uid in session:${JSON.stringify(req.session.userId)}`);
        await dispatch('saveUID', req.session.userId);
    }
};
export const login = async ({dispatch, state}, uid) => {
    var homeURL = document.location.origin;
    console.log(homeURL);
    console.log('[STORE ACTIONS] - login');
    const token = await firebaseApp.auth().currentUser.getIdToken(true);
    const {status} = await axios.post('http://localhost:3000/auth/login', { uid: uid, token: token });

    await dispatch('saveUID', uid);
    console.log('[STORE ACTIONS] - in login, response:', status);
};
export const logout = async ({dispatch}) => {
    console.log('[STORE ACTIONS] - logout');
    await firebaseApp.auth().signOut();

    await dispatch('saveUID', null);
    console.log('route: ' + this.$route);

    const {status} = await axios.post('http://localhost:3000/auth/logout');
    console.log('[STORE ACTIONS] - in logout, response:', status);
};
