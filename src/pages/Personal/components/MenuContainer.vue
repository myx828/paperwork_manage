<template>
  <div class="menu_container">
    <van-cell-group
      v-for="(item, index) in menus"
      :key="index"
      @click="toDetail(item.path)"
    >
      <van-cell
        :title="item.title"
        :icon="item.icon"
        is-link
      />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menus: [
        {
          icon: require('../../../assets/image/xiaoxi.png'),
          title: '我的消息',
          path: ''
        },
        {
          icon: require('../../../assets/image/geren.png'),
          title: '个人消息',
          path: '/info'
        },
        {
          icon: require('../../../assets/image/shenqing.png'),
          title: '我的申请',
          path: '/myApplication'

        },
        {
          icon: require('../../../assets/image/shenpi.png'),
          title: '我的审批',
          path: '/myApproval'
        }
      ]
    }
  },
  methods: {
    toDetail (path) {
      this.$router.push({
        path
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    .menu_container {
      margin-top: 5.33333vw;
      color: #333;

      .van-icon {
        display: flex;
        align-items: center;
      }
    }
</style>
