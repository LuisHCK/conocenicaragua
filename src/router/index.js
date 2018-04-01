import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Session from '@/components/Session'
import Departaments from '@/components/Departaments'
import Departament from '@/components/Departament'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/session',
      name: 'Session',
      component: Session
    },
    {
      path: '/departaments',
      name: 'Departaments',
      component: Departaments
    },
    {
      path: '/departaments/:name',
      name: 'Departament',
      component: Departament
    }
  ]
})
