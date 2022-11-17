<template>
  <div id="app">
    <NavBar
      name="返回"
      :nav-bar-title="navBarTitle"
      :left-arrow-status="true"
    />
    <MessageItem />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import MessageItem from './MessageItem.vue'
export default {
  components: { NavBar, MessageItem },
  data () {
    return {
      navBarTitle: this.$route.meta.title // 获取头部标题
    }
  }
}
</script>
