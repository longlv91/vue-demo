import Vue from 'vue';
import VueRouter from 'vue-router';
import AnalyticsDashboard from '../pages/dashboard/AnalyticsDashboard';
import Unauthorized from '../pages/403/Unauthorized';
import NotFound from '../pages/404/NotFound';
import ServerError from '../pages/500/ServerError';
import LockScreen from '../pages/lock-screen/LockScreen';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import ChangeLog from '../pages/changelog/ChangeLog';
import CalendarPage from '../pages/calendar/CalendarPage';
import { authenticationService } from '../services';

Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        beforeEnter: (to, from, next) => {
            if (authenticationService.isAuthorized) {
                next('/apps/dashboards/analytics');
            } else {
                next('/pages/authentication/login');
            }
        }
    },
    {
        path: '/apps/dashboards/analytics',
        component: AnalyticsDashboard,
        meta: {
            title: 'Analytics Dashboard',
            metaTags: [{
                    name: 'description',
                    content: 'The dashboard page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The dashboard page of our example app.'
                }
            ],
            requiresAuth: true
        }
        // beforeEnter: (to, from, next) => {
        //     next('/login');
        // }
    },
    {
        path: '/pages/authentication/login',
        component: Login,
        meta: {
            title: 'Login Page'
        }
    },
    {
        path: '/pages/authentication/register',
        component: Register,
        meta: {
            title: 'Register Page'
        }
    },
    {
        path: '/pages/authentication/lock-screen',
        component: LockScreen,
        meta: {
            title: 'Lock Screen Page'
        }
    },
    {
        path: '/apps/calendar',
        component: CalendarPage,
        meta: {
            title: 'Calendar Page',
            requiresAuth: true
        }
    },
    {
        path: '/pages/error/unauthorized-error',
        component: Unauthorized,
        meta: {
            title: '403 - Unauthorized'
        }
    },
    {
        path: '/pages/error/not-found',
        component: NotFound,
        meta: {
            title: '404 - Page Not Found'
        }
    },
    {
        path: '/pages/error/server-error',
        component: ServerError,
        meta: {
            title: '500 - Server Error'
        }
    },
    {
        path: '/docs/changelog',
        component: ChangeLog,
        meta: {
            title: 'ChangeLog Page',
            requiresAuth: true
        }
    },
    {
        path: '*',
        redirect: '/pages/error/not-found'
    }
];


const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!authenticationService.currentUserValue) {
            next({
                path: '/pages/authentication/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    }

    // This goes through the matched routes from last to first, finding the closest route with a title.
    // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
    // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
            const tag = document.createElement('meta');

            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key]);
            });

            // We use this to track which meta tags we create, so we don't interfere with other ones.
            tag.setAttribute('data-vue-router-controlled', '');

            return tag;
        })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));
    next()
})

export default router;