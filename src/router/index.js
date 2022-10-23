import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Settings from '../components/pages/Settings.vue'
import LaundryroomList from '../components/pages/LaundryroomList.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings,
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
    //history: createWebHistory(),
    history: createWebHashHistory(),
    routes
})

export default router