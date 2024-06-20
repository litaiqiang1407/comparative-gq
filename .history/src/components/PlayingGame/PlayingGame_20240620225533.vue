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

.playing-game {
  .container {
    padding: 2rem;

    .header {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;

      .time-content,
      .score-content {
        font-size: 2rem;
      }

      .progress {
        height: 1.5rem;
        background-color: #e0e0e0;

        .progress-bar {
          background-color: var(--primary-color);
          transition: width 1s linear;
        }
      }
    }

    .body {
      .body-header {
        margin-bottom: 2rem;

        .question {
          font-size: 2.4rem;
          text-align: center;
        }
      }

      .body-content {
        display: flex;
        align-items: center;

        .question-image {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }

        .answer {
          margin-bottom: 1rem;

          button {
            width: 100%;
            padding: 1rem;
            font-size: 1.6rem;
            border: none;
            background-color: #f0f0f0;
            cursor: pointer;
            border-radius: 8px;
            transition: background-color 0.3s;

            &:hover {
              background-color: #d0d0d0;
            }
          }
        }

        .options {
          .option {
            display: block;
            width: 100%;
            margin-bottom: 1rem;
            padding: 1rem;
            font-size: 1.4rem;
            border: none;
            background-color: var(--primary-color);
            color: var(--white);
            cursor: pointer;
            border-radius: 8px;
            transition: background-color 0.3s;

            &:hover {
              background-color: darken(var(--primary-color), 10%);
            }
          }
        }
      }
    }

    .footer {
      margin-top: 2rem;
      font-size: 1.6rem;
      text-align: center;
    }

    .notification {
      text-align: center;
      font-size: 2.4rem;
      font-weight: bold;
      margin-top: 5rem;
    }
  }
}
</style>
