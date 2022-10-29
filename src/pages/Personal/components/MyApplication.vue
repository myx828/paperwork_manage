<template>
  <div id="app">
    <NavBar
      name="返回"
      :nav-bar-title="navBarTitle"
      :left-arrow-status="true"
    />
    <Tabs :nav-bar-title="navBarTitle" />
  </div>
</template>
<script>
import NavBar from '../../../components/NavBar.vue'
import Tabs from './Tabs.vue'
export default {
  components: { NavBar, Tabs },
  data () {
    return {
      navBarTitle: this.$route.meta.title // 获取头部标题
    }
  }
}
</script>
