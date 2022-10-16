<template>
  <div id="app">
    <router-view />
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from './pages/components/Tabbar.vue'
export default {
  components: { Tabbar }
}
</script>

<style lang="scss">
#app {
  height: calc(var(--vh, 1vh) * 100);
}
</style>
