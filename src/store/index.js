import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    users: []
}

const getters = {}

const actions = {
    getUsers({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            commit('SET_USERS', response.data)
        })
    }
}

const mutations = {
    SET_USERS(state, users) {
        state.users = users
    }
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})