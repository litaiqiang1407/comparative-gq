<template>
  <start-game />
  <router-view><game-intro /></router-view>
  <router-view><playing-game /></router-view>
</template>

<script>
// Import
import StartGame from "./components/StartGame/StartGame.vue";
import GameIntro from "./components/PlayingGame/Intro/GameIntro.vue";
import PlayingGame from "./components/PlayingGame/PlayingGame.vue";

// Export
export default {
  name: "App",
  components: {
    StartGame,
    GameIntro,
    PlayingGame,
  },
};
</script>

// Scoped CSS
<style lang="scss">
.example {
  color: blue;
}
</style>
