import { createRouter, createWebHistory } from 'vue-router';
import Portafolio from '../Portafolio.vue';
import Mercedez from '../Mercedez.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Portafolio,
    },
    {
      path: '/examen',
      component: Mercedez,
    },
  ],
});
