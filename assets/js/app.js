import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
// import App from './components/Test';
import App from './App.vue';
import router from './router'
import '../css/app.css';

const app = createApp(App)
app.use(router);
app.use(BootstrapVue3)
app.mount('#app');