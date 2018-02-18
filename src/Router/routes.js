import SignIn from '../Components/SignIn.vue'
import Home from '../Components/Home.vue'
import UsersList from '../Components/UsersList.vue'
import Settings from '../Components/Settings.vue'


export const routes = [
    {path: '/', component: Home},
    {path: '/sign-in', component: SignIn},
    {path: '/users', component: UsersList},
    {path: '/settings', component: Settings}
    
]