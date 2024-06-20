// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import StartGame from "../components/StartGame/StartGame.vue";
import Intro from "../components/Playing/Intro/Intro.vue";
import PlayingGame from "../components/PlayingGame/PlayingGame.vue";

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
