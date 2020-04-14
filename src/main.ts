import Vue from "vue";

import App from "./App.vue";
import { taskPlugin } from "./plugins/tasks";

Vue.config.productionTip = false;

Vue.use(taskPlugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
