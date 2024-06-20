<template>
  <h1 class="example">Hello</h1>
  <start-game v-if="" />
</template>

<script>
// Import
import StartGame from "./components/Start/StartGame.vue";

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
