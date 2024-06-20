<template>
  <div class="start">
    <h2 class="title">Game Show Quiz</h2>
    <div class="game-name">COMPARATIVE</div>
    <button class="play-button">
      <font-awesome-icon :icon="['fas', 'play']" />
      <span>Start Game</span>
    </button>
    <div class="description">
      A multiple choice quiz with time pressure,lifelines and a bonus round
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./StartGame.scss";
</style>
