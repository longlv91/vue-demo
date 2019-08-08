import AnalyticsDashboard from '../pages/dashboard/AnalyticsDashboard';
import NotFound from '../pages/404/NotFound';
import Login from '../pages/login/Login';

const routes = [
    {
        path: '/dashboard', component: AnalyticsDashboard,
        beforeEnter: (to, from, next) => {
            next('/login');
        }
    },
    {
        path: '/404', component: NotFound,
        beforeEnter: (to, from, next) => {
            next();
        }
    },
    {
        path: '/login', component: Login
    },
    { path: '*', redirect: '/dashboard' }
];

export default routes;