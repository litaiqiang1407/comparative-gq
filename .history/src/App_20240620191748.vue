<template>
  <start-game v-if="statusMatch === 'default'" />
  <game-intro />
  <playing-game />
</template>

<script>
// Import
import StartGame from "./components/StartGame/StartGame.vue";
import GameIntro from "./components/PlayingGame/Intro/GameIntro.vue";
import PlayingGame from "./components/PlayingGame/PlayingGame.vue";

// Export
export default {
  name: "App",
  data() {
    return {
      statusMatch: "default",
    };
  },
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
