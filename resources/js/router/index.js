import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/HomeComponent.vue'), // Adjust path to your component
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/AboutComponent.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
