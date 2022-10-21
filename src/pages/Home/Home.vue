<template>
  <div id="app">
    <HomeContainerHeader />
    <HomeContainerSwiper />
    <MenuContainer />
  </div>
</template>
<script>
import HomeContainerHeader from './components/HomeContainerHeader.vue'
import HomeContainerSwiper from './components/HomeContainerSwiper.vue'
import MenuContainer from './components/MenuContainer.vue'
export default {
  components: { HomeContainerHeader, HomeContainerSwiper, MenuContainer }
}
</script>
