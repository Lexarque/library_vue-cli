import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'

import {createWebHistory, createRouter} from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'
import Students from './components/Students.vue'
import AddStudents from './components/Students_Request/Add_Students.vue'
import EditStudents from './components/Students_Request/Edit_Students.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'Home', component: Home},
        {path: '/profile', name:'Profile', component: Profile},
        {path: '/students', name:'Students', component: Students},
        {path: '/students/add_students', name:'Add_Students', component: AddStudents},
        {path: '/students/edit_students/:id', name:'Edit_Students', component: EditStudents},
        {path: '/login', name:'Login', component: Login}
    ],
    base: '/'
})

const app = createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')