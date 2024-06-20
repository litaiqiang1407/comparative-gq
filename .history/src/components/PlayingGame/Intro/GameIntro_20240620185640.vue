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
      this.$router.push("/playing");
    }, 3000); // Chuyển sang màn hình chơi game sau 3 giây
  },
};
</script>

<style lang="scss" scoped>

</style>
