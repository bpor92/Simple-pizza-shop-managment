import Home from '../Components/Home.vue'
import Settings from '../Components/Settings.vue'
import Menu from '../Components/Menu.vue'
import Basket from '../Components/Basket.vue'
import Panel from '../Components/Admin/Panel.vue'
import Admin from '../Components/Admin/Admin.vue'
import Orders from '../Components/Admin/Orders.vue'
import DayReport from '../Components/Admin/DayReport.vue'


import firebase from 'firebase'
const user = firebase.auth().currentUser;

export const routes = [
    {path: '/', component: Home},
    {path: '/menu', component: Menu },
    {path: '/basket', component: Basket},
    {path: '/settings', component: Settings},
    {path: '/admin', component: Admin},
    {path: '/admin/panel', component: Panel, beforeEnter: (to, from, next) => {
        const user = firebase.auth().currentUser;
        if(user){
            next()
        }else{
            next(false)
        }
    }},
    {path: '/admin/orders', component: Orders, beforeEnter: (to, from, next) => {
        const user = firebase.auth().currentUser;
        if(user){
            next()
        }else{
            next(false)
        }
    }},
    {path: '/admin/day-report', component: DayReport, beforeEnter: (to, from, next) => {
        const user = firebase.auth().currentUser;
        if(user){
            next()
        }else{
            next(false)
        }
    }},
    
    
    {path: '*', redirect: '/'}
    
]