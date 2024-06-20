<template>
  <div class="start">
    <h2 class="title">Game Show Quiz</h2>
    <h1 class="game-name">COMPARATIVE</h1>
    <button class="play-button" @click="startGame">
      <font-awesome-icon :icon="['fas', 'play']" />
      <span>Start Game</span>
    </button>
    <div class="description">
      A multiple choice quiz with time pressure, lifelines and a bonus round
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: {
    FontAwesomeIcon,
  },
  methods: {
    startGame() {
      if (this.$router) {
        this.$router.push("/intro");
      } else {
        console.error("Vue Router is not defined.");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./StartGame.scss";
</style>
