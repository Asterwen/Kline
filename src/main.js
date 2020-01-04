import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
// import store from './store'

// axios 接口请求封装
import { fetchGet, fetchPost } from './axiosConfig'
Vue.prototype.$get = fetchGet
Vue.prototype.$post = fetchPost


Vue.config.productionTip = false
// 注册全局组件
Vue.use(Header)
Vue.use(Footer)
// 初始化全局组件
Vue.component('Header', Header)
Vue.component('Footer', Footer)

Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
