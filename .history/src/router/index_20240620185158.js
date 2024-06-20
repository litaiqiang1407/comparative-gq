// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import StartGame from "@/components/StartGame/StartGame.vue";
import PlayingGame from "@/components/PlayingGame/PlayingGame.vue";
import Intro from "@/components/PlayingGame/Intro/Intro.vue";

const routes = [];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
