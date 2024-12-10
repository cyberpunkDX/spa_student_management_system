import { createApp } from 'vue';
import App from './App.vue'; // Main App component
import router from './router';
import pinia from './store';

const app = createApp(App);

// Use Router and Pinia
app.use(router);
app.use(pinia);

app.mount('#app');
