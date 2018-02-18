import Home from '../Components/Home.vue'
import UsersList from '../Components/UsersList.vue'
import Settings from '../Components/Settings.vue'

import firebase from 'firebase'
const user = firebase.auth().currentUser;

export const routes = [
    {path: '/', component: Home},
    {path: '/users', component: UsersList, beforeEnter: (to, from, next) => {
        const user = firebase.auth().currentUser;
        if(user){
            next()
        }else{
            next(false)
        }
      }
    },
    {path: '/settings', component: Settings},
    {path: '*', redirect: '/'}
    
]