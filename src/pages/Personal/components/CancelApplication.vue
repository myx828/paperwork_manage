<template>
  <div id="app">
    <NavBar
      name="返回"
      :nav-bar-title="navBarTitle"
      :left-arrow-status="true"
    />
    <van-form class="cancel_container">
      <van-field
        type="textarea"
        placeholder="请输入原因"
        autosize=" {minHeight: 60 }"
      />
      <van-button
        block
        round
      >
        确定
      </van-button>
    </van-form>
  </div>
</template>
<script>
import NavBar from '../../../components/NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
      navBarTitle: this.$route.meta.title // 获取头部标题
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  position: relative;
  height: 100%;
}

.cancel_container {
  height: calc(100vh - 150px);
}

.process_container_footer {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5.33333vw 8vw;
}

::v-deep .van-button--default {
  color: #fff;
  background-color: #b13a3d;
  border: 1px solid #b13a3d;
}
</style>
