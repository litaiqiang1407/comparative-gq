<template>
  <div class="game-intro">
    <h1>Welcome to the Game!</h1>
    <p>Get ready...</p>
  </div>
</template>

<script>
export default {
  name: "GameIntro",
  mounted() {
    setTimeout(() => {
      this.$emit("onPlay");
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
@import "./GameIntro.scss";
</style>
