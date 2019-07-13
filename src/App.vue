<template>
  <div class="app-container">
    <!-- 头部header模块 -->
    <mt-header fixed title="我的项目"></mt-header>

    <!-- 中间nav模块 -->
    <transition>
			<router-view></router-view>
	</transition>

    <!-- 底部tapbar模块 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
      </router-link>
       <router-link class="mui-tab-item" to="/contact">
        <span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
      </router-link>
       <router-link class="mui-tab-item" to="/cart">
       <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">1</span></span>
				<span class="mui-tab-label">购物车</span>
      </router-link>
       <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
      </router-link>
      </nav>
			<!-- <a class="mui-tab-item-llb" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item-llb" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item-llb" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">1</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item-llb" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a> -->
		
  </div>
</template>

<script>

export default {

}
</script>


