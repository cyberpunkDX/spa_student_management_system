import { createRouter, createWebHistory } from 'vue-router';
import CourseComponent from '../components/dashboard/partials/CourseComponent.vue';
import ProfileComponent from '../components/dashboard/partials/ProfileComponent.vue';
import PaymentComponent from '../components/dashboard/partials/PaymentComponent.vue';

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
    {
        path: '/authenticate',
        name: 'authenticate',
        component: () => import('../components/auth/LoginComponent.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../components/dashboard/DashboardComponent.vue'),
        children: [
            { path: '/', component: ProfileComponent },
            { path: '/study-course', component: CourseComponent },
            { path: '/payments', component: PaymentComponent },
          ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
