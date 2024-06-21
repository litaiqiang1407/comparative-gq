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
          <span class="score-content">{{ animatedScore }}</span>
        </div>
      </div>

      <!-- Body -->
      <div class="body">
        <div v-if="showNotification" class="notification">
          <h2 class="noti-content">{{ notificationMessage }}</h2>
        </div>
        <div v-else>
          <div class="body-header">
            <h2 class="question">
              {{ currentQuestion.number }}.{{ currentQuestion.text }}
            </h2>
          </div>
          <div class="body-content row">
            <div class="col-6 image">
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
import gsap from "gsap";

export default {
  data() {
    return {
      questions: [
        {
          number: 1,
          text: "The dog is ___________ a man",
          image:
            "https://i.pinimg.com/564x/a2/42/8f/a2428f1ba00f56836883485a05f7b889.jpg",
          answers: ["A. big", "B. big than", "C. bigger than", "D. bigger"],
          correctAnswer: 2,
        },
        {
          number: 2,
          text: "The rabbit runs ____________ a turtle",
          image:
            "https://img.freepik.com/free-vector/rabbit-runs-fast-turtle-runs-slow_1308-2855.jpg",
          answers: ["A. faster", "B. fast", "C. fast than", "D. faster than"],
          correctAnswer: 3,
        },
        {
          number: 3,
          text: "Cat is _________ dog",
          image:
            "https://www.jaycliffepetsrotherham.co.uk/wp-content/uploads/2019/10/Dog-Cat-on-a-Ledge-X-Small-300x166.jpg",
          answers: ["A. smaller than", "B. small", "C. smaller"],
          correctAnswer: 0,
        },
        {
          number: 4,
          text: "The elephant is ___________ the hippo",
          image:
            "https://qph.cf2.quoracdn.net/main-qimg-5e2f521f0e09accd7c8b5f1a89923359-lq",
          answers: ["A. bigger", "B. bigger than", "C. bigger", "D. big than"],
          correctAnswer: 1,
        },
        {
          number: 5,
          text: "The girl is ______________ the boy",
          image:
            "https://i.pinimg.com/564x/4e/bd/d4/4ebdd47ca4a60bd1a463ec8329555c57.jpg",
          answers: [
            "A. short",
            "B. shorter",
            "C. shorter than",
            "D. short than",
          ],
          correctAnswer: 2,
        },
        {
          number: 6,
          text: "The boy is _____________ than grandma",
          image:
            "phttps://media.baamboozle.com/uploads/images/39477/1590531350_426013",
          answers: [
            "A. young",
            "B. younger than",
            "C. young than",
            "D. younger",
          ],
          correctAnswer: 1,
        },
        {
          number: 7,
          text: "The crocodile is ______________ the dog",
          image:
            "https://media.baamboozle.com/uploads/images/154022/1623165344_181073.jpeg",
          answers: [
            "A. longer than",
            "B. longest",
            "C. longer",
            "D. long than",
          ],
          correctAnswer: 1,
        },
        {
          number: 8,
          text: "The weather is _____today than yesterday",
          image:
            "https://media.baamboozle.com/uploads/images/154022/1624368526_252786_gif-url.gif",
          answers: ["A. hoter", "B. hotter", "C. hotter than"],
          correctAnswer: 1,
        },
        {
          number: 9,
          text: "Hulk is _________  Superman",
          image:
            "https://media.baamboozle.com/uploads/images/39477/1590531337_676566",
          answers: ["A. stronger", "B. strong than", "C. stronger than"],
          correctAnswer: 2,
        },
        {
          number: 10,
          text: "The tortoise is _______________ the horse",
          image:
            "https://media.baamboozle.com/uploads/images/154022/1623165632_124281.jpeg",
          answers: ["A. slower than", "B. slower", "C. slow than"],
          correctAnswer: 0,
        },
      ],
      currentQuestionIndex: 0,
      remainingTime: 30,
      score: 0,
      animatedScore: 0,
      progressBarWidth: 100,
      intervalId: null,
      showNotification: true,
      notificationMessage: "",
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
          clearInterval(this.intervalId);
          this.showNotificationMessage("Time's up! Moving to next question...");
        }
      }, 1000);
    },
    selectAnswer(index) {
      clearInterval(this.intervalId);
      if (index === this.currentQuestion.correctAnswer) {
        const oldScore = this.score;
        const timeBonus = this.remainingTime;
        const newScore = this.score + 100 + timeBonus;
        this.score = newScore;
        this.animateScore(oldScore, newScore);
        this.showNotificationMessage(
          `Correct! +100 points, Time Bonus: +${timeBonus} points`
        );
      } else {
        this.showNotificationMessage(
          `Incorrect! Correct answer is ${
            this.currentQuestion.answers[this.currentQuestion.correctAnswer]
          }`
        );
      }
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.showNotificationMessage(
          `Question ${this.currentQuestionIndex + 1} - Get Ready!!!`
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
          this.remainingTime = 30;
          this.progressBarWidth = 100;
          this.startTimer();
        } else if (
          message.startsWith("Correct") ||
          message.startsWith("Incorrect") ||
          message.startsWith("Time's up")
        ) {
          this.nextQuestion();
        }
      }, 3000);
    },
    animateScore(oldScore, newScore) {
      gsap.to(this.$data, {
        duration: 1,
        animatedScore: newScore,
        roundProps: "animatedScore",
        onUpdate: () => {
          this.animatedScore = Math.round(this.animatedScore);
        },
      });
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
