import Vue from 'vue';
import VueRouter from 'vue-router';
import Meta from 'vue-meta';

Vue.use(VueRouter);
Vue.use(Meta)
//#region import pages
import indexPage from '../view/Index';
import authPage from '../view/Auth';
import roomPage from '../view/Room';
//endregion

//#region import components
import headerOuter from '../components/header/outer'
import headerInner from '../components/header/inner'
import login from '../components/auth/login'
import sign from '../components/auth/sign'
import restore from '../components/auth/restore'
//endregion

export default new VueRouter(
    { 
        // mode: 'history',
        routes: [
            { 
                name: 'home',  
                path: '/', 
                components: {
                    header: headerOuter,
                    default: indexPage
                }
            },
            { 
                path: '/auth', 
                components: {
                    header: headerOuter,
                    default: authPage
                },
                children: [
                    { name: 'login', path: '', component: login },
                    { name: 'sign', path: 'sign', component: sign },
                    { name: 'restore', path: 'restore', component: restore }
                ]
            },
            {
                path: '/room',
                components: {
                    header: headerInner,
                    default: roomPage
                }
            }
        ]
    }
)