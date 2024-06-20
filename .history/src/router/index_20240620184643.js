// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";

import { StartGame, Intro, Playing } from "../components";

const routes = [
  { path: "/", component: StartGame },
  { path: "/intro", component: Intro },
  { path: "/playing", component: Playing },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
