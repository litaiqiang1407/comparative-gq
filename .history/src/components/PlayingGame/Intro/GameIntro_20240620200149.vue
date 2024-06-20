<template>
  <div class="game-intro">
    <img
      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lamdenilegends.org%2Flegend2gameshva&psig=AOvVaw1NcqnOB5U9bcI1h6sO7n8f&ust=1718974867864000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjy_8Se6oYDFQAAAAAdAAAAABAE"
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
