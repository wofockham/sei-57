import Vue from 'vue';
import App from './App.vue';
import router from './router';

import 'semantic-ui-css/semantic.css'; // WILL THIS WORK?

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
