import Vue from "vue";
import Vuex from "vuex";
import { dbUserRef } from '../firebase/firebase-config'

import { firebaseMutations, firebaseActions } from "vuexfire";
import firebase from 'firebase'
import router from '../Router/routes'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isUserLoggedIn: null
  },
  getters: {
    isUserLoggedIn: state => state.isUserLoggedIn
  },
  mutations: {
    ...firebaseMutations,
    signIn(state, payload){
      Vue.set(state, 'isUserLoggedIn', payload)
    },
    logout(state){
      Vue.set(state, 'isUserLoggedIn', null)
    }
  },
  actions: {
    signIn({ commit, state, dispatch }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(res => {
        commit('signIn', res.uid)
      }).catch(err => {
        console.log(err)
      })
    },
    logout({commit, state, dispatch}, payload){
      firebase.auth().signOut().then(user => {
        commit('logout')
      })
    }
  }
});

export { store };
