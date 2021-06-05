/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

const { default: VueRouter } = require('vue-router');
const { default: VueSweetalert2 } = require('vue-sweetalert2');
import 'sweetalert2/dist/sweetalert2.min.css';

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);

// import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

import App from "./components/App.vue";
import PostsIndex from "./components/Posts/Index.vue";
import PostsCreate from "./components/Posts/Create.vue";
import PostsEdit from "./components/Posts/Edit.vue";
import Vue from 'vue';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('posts-index', require('./components/Posts/Index.vue').default);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: PostsIndex,
            name: 'posts.index',
        },
        {
            path: '/create',
            component: PostsCreate,
            name: 'posts.create',
        },
        {
            path: '/edit/:id',
            component: PostsEdit,
            name: 'posts.edit',
        }
    ]
})

Vue.component('pagination', require('laravel-vue-pagination'))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: { App },
    router
});
