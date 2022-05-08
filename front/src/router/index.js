import Vue from 'vue'

import VueRouter from 'vue-router'
import PostView from "../views/PostView.vue"
import ProfileView from "../views/ProfileView.vue"
import CreatePostView from "../views/CreatePostView.vue"
import AllPostsView from "../views/AllPostsView.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../components/LoginPage.vue")
    },
    {
        path: "/signup",
        name: "signup",
        component: () => import("../components/SignUp.vue")
    },
    {
        path: "/",
        name: "home",
        component: () => import("../components/HomePage.vue")
    },
    {
        path: "/profile",
        name: "profile",
        component: ProfileView
    },
    {
        path: "/post",
        name: "post",
        component: PostView
    },
    {
        path: "/newpost",
        name: "newpost",
        component: CreatePostView
    },
    {
        path: "/allposts",
        name: "allposts",
        component: AllPostsView
    }
]

const router = new VueRouter({
    routes
})

export default router
