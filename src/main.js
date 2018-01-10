import Vue from 'vue'
import { App } from './app'
import router from './router'
import store from './store'

import 'bulma/css/bulma.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
