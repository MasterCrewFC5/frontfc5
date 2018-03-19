import Vue from "vue";
import Router from "vue-router";
//Routes
import Hello from "@/components/Hello";
import Field from "@/components/Field";
import Homepage from "@/components/pages/Homepage";
import SearchPlayers from "@/components/pages/SearchPlayers";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/game',
            name: 'Game',
            component: Field
        },
        {
            path: '/home',
            name: 'Home',
            component: Homepage
        },
        {
            path: '/search',
            name: 'SearchPlayers',
            component: SearchPlayers
        }
    ]
})
