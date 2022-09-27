import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import LaundryroomList from '../components/pages/LaundryroomList.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/laundryroom-list/:id',
        name: 'laundryroom-list',
        component: LaundryroomList
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