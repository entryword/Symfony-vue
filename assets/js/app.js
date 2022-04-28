import { createApp } from 'vue'
// import App from './components/Test';
import App from './App.vue';
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import '../css/app.css';

const app = createApp(App).use(router).use(Antd);
app.mount('#app');