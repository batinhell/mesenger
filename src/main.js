import Vue from 'vue'
import App from './App.vue'
import VueStash from 'vue-stash';
import router from './routes'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueStash);

new Vue({
  el: '#app',
  data: { store },
  router,
  render: h => h(App)
})
