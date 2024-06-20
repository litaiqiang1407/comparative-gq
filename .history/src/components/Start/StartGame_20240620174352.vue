<template>
  <div class="start">
    <h2 class="title">Game Show Quiz</h2>
    <h1 class="game-name">COMPARATIVE</h1>
    <button class="play-button">
      <FontAwesomeIcon :icon="fas.faPlay" />
      <span>Start Game</span>
    </button>
    <div class="description">
      A multiple choice quiz with time pressure, lifelines and a bonus round
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./StartGame.scss";
</style>
