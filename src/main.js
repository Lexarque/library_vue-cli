import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'

import {createWebHistory, createRouter} from 'vue-router'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Students from './components/Students.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'Home', component: Home},
        {path: '/profile', name:'Profile', component: Profile},
        {path: '/students', name:'Students', component: Students}
    ],
    base: '/'
})

const app = createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')