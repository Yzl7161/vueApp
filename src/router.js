import Vue from 'vue'
// 1.1 路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入组件
import cart from './components/cart.vue'
import contact from './components/contact.vue'
import home from './components/home.vue'
import search from './components/search.vue'

// 创建 router路由对象
var router = new VueRouter({
    // 匹配路由规则
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/contact', component: contact },
        { path: '/cart', component: cart },
        { path: '/search', component: search }
    ],
    linkActiveClass: 'mui-active'
})

export default router