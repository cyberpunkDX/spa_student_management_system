import { createApp } from 'vue';
import App from './App.vue'; // Main App component
import router from './router';
import pinia from './store';

import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/'; // Backend URL
axios.defaults.withCredentials = true;


import "../bootstrap/css/bootstrap.css";
import "../css/app.css";

const app = createApp(App);

// Use Router and Pinia
app.use(router);
app.use(pinia);

app.mount('#app');
