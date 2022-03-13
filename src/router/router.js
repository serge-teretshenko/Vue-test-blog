import MainPage from "@/pages/MainPage"
import AllPosts from "@/pages/AllPostsPage"
import Post from "@/pages/PostPage"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: MainPage
    },
    {
        path: '/posts',
        component: AllPosts
    },
    {
        path: "/posts/:id",
        component: Post
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;
