
// initial state
const state = {
    loggedIn: false
};

// getters
const getters = {};

// actions
const actions = {
    updateStateUser ({ commit, state }, user) {
        commit("setLoggedIn", user ? true : false);
    }
}

// mutations
const mutations = {
    setLoggedIn(state, value) {
debugger;
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