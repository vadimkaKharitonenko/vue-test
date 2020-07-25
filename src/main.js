import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store';

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  beforeCreate() {
    store.dispatch('initialState');
  },
  render: h => h(App)
}).$mount('#app');
