import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Live from '../views/Live.vue'
import Sanal from '../views/Sanal.vue'
import Slot from '../views/Slot.vue'
import Casino from '../views/Casino.vue'
import Rulet from '../views/Rulet.vue'
import Tombala from '../views/Tombala.vue'
import Kuponlar from '../views/Kuponlar.vue'
import Canlitv from '../views/Canlitv.vue'
import Macsonuclari from '../views/Macsonuclari.vue'
import AuthLayout from '../views/AuthLayout.vue'
import Login from '../views/Login.vue'

const routes = [{
        path: '/',
        name: 'Home',
        meta: { requiresAut: true },
        component: Home
    },
    {
        path: "/live",
        name: "Live",
        component: Live
    },
    {
        path: "/sanal",
        name: "Sanal",
        component: Sanal
    },
    {
        path: "/slot",
        name: "Slot",
        component: Slot
    },
    {
        path: "/casino",
        name: "Casino",
        component: Casino
    },
    {
        path: "/rulet",
        name: "Rulet",
        component: Rulet
    },
    {
        path: "/tombala",
        name: "Tombala",
        component: Tombala
    },
    {
        path: "/kuponlar",
        name: "Kuponlar",
        component: Kuponlar
    },
    {
        path: "/canlitv",
        name: "Canlitv",
        component: Canlitv
    },
    {
        path: "/macsonuclari",
        name: "Macsonuclari",
        component: Macsonuclari
    },
    {
        path: '/auth',
        component: AuthLayout,
        redirect: '/login',
        meta: { isGuest: true },
        name: 'Auth',
        children: [{
            path: '/login',
            name: 'Login',
            component: Login
        }]
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAut && !store.state.user.token) {
        next({ name: 'Login' })
    } else if (store.state.user.token && to.meta.isGuest) {
        next({ name: 'Home' })
    } else {
        next()
    }
})



export default router