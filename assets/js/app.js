import { createApp } from 'vue'
// import App from './components/Test';
import App from './App.vue';
import router from './router'
import '../css/app.css';

const app = createApp(App).use(router);
app.mount('#app');