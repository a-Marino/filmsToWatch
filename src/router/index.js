import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/movie/:id',
    name: "Movie detail",
    component: () => import('../views/MovieDetails.vue')
  },
  {
    path: '/tv/:id',
    name: 'TV detail',
    component: () => import('../views/TVDetails.vue')
  },
  {
    path: '/discover/movie',
    name: 'Discover movies',
    component: () => import('../views/DiscoverMovies.vue')
  },
  {
    path: '/discover/tv',
    name: 'Discover TV',
    component: () => import('../views/DiscoverTV.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
