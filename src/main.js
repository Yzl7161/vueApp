import Vue from 'vue'
// 1.1 路由的包
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// // 导入axios模块
// import axios from 'axios'
// // 设置域名
// axios.defaults.baseURL = 'http://www.liulongbin.top:3005';
import axios from 'axios';
axios.defaults.baseURL = 'http://www.liulongbin.top:3005';
// 这是修改Vue的原型，可以让我们使用axios和vue-resource类似，直接使用 this.$http.xxx 就可以使用了
Vue.prototype.$http = axios;


// 拦截器配置，  这是请求拦截器，所有请求发送出去之前都要走这里
axios.interceptors.request.use(function(config) {
    console.log('所有请求发出成功之前--1：', config)
    return config;
}, function(error) {
    console.log('所有请求发出 失败 之前--1：', error)
    return Promise.reject(error);
});

// 服务器响应拦截器，所有的数据返回之前 都要走这里
axios.interceptors.response.use(function(response) {
    console.log('所有成功响应 先走拦截器里--2：', response)
    return response.data;
}, function(error) {
    console.log('所有失败响应 先走拦截器里--2：', error)
    return Promise.reject(error);
});

// 按需导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入自定义样式
import './scss/app.scss'
// 导入mui样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// Vue.config.productionTip = false


// 导入路由文件
import router from './router.js'

import App from './App.vue'
new Vue({
    el: '#app',
    render: h => h(App),
    router
})