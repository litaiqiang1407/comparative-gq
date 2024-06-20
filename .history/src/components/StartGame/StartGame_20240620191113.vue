<template>
  <div class="start">
    <h2 class="title">Game Show Quiz</h2>
    <h1 class="game-name">COMPARATIVE</h1>
    <a class="play-button" href="/intro">
      <font-awesome-icon :icon="['fas', 'play']" />
      <span>Start Game</span>
    </a>
    <div class="description">
      A multiple choice quiz with time pressure, lifelines and a bonus round
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    FontAwesomeIcon,
  },
  methods: {},
  created() {
    console.log(fas);
  },
};
</script>

<style lang="scss" scoped>
@import "./StartGame.scss";
</style>
