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
            <h2 class="question">
              {{ currentQuestion.number }}.{{ currentQuestion.text }}
            </h2>
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
              <div class="row">
                <div
                  v-for="(answer, index) in currentQuestion.answers"
                  :key="index"
                  class="answer col-6"
                >
                  <button class="answer-button" @click="selectAnswer(index)">
                    {{ answer }}
                  </button>
                </div>
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
        <span class="current-question"
          >{{ currentQuestionIndex + 1 }} of 10</span
        >
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
          image:
            "https://i.pinimg.com/564x/a2/42/8f/a2428f1ba00f56836883485a05f7b889.jpg",
          answers: ["big", "big than", "bigger than", "bigger"],
          correctAnswer: 3,
        },
        {
          number: 2,
          text: "The rabbit runs ____________ a turtle",
          image:
            "https://img.freepik.com/free-vector/rabbit-runs-fast-turtle-runs-slow_1308-2855.jpg",
          answers: ["faster", "fast", "fast than", "faster than"],
          correctAnswer: 4,
        },
        {
          number: 3,
          text: "Cat is _________ dog",
          image:
            "https://www.jaycliffepetsrotherham.co.uk/wp-content/uploads/2019/10/Dog-Cat-on-a-Ledge-X-Small-300x166.jpg",
          answers: ["smaller than", "small", "smaller"],
          correctAnswer: 1,
        },
        {
          number: 4,
          text: "The elephant is ___________ the hippo",
          image:
            "https://qph.cf2.quoracdn.net/main-qimg-5e2f521f0e09accd7c8b5f1a89923359-lq",
          answers: ["bigger", "bigger than", "bigger", "big than"],
          correctAnswer: 2,
        },
        {
          number: 5,
          text: "The girl is ______________ the boy",
          image:
            "https://i.pinimg.com/564x/4e/bd/d4/4ebdd47ca4a60bd1a463ec8329555c57.jpg",
          answers: ["short", "shorter", "shorter than", "short than"],
          correctAnswer: 3,
        },
        {
          number: 6,
          text: "The boy is _____________ than grandma",
          image:
            "phttps://media.baamboozle.com/uploads/images/39477/1590531350_426013",
          answers: ["young", "younger than", "young than", "younger"],
          correctAnswer: 4,
        },
        {
          number: 7,
          text: "The crocodile is ______________ the dog",
          image:
            "https://media.baamboozle.com/uploads/images/154022/1623165344_181073.jpeg",
          answers: ["longer than", "longest", "longer", "long than"],
          correctAnswer: 1,
        },
        {
          number: 8,
          text: "The weather is _____today than yesterday",
          image:
            "https://media.baamboozle.com/uploads/images/154022/1624368526_252786_gif-url.gif",
          answers: ["hoter", "hotter", "hotter than"],
          correctAnswer: 2,
        },
        {
          number: 9,
          text: "Hulk is _________  Superman",
          image:
            "https://media.baamboozle.com/uploads/images/39477/1590531337_676566",
          answers: ["stronger", "strong than", "stronger than"],
          correctAnswer: 4,
        },
        {
          number: 10,
          text: "The tortoise is _______________ the horse",
          image:
            "https://media.baamboozle.com/uploads/images/154022/1623165632_124281.jpeg",
          answers: ["slower than", "slower", "slow than"],
          correctAnswer: 1,
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
    this.showNotificationMessage(
      `Question ${this.currentQuestionIndex + 1} - Get Ready`
    );
  },
};
</script>

<style lang="scss" scoped>
@import "./PlayingGame.scss";
</style>
