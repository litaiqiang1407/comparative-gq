<template>
  <div class="playing-game">
    <div class="container">
      <div class="header row">
        <div class="col-2 time">
          <span class="time-content"></span>
        </div>
        <div class="col-8 progress">
          <div class="progress-"></div>
        </div>
        <div class="col-2 score">
          <span class="score-content"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayingGame",
};
</script>

<style lang="scss" scoped>
@import "./PlayingGame.scss";
</style>
