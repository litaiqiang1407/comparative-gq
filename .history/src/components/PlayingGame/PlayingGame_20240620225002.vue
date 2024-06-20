<template>
  <div class="playing-game">
    <div class="container">
      <!-- Header -->
      <div class="header row">
        <div class="col-2 time">
          <span class="time-content">{{ remainingTime }}s</span>
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
            <div
              class="progress-bar"
              :style="{ width: progressBarWidth + '%' }"
            ></div>
          </div>
        </div>
        <div class="col-2 score">
          <span class="score-content">{{ score }}</span>
        </div>
      </div>

      <!-- Body -->
      <div class="body">
        <div class="body-header">
          <h2 class="question">{{ currentQuestion.text }}</h2>
        </div>
        <div class="body-content row">
          <div class="col-6">
            <img
              class="question-image"
              :src="currentQuestion.image"
              alt="Question Image"
            />
          </div>
          <div class="col-4">
            <div
              v-for="(answer, index) in currentQuestion.answers"
              :key="index"
              class="answer"
            >
              <button @click="selectAnswer(index)">{{ answer }}</button>
            </div>
          </div>
          <div class="col-2">
            <div class="options">
              <button class="option" @click="useOption('x2')">x2 Score</button>
              <button class="option" @click="useOption('50:50')">50:50</button>
              <button class="option" @click="useOption('extraTime')">
                Extra Time
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <span>Question {{ currentQuestionIndex + 1 }} / 10</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          text: "What is the capital of France?",
          image: "path/to/image1.jpg",
          answers: ["Paris", "London", "Berlin", "Madrid"],
          correctAnswer: 0,
        },
        {
          text: "What is the tallest mountain in the world?",
          image: "path/to/image2.jpg",
          answers: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
          correctAnswer: 0,
        },
        // Add 8 more questions here
      ],
      currentQuestionIndex: 0,
      remainingTime: 30,
      score: 0,
      progressBarWidth: 100,
      intervalId: null,
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
  },
  methods: {
    startTimer() {
      this.intervalId = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
          this.progressBarWidth = (this.remainingTime / 30) * 100;
        } else {
          this.nextQuestion();
        }
      }, 1000);
    },
    selectAnswer(index) {
      if (index === this.currentQuestion.correctAnswer) {
        this.score += 10; // Increase score for correct answer
      }
      this.nextQuestion();
    },
    nextQuestion() {
      clearInterval(this.intervalId);
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.remainingTime = 30;
        this.progressBarWidth = 100;
        this.startTimer();
      } else {
        alert("Game Over! Your score: " + this.score);
      }
    },
    useOption(option) {
      if (option === "x2") {
        // Double the score for this question
      } else if (option === "50:50") {
        // Remove two incorrect answers
      } else if (option === "extraTime") {
        // Add extra time to the timer
        this.remainingTime += 10;
      }
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>

<style lang="scss" scoped>
@import "./PlayingGame.scss";
</style>
