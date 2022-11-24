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
        model:value="reason"
        autosize=" {minHeight: 60 }"
      />
      <van-button
        block
        round
        @click="confirmCancelApplication"
      >
        确定
      </van-button>
    </van-form>
  </div>
</template>
<script>
import NavBar from '@components/NavBar.vue'
import { deleteApplication } from '@api/application'
export default {
  components: { NavBar },
  data () {
    return {
      navBarTitle: this.$route.meta.title, // 获取头部标题
      reason: ''// 取消申请理由
    }
  },
  methods: {
    async confirmCancelApplication () {
      try {
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true
        })
        const { msgCode } = await deleteApplication({
          applyId: this.$route.params.applyId,
          reason: this.reason
        })
        if (msgCode === 0) {
          this.$toast.clear()
          this.$router.replace({
            path: '/myApplication'
          })
        }
      } catch (e) {

      }
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
