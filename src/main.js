import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import './assets/fonts/iconfont.css'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
