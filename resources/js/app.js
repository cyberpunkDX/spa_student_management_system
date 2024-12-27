import { createApp } from 'vue';
import App from './App.vue'; 
import router from './router';
import pinia from './store';

import axios from 'axios';
import PaystackPop from '@paystack/inline-js'

axios.defaults.baseURL = 'http://127.0.0.1:8000/'; 
axios.defaults.withCredentials = true;


import "../bootstrap/css/bootstrap.css";
import "../bootstrap/js/bootstrap.js";
import "../bootstrap/js/bootstrap.bundle.min.js";
import "../css/app.css";

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount('#app');
