import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '../views/MainPageView.vue'
import AboutView from '../views/AboutView.vue'
import CareerMap from '../views/CareerMapView.vue'
import SkillsMap from '../views/SkillsMapView.vue'
import FunctionalSkills from '../views/FunctionalSkillsView.vue'
import ContactUs from '../views/ContactUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPageView
    },
    {
      path: '/careermap',
      name: 'careermap',
      component: CareerMap
    },
    {
      path: '/skillsmap',
      name: 'skillsmap',
      component: SkillsMap
    },
    {
      path: '/functionalskills',
      name: 'functionalskills',
      component: FunctionalSkills
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUs
    }
  ]
})

export default router
