import { createRouter, createWebHistory } from 'vue-router'
import PostView from '../views/PostView.vue'
import HomeView from '../views/HomeView.vue'
import PostDetailView from '../views/postDetailView.vue'
import ModelView from '../views/ModelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'post',
      component: PostView
    },
    {
      path: '/posts/:id',
      name: 'postDetail',
      component: PostDetailView
    },
    {
      path: '/models',
      name: 'model',
      component: ModelView
    }
  ]
})

export default router
