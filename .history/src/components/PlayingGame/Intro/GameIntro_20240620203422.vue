<template>
  <div class="game-intro">
    <img
      src="https://bazliah.weebly.com/uploads/1/2/2/4/122438994/quiz-show_orig.jpg"
      alt="Quiz Show"
      class="intro-image"
    />
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
