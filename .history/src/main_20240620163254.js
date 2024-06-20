import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import specific icons
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import StartGame from "./components/Start/StartGame.vue";

library.add(fas, far, fab);
App.component("font-awesome-icon", FontAwesomeIcon);

App.components("StartGame", StartGame);
createApp(App).mount("#app");
