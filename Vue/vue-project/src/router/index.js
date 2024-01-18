import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Artist from '../views/Artist.vue'
import Schedule from '../views/Schedule.vue'
import General from '../views/General.vue'
import Sponsors from '../views/Sponsors.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

  {
    path: '/artist',
    name: 'artist', 
    component: Artist
  },
{
  path: '/general', 
  name: 'general', 
  component: General
}, 

{
  path: '/schedule', 
  name: 'schedule', 
  component: Schedule
}, 

{
  path: '/sponsors', 
  name: 'sponsors', 
  component: Sponsors
}
  ]
})

export default router
