import Vue from 'vue'
import VueRouter from 'vue-router'
import Profil from '@/components/Profil'
import Projects from '@/components/Projects'
import Project from '@/components/Project'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:name',
    name: 'Project',
    component: Project
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
