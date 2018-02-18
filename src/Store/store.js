import Vue from "vue";
import Vuex from "vuex";
import { dbUserRef } from '../firebase/firebase-config'

import { firebaseMutations, firebaseAction } from "vuexfire";
import firebase from 'firebase'
import router from '../Router/routes'
Vue.use(Vuex);

const user = firebase.auth().currentUser;

const state = {
  isUserLoggedIn: null,
  users: []
}

const getters = {
  isUserLoggedIn: state => state.isUserLoggedIn,
  getUsers: state => state.users
}

const mutations = {
  ...firebaseMutations,
  signIn(state, payload){
    Vue.set(state, 'isUserLoggedIn', payload.uid)
    Vue.set(state, 'email', payload.email)
  },
  logout(state){
    Vue.set(state, 'isUserLoggedIn', null)
  }
}

const actions = {
  signIn({ commit, state, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(res => {
        commit('signIn', {uid: res.uid, email: res.email})
        resolve()
      }).catch(err => {
        console.log(err)
        reject()
      })

    })
  },
  logout({commit, state, dispatch}, payload){
    return new Promise((resolve, reject) => {
      firebase.auth().signOut().then(user => {
        commit('logout')
        resolve()
      }).catch(err => {
        console.log(err)
        reject()
      })
    })
  },
  setUsersList: firebaseAction(({ bindFirebaseRef }, { ref }) => {
      bindFirebaseRef('users', ref)
  }),
  updateUserData({commit, state, dispatch} ,payload){

    user.updatePassword(newPassword).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
  
}

  

const store = new Vuex.Store({state, getters, actions, mutations})
export { store };
