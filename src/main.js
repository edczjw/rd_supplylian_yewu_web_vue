// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入饿了吗ui
import ElementUI from 'element-ui'
import axios from 'axios'
import animate from 'animate.css'

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
//引入vuex
import store from './store'
axios.defaults.withCredentials=true //让ajax携带cookie
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(animate)
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})

//$axios替换axios
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  store,//使用store
  components: { App },
  template: '<App/>'
})
