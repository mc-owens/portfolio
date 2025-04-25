import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ResumeAndCV from '../views/ResumeAndCV.vue';
import Reel from '../views/Reel.vue';
import Gallery from '../views/Gallery.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/resumeandcv', component: ResumeAndCV },
  { path: '/reel', component: Reel },
  { path: '/gallery', component: Gallery },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;