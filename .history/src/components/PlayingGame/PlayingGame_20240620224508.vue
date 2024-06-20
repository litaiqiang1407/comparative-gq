<template>
  <div class="playing-game">
    <div class="container">
      <!-- Header -->
      <div class="header row">
        <div class="col-2 time">
          <span class="time-content">{{ timeLeft }}s</span>
        </div>
        <div class="col-8">
          <div
            class="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="progress"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" :style="{ width: progress + '%' }"></div>
          </div>
        </div>
        <div class="col-2 score">
          <span class="score-content">{{ score }}</span>
        </div>
      </div>

      <!-- Body -->
      <div class="body">
        <div class="body-header">
          <h2 class="question">{{ currentQuestion.question }}</h2>
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
            <div class="answers">
              <button
                v-for="(answer, index) in currentQuestion.answers"
                :key="index"
                class="answer"
                @click="selectAnswer(index)"
              >
                {{ answer }}
              </button>
            </div>
          </div>
          <div class="col-2">
            <div class="options">
              <button class="option" @click="useOption('x2Score')">
                x2 Score
              </button>
              <button class="option" @click="useOption('fiftyFifty')">
                50:50
              </button>
              <button class="option" @click="useOption('extraTime')">
                Extra Time
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayingGame",
  data() {
    return {
      questions: [
        {
          question: "What is the capital of France?",
          image: "https://example.com/image1.jpg",
          answers: ["Paris", "Berlin", "Madrid", "Rome"],
          correctAnswer: 0,
        },
        {
          question: "What is the largest planet in our solar system?",
          image: "https://example.com/image2.jpg",
          answers: ["Earth", "Mars", "Jupiter", "Saturn"],
          correctAnswer: 2,
        },
        // Thêm các câu hỏi khác ở đây
      ],
      currentQuestionIndex: 0,
      timeLeft: 30,
      score: 0,
      progress: 100,
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
        if (this.timeLeft > 0) {
          this.timeLeft--;
          this.progress = (this.timeLeft / 30) * 100;
        } else {
          this.nextQuestion();
        }
      }, 1000);
    },
    nextQuestion() {
      clearInterval(this.intervalId);
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.timeLeft = 30;
        this.progress = 100;
        this.startTimer();
      } else {
        // Game over logic here
      }
    },
    selectAnswer(index) {
      if (index === this.currentQuestion.correctAnswer) {
        this.score += 10; // Hoặc bất kỳ logic tính điểm nào khác
      }
      this.nextQuestion();
    },
    useOption(option) {
      switch (option) {
        case "x2Score":
          // Logic cho x2 Score
          break;
        case "fiftyFifty":
          // Logic cho 50:50
          break;
        case "extraTime":
          this.timeLeft += 15;
          if (this.timeLeft > 30) this.timeLeft = 30;
          break;
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
