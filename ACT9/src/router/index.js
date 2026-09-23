import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../vista/inicio.vue'
import Nosotros from '../vista/Nosotros.vue'
import Servicios from '../vista/Servicios.vue'
import Contacto from '../vista/Contacto.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'inicio', component: Inicio },
    { path: '/nosotros', name: 'nosotros', component: Nosotros },
    { path: '/servicios', name: 'servicios', component: Servicios },
    { path: '/contacto', name: 'contacto', component: Contacto }
  ]
})

export default router