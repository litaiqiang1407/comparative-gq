// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import StartGame from "../components/StartGame/StartGame.vue";
import PlayingGame from "../components/PlayingGame/PlayingGame.vue";
import GameIntro from "../components/PlayingGame/Intro/GameIntro.vue";

const routes = [
  { path: "/", component: StartGame },
  { path: "/intro", component: GameIntro },
  { path: "/playing", component: PlayingGame },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
