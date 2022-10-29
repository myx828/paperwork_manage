<template>
  <div id="app">
    <HomeContainerHeader />
    <HomeContainerSwiper />
    <MenuContainer :paperwork-dic="paperworkDic" />
  </div>
</template>
<script>
import HomeContainerHeader from './components/HomeContainerHeader.vue'
import HomeContainerSwiper from './components/HomeContainerSwiper.vue'
import MenuContainer from './components/MenuContainer.vue'
export default {
  components: { HomeContainerHeader, HomeContainerSwiper, MenuContainer },
  data () {
    return {
      paperworkDic: []
    }
  },
  mounted () {
    this.paperworkDic = JSON.parse(this.$route.query.paperworkDic)
  }
}
</script>
