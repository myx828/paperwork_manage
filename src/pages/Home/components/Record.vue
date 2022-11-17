<template>
  <div id="app">
    <NavBar
      name="返回"
      :nav-bar-title="navBarTitle"
      :left-arrow-status="true"
    />
    <PaperworkRecord />
  </div>
</template>
<script>
import NavBar from '@components/NavBar.vue'
import PaperworkRecord from './PaperworkRecord.vue'
export default {
  components: { NavBar, PaperworkRecord },
  data () {
    return {
      navBarTitle: this.$route.meta.title // 通过路由获取头部标题
    }
  }
}
</script>
