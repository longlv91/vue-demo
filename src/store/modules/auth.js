import { authenticationService } from "../../services";

// initial state
const state = {
    loggedIn: authenticationService.isAuthorized
};

// getters
const getters = {
    isLoggedIn(state) {
        return state.loggedIn;
    }
};

// actions
const actions = {
    updateStateUser ({ commit, state }, user) {
        commit("setLoggedIn", user ? true : false);
    }
}

// mutations
const mutations = {
    setLoggedIn(state, value) {
        state.loggedIn = value;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }