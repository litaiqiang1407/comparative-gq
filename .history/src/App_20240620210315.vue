<template>
  <container />
</template>

<script>
// Import
import Wrapper from "./components/Wrapper/Wrapper.vue";

// Export
export default {
  name: "App",
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
