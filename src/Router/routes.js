import Home from '../Components/Home.vue'
import UsersList from '../Components/UsersList.vue'
import Settings from '../Components/Settings.vue'
import Menu from '../Components/Menu.vue'
import Basket from '../Components/Basket.vue'

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
    {path: '/menu', component: Menu},
    {path: '/basket', component: Basket},
    {path: '/settings', component: Settings},
    {path: '*', redirect: '/'}
    
]