import Vue from 'vue'

import VueRouter from 'vue-router'
import PostView from "../views/PostView.vue"
import ProfileView from "../views/ProfileView.vue"
import CreatePostView from "../views/CreatePostView.vue"
import AllPostsView from "../views/AllPostsView.vue"
import LoginPage from "../views/LoginPage.vue"
import SignUp from "../views/SignUp.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/login",
        name: "login",
        component: LoginPage
    },
    {
        path: "/signup",
        name: "signup",
        component: SignUp
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