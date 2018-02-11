import SignIn from '../Components/SignIn.vue'
import Home from '../Components/Home.vue'
import UsersList from '../Components/UsersList.vue'


export const routes = [
    {path: '/', component: Home},
    {path: '/sign-in', component: SignIn},
    {path: '/users', component: UsersList}
    
]