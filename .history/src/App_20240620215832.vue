<template>
  <start-game v-if="status === 'start'" @onStart="onStart()" />
  <game-intro v-if="status === 'intro'" @onPlay="onPlay()" />
  <playing-game v-if="status === 'playing'" />
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
      status: "start",
    };
  },
  components: {
    StartGame,
    GameIntro,
    PlayingGame,
  },
  methods: {
    onStart() {
      this.status = "intro";
    },
    onPlay() {
      this.status = "playing";
    },
  },
};
</script>

// Scoped CSS
<style lang="scss" scoped></style>
