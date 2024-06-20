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
.game-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  h1 {
    color: #35495e;
  }
  p {
    color: #42b983;
    font-size: 24px;
  }
}
</style>
