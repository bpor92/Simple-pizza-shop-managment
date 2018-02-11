import Vue from 'vue'
import Vuex from 'vuex'
import {firebaseMutations, firebaseActions } from 'vuexfire'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isUserLoggedIn: false
    },
    getters: {
        isUserLoggedIn: state => state.isUserLoggedIn
        
    },
    mutations: {
        ...firebaseMutations
    },
    actions: {
        
    }
})

export {store}