import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio.vue'
import Bando from './views/Bando.vue'
import Incidencias from './views/Incidencias.vue'
import Informacion from './views/Informacion.vue'
import Noticias from './views/Noticias.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio
    },
    {
      path: '/bando',
      name: 'bando',
      component: Bando
    },
    {
      path: '/incidencias',
      name: 'incidencias',
      component: Incidencias,
    },
    {
      path: '/informacion',
      name: 'informacion',
      component: Informacion
    },
    {
      path: '/noticias',
      name: 'noticias',
      component: Noticias
    }
  ]
})
