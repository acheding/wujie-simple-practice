import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import WujieVue from "wujie-vue3";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElIcons from "@element-plus/icons-vue";

const app = createApp(App);

app.use(router);
app.use(WujieVue);
app.use(ElementPlus);
for (const name in ElIcons) {
  app.component(name, ElIcons[name]);
}
app.mount("#app");
