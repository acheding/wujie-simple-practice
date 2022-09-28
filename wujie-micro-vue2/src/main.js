import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
new Vue({
  router,
  store,
  ElementUI,
  render: (h) => h(App),
}).$mount("#app");
