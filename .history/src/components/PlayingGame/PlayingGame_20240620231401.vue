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
        <div v-if="showNotification" class="notification">
          <h2>{{ notificationMessage }}</h2>
        </div>
        <div v-else>
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
                <button class="option" @click="useOption('x2')">
                  x2 Score
                </button>
                <button class="option" @click="useOption('50:50')">
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
          number: 1,
          text: "The dog is ___________ a man",
          image: "../../assets/img/Questions/question_1.jpg",
          answers: ["big", "big than", "bigger than", "bigger"],
          correctAnswer: 3,
        },
        {
          number: 2,
          text: "The rabbit runs ____________ a turtle",
          image: "path/to/image2.jpg",
          answers: ["faster", "fast", "fast than", "faster than"],
          correctAnswer: 4,
        },
        {
          number: 3,
          text: "Cat is _________ dog",
          image: "../../assets/img/Questions/question_1.jpg",
          answers: ["smaller than", "small", "smaller"],
          correctAnswer: 3,
        },
        {
          number: 4,
          text: "The rabbit runs ____________ a turtle",
          image: "path/to/image2.jpg",
          answers: ["faster", "fast", "fast than", "faster than"],
          correctAnswer: 4,
        },
        {
          number: 5,
          text: "The dog is ___________ a man",
          image: "../../assets/img/Questions/question_1.jpg",
          answers: ["big", "big than", "bigger than", "bigger"],
          correctAnswer: 3,
        },
        {
          number: 6,
          text: "The rabbit runs ____________ a turtle",
          image: "path/to/image2.jpg",
          answers: ["faster", "fast", "fast than", "faster than"],
          correctAnswer: 4,
        },
        {
          number: 7,
          text: "The dog is ___________ a man",
          image: "../../assets/img/Questions/question_1.jpg",
          answers: ["big", "big than", "bigger than", "bigger"],
          correctAnswer: 3,
        },
        {
          number: 8,
          text: "The rabbit runs ____________ a turtle",
          image: "path/to/image2.jpg",
          answers: ["faster", "fast", "fast than", "faster than"],
          correctAnswer: 4,
        },
        {
          number: 9,
          text: "The dog is ___________ a man",
          image: "../../assets/img/Questions/question_1.jpg",
          answers: ["big", "big than", "bigger than", "bigger"],
          correctAnswer: 3,
        },
        {
          number: 10,
          text: "The rabbit runs ____________ a turtle",
          image: "path/to/image2.jpg",
          answers: ["faster", "fast", "fast than", "faster than"],
          correctAnswer: 4,
        },
      ],
      currentQuestionIndex: 0,
      remainingTime: 30,
      score: 0,
      progressBarWidth: 100,
      intervalId: null,
      showNotification: true,
      notificationMessage: "Question 1 - Get Ready",
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
          this.showNotificationMessage("Time's up! Moving to next question...");
          this.nextQuestion();
        }
      }, 1000);
    },
    selectAnswer(index) {
      clearInterval(this.intervalId);
      if (index === this.currentQuestion.correctAnswer) {
        this.score += 10; // Increase score for correct answer
        this.showNotificationMessage("Correct! +10 points");
      } else {
        this.showNotificationMessage("Incorrect!");
      }
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.remainingTime = 30;
        this.progressBarWidth = 100;
        this.showNotificationMessage(
          `Question ${this.currentQuestionIndex + 1} - Get Ready`
        );
      } else {
        this.showNotificationMessage(`Game Over! Your score: ${this.score}`);
      }
    },
    showNotificationMessage(message) {
      this.showNotification = true;
      this.notificationMessage = message;
      setTimeout(() => {
        this.showNotification = false;
        if (message.startsWith("Question")) {
          this.startTimer();
        } else if (
          message.startsWith("Correct") ||
          message.startsWith("Incorrect")
        ) {
          this.nextQuestion();
        }
      }, 3000);
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
    this.showNotificationMessage("Question 1 - Get Ready");
  },
};
</script>

<style lang="scss" scoped>
@import "./PlayingGame.scss";
</style>
