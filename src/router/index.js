import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Tornfalksgrand2 from '../components/pages/Tornfalksgrand2.vue'
import Korsangsgatan71 from '../components/pages/Korsangsgatan71.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/tornfalksgrand2',
        component: Tornfalksgrand2
    },
    {
        path: '/korsangsgatan71',
        component: Korsangsgatan71
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router