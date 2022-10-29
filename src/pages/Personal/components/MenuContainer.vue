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
import { messageList } from '../../../api/message'
export default {
  data () {
    return {
      components: { messageList },
      menus: [
        {
          icon: require('../../../assets/image/xiaoxi.png'),
          title: '我的消息',
          path: '/myMessage'
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

      ],
      messageList: []// 点击“我的消息”发起api
    }
  },
  methods: {
    async toDetail (path) {
      if (path === '/myMessage') {
        const { page } = await messageList()
        this.messageList = page.list
      }
      this.$router.push({
        path,
        query: {
          messageList: JSON.stringify(this.messageList)
        }
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
