import Vue from 'vue'

import VueRouter from 'vue-router'
import PostView from "../views/PostView.vue"
import ProfileView from "../views/ProfileView.vue"
import CreatePostView from "../views/CreatePostView.vue"
import AllPostsView from "../views/AllPostsView.vue"
import LastParticipations from "../views/LastParticipations.vue"
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
        path: "/profile/:id",
        name: "profile",
        component: ProfileView
    },
    {
        path: "/post/:id",
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
    },
    {
        path: "/lastparticipations",
        name: "lastparticipations",
        component: LastParticipations
    }
]

const router = new VueRouter({
    routes
})

export default router
