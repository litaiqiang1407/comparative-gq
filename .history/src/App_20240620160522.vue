<template>
  <h1 class="example">Hello</h1>
</template>

<script>
// Import
import StartGame from "./components/Start/StartGame.vue";
import PlayingGame from "./components/PlayingGame.vue";
import EndGame from "./components/EndGame.vue";

// Export
export default {
  name: "App",
  components: {
    StartGame,
    PlayingGame,
    EndGame,
  },
};
</script>

// Scoped CSS
<style lang="scss">
.example {
  color: blue;
}
</style>
