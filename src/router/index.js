import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import AboutView from "../views/AboutView.vue";
import Reference from "../views/ReferenceView.vue";
import Youtube from "../views/YoutubeView.vue";
import Movie from "../views/MovieView.vue";
import Unsplash from "../views/UnsplashView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/reference",
    name: "reference",
    component: Reference,
  },
  {
    path: "/youtube",
    name: "youtube",
    component: Youtube,
  },
  {
    path: "/movie",
    name: "movie",
    component: Movie,
  },
  {
    path: "/unsplash",
    name: "unsplash",
    component: Unsplash,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
