<template>
  <van-tabbar
    v-model="active"
    active-color="#B13A3D"
  >
    <van-tabbar-item
      icon="home-o"
      to="/home"
      replace
    >
      首页
    </van-tabbar-item>
    <van-tabbar-item
      to="/personal"
      replace
    >
      <van-icon
        slot="icon"
        name="sousuo"
        class-prefix="icon"
      />
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data () {
    return {
      active: 0// 导航栏切换标志
    }
  }
}
</script>
