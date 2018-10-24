import api from "../api/index";
import axios from "axios/index";

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
