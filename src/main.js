import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import commonjs from "@/common/common.js";

createApp(App).use(router).use(commonjs).mount("#app");
