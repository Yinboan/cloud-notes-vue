import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path:'/login',
    component: ()=> {return import ('@/components/Login')}
  },
  {
    path: '/',
    alias: '/notebooks',
    component: () => import('@/components/NotebookList.vue')
  },
  {
    path: '/note',
    component: () => import('@/components/NoteDetail.vue')
  },
  {
    path: '/trash',
    component: ()=> {return import ('@/components/TrashDetail')}
  }
]

export default new VueRouter({
  routes
})
