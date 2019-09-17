import { authenticationService } from "../../services";

// initial state
const state = {
    loggedIn: authenticationService.isAuthorized,
    lockScreen: false
};

// getters
const getters = {
    isLoggedIn(state) {
        return state.loggedIn;
    },
    isLockScreen(state) {
        return state.lockScreen;
    }
};

// actions
const actions = {
    updateStateUser ({ commit }, user) {
        commit("setLoggedIn", user ? true : false);
    },
    updateLockApp({commit, state}, value) {
        if (state.loggedIn) {
            commit("setLockScreen", value);
        }
    }
}

// mutations
const mutations = {
    setLoggedIn(state, value) {
        state.loggedIn = value;
    },
    setLockScreen(state, value) {
        state.lockScreen = value;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }