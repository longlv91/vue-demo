import Vue from 'vue';
import VueRouter from 'vue-router';
import AnalyticsDashboard from '../pages/dashboard/AnalyticsDashboard';
import NotFound from '../pages/404/NotFound';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import ChangeLog from '../pages/changelog/ChangeLog';
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
        path: '/pages/authentication/register',
        component: Register
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
        path: '/docs/changelog',
        component: ChangeLog
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