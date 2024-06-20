<template>
  <div class="wrapper">
      <start-game v-if="status === 'start'" @onStart="onStart()" />
      <game-intro v-if="status === 'intro'" @onPlay="onPlay()" />
      <playing-game v-if="status === 'playing'" />
  </div>
</template>

<script>
// Import
import StartGame from "./StartGame/StartGame.vue";
import GameIntro from "./PlayingGame/Intro/GameIntro.vue";
import PlayingGame from "./PlayingGame/PlayingGame.vue";

// Export
export default {
  name: "Wrapper",
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

<style lang="scss" scoped>
@import "./Wrapper.scss";
</style>
