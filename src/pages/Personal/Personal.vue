<template>
  <div>
    <NavBar
      :nav-bar-title="navBarTitle"
      placeholder
    />
    <div class="personal_container">
      <InfoContainer />
      <MenuContainer />
      <LogOutContainer />
    </div>
  </div>
</template>
<script>
import NavBar from '@components/NavBar.vue'
import InfoContainer from './components/InfoContainer.vue'
import MenuContainer from './components/MenuContainer.vue'
import LogOutContainer from './components/LogOutContainer.vue'
export default {
  components: { NavBar, InfoContainer, MenuContainer, LogOutContainer },
  data () {
    return {
      navBarTitle: this.$route.meta.title // 通过路由获取头部标题
    }
  }
}
</script>
<style lang="scss" scoped>
.personal_container {
  height: calc(100vh - 100px);
  background-color: #f1f3f5;
}
</style>
