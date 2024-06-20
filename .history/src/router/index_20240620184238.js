// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import StartGame from "../components/Start/index.vue";
import Intro from "../components/Playing/Intro/index.vue";
import PlayingGame from "../components/Playing/index.vue";

const routes = [
  { path: "/", component: StartGame },
  { path: "/intro", component: Intro },
  { path: "/playing", component: PlayingGame },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
