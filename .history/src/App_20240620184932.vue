<template>
  <start-game />
</template>

<script>
// Import
import StartGame from "./components/StartGame/StartGame.vue";

// Export
export default {
  name: "App",
  components: {
    StartGame,
  },
};
</script>

// Scoped CSS
<style lang="scss">
.example {
  color: blue;
}
</style>
