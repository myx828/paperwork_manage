<template>
  <div id="app">
    <router-view />
    <Tabbar v-if="tabbarShow" />
  </div>
</template>
<script>
import Tabbar from './pages/components/Tabbar.vue'
export default {
  components: { Tabbar },
  data () {
    return {
      tabbarShow: false
    }
  },
  watch: {
    $route (to, from) {
      if (this.$route.path === '/home' || this.$route.path === '/personal') {
        this.tabbarShow = true
      } else {
        this.tabbarShow = false
      }
      if (this.$route.path === '/' || this.$route.path === '/login') {
        this.headerShow = true
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  height: calc(var(--vh, 1vh) * 100);
}
</style>
