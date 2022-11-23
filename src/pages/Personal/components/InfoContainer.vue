<template>
  <div class="info_container">
    <div class="info_container_user">
      <User :user-name="userInfo.xm">
        <template #envelopIcon>
          <van-icon
            :badge="0"
            name="envelop-o"
            class="info_container_user_icon"
            @click="toMessage"
          />
        </template>
      </User>
    </div>
    <div
      class="info_container_banner"
    >
      <van-image
        :src="getBannerImg"
        :font-size="userNameFontSize"
      />
    </div>
  </div>
</template>
<script>
import User from '@components/User'
export default {
  components: {
    User
  },
  data () {
    return {
      getBannerImg: require('@assets/image/banner1.png'),
      userInfo: {}, // 用户信息列表
      userNameFontSize: 4 // 用户名字体样式
    }
  },
  beforeCreate () {
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 500
    })
  },
  created () {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
  },
  methods: {
    toMessage () {
      this.$router.push({ path: '/myMessage' })
    }
  }
}
</script>
<style lang="scss" scoped>
    .info_container {
      &_user {
        padding: 4vw 4vw 16vw;
        background-color: #fff;

        &_icon {
          font-size: 5.33333vw;
        }
      }

      &_banner {
        height: 26.66667vw;
        margin: -13.33333vw 4vw 0;
        overflow: hidden;
        border-radius: 4vw;
      }
    }
</style>
