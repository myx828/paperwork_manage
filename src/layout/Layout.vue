<template>
  <div id="app">
    <router-view />
    <van-tabbar
      route
      active-color="#B13A3D"
    >
      <van-tabbar-item
        icon="home-o"
        to="/layout/home"
        replace
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item
        to="/layout/personal"
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
  </div>
</template>
<script>
export default {
}
</script>
