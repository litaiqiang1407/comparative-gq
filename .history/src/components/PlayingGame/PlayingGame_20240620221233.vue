<template>
  <div class="playing-game">
    <div class="container">
      <!-- Header -->
      <div class="header row">
        <div class="col-2 time">
          <span class="time-content"></span>
        </div>
        <div class="col-8">
          <div
            class="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar w-75"></div>
          </div>
        </div>
        <div class="col-2 score">
          <span class="score-content"></span>
        </div>

        <!-- Body -->
        <div class="body">
          <div class="body-header">
            <h2 class="question"></h2>
          </div>
          <div class="body-content row">
            <div class="col-6">
              <img class="question-image" src="" alt="Question Image" />
            </div>
            <div class="col-4"></div>
            <div class="col-2">
              <div class="options">
                <button class="option">x2 Score</button>
                <button class="option">50:50</button>
                <button class="option">x2 Score</button>
              </div>
            </div>
          </div>
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
