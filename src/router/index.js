import Vue from 'vue';
import VueRouter from 'vue-router';
import AnalyticsDashboard from '../pages/dashboard/AnalyticsDashboard';
import NotFound from '../pages/404/NotFound';
import Login from '../pages/login/Login';
import CalendarPage from '../pages/calendar/CalendarPage';

Vue.use(VueRouter);
const routes = [{
        path: '/apps/dashboards/analytics',
        component: AnalyticsDashboard,
        // beforeEnter: (to, from, next) => {
        //     next('/login');
        // }
    },
    {
        path: '/pages/authentication/login',
        component: Login
    },
    {
        path: '*',
        redirect: '/apps/dashboards/analytics'
    },
    {
        path: '/apps/calendar',
        component: CalendarPage
    },
    {
        path: '/pages/error/not-found',
        component: NotFound
    },
    {
        path: '**',
        redirect: '/pages/error/not-found'
    }
];


const router = new VueRouter({
    routes
});

export default router;