<template>
  <div>
    <keep-alive :include="['HomeIndex','CategoryIndex','CartIndex','UserIndex']" :max="10">
      <router-view></router-view>
    </keep-alive>
    <van-tabbar v-model="active" router active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  },
  watch: {
    // 监听路由变化，动态设置active
    '$route.path': {
      immediate: true, // 立即执行一次
      handler (path) {
        const routes = ['/home', '/category', '/cart', '/user']
        const index = routes.findIndex(route => path.startsWith(route))
        if (index !== -1) {
          this.active = index
        }
      }
    }
  }
}
</script>

<style>

</style>
