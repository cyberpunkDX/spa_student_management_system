import { createApp } from 'vue';

import ExampleComponent from './components/ExampleComponent.vue';
const app = createApp({
    data() {
      return {
        count: 0
      }
    },

    components: {
        ExampleComponent
    }
  })
  
  app.mount('#app')
