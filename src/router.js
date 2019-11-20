/* eslint-disable no-console */
import Vue from 'vue'
import VueRouter from 'vue-router'
//import WelcomePage from './components/welcome/welcome.vue'
import DashboardPage from './components/dashboard.vue'
import SignupPage from './components/signup.vue'
import SigninPage from './components/signin.vue'
import newFriend from './components/newFriend.vue'
import friendProfile from './components/friendProfile.vue'
import newExpense from './components/newExpense.vue'
import expenses from './components/expenses.vue'
import split from './components/newSplit.vue'
Vue.use(VueRouter)

const routes = [
    { path: '/', component: SigninPage },
    { path: '/signup', component: SignupPage },
    { path: '/signin', component: SigninPage },
    {
        path: '/dashboard',
        component: DashboardPage,
        beforeEnter: (to, from, next) => {
            //console.log(localStorage.getItem('token'));
            if (localStorage.getItem('token')) {
                next()
            } else {
                next('/signin')
            }
        }
    },
    {
        path: '/newFriend',
        component: newFriend
    },
    {
        path: '/friendProfile',
        component: friendProfile
    },
    {
        path: '/newExpense',
        component: newExpense
    },
    {
        path: '/expenses',
        component: expenses
    },
    {
        path: '/split',
        component: split
    }

]

export default new VueRouter({ mode: 'history', routes })