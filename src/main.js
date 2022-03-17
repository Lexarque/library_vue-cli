import { createApp } from 'vue'
import App from './App.vue'

import {createWebHistory, createRouter} from 'vue-router'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'Home', component: Home},
        {path: '/profile', name:'Profile', component: Profile}
    ],
    base: '/'
})

createApp(App).use(router).mount('#app')