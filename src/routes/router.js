import Vue from 'vue';
import Router from 'vue-router';

import Subscribe from "../views/Subscribe";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/subscribe'
        },
        {
            path: '/subscribe',
            components: {default: Subscribe},
        }
    ]
});


export default router;