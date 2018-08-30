import Vue from 'vue'
import Router from 'vue-router'
import PageNotFound from '@/components/404'
import Landing from '@/components/Landing'
import AboutUs from '@/components/AboutUs'
import WhyUs from '@/components/WhyUs'
import Inside from '@/components/Inside'
import MoreInfo from '@/components/MoreInfo'
import Funnel from '@/components/Funnel'
import Terms from '@/components/Terms'
import Privacy from '@/components/Privacy'

Vue.use(Router)

// function requireAuth (to, from, next) {
//   var authenticated = localStorage.getItem('session')
//   if (authenticated === null) {
//     next({
//       path: '/login',
//       query: {
//         redirect: to.fullPath
//       }
//     })
//   } else {
//     next()
//   }
// }
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/home',
    name: 'Home',
    component: Landing
  },
  {
    path: '/why-choose-us',
    name: 'WhyUs',
    component: WhyUs
  },
  {
    path: '/inside',
    name: 'Inside',
    component: Inside
  },
  {
    path: '/moreinfo',
    name: 'MoreInfo',
    component: MoreInfo
  },
  {
    path: '/funnel',
    name: 'Funnel',
    component: Funnel,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/terms-of-use',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/privacy-policy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
  ]
})
