<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in LunbotuList" :key="item.img">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>

// import axios from 'axios'


export default {
    data () {
        return {
            LunbotuList: []
        }
    },
    created () {
        this.getLunbotuList()  
    },
    methods: {
        // 发送axios请求获取轮播图片数据
        getLunbotuList() {
           this.$http.get('/api/getlunbo').then(res => {         
               if(res.status === 0) {
                   
                   this.LunbotuList = res.message
                //    console.log(this.LunbotuList)
               } else {
                   console.log('加载轮播图失败');
                   
               }
           })
        }
    },
    
}
</script>
<style lang="scss" scoped>
.mint-swipe {
    height:200px;
    
    
    img {
      width: 100%;
      height: 100%;
    }
}
</style>
