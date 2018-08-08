import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import PageNotFound from '@/components/404'
import Landing from '@/components/Landing'
import AboutUs from '@/components/AboutUs'
import WhyUs from '@/components/WhyUs'
import Inside from '@/components/Inside'
import MoreInfo from '@/components/MoreInfo'

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
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'Landing',
    component: Landing,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Landing,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/why-choose-us',
    name: 'WhyUs',
    component: WhyUs,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/inside',
    name: 'Inside',
    component: Inside,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/moreinfo',
    name: 'MoreInfo',
    component: MoreInfo,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Login,
    meta: {
      plainLayout: true
    }
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
  ]
})
