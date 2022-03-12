import MainPage from "@/pages/MainPage"
import Post from "@/pages/Post"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: MainPage
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
