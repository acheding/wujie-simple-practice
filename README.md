# wujie-simple-practice
腾讯wujie微前端的简单实践及三种通信方式介绍。其中主应用使用vue3+vite，子应用使用vue2+webpack。三种通信方式分别为：props、window、eventBus。

### 使用说明

1.主应用下载依赖(package.json)

yarn add wujie-vue3

2.主应用注册依赖(main.js)

import WujieVue from "wujie-vue3";

app.use(WujieVue);

3.主应用使用wujie组件(main.vue)

<WujieVue name="micro" url="http://localhost:8087" >

4.子应用修改跨域(webpack.dev.conf.js)

同qiankun。如果没有产生跨域，子应用甚至无需修改。

devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*" // 开启应用间的跨域访问
    },
}

#### 详情见csdn：https://blog.csdn.net/bDreamer/article/details/127103459
