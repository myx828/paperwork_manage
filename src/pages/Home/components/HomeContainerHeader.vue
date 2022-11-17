<template>
  <div class="home_container_header">
    <div class="home_container_header_bg" />
    <p class="home_container_header_title">
      因私出国服务平台
    </p>
    <div
      class="home_container_header_user"
      @click="toPersonal"
    >
      <div class="home_container_header_user_image">
        <van-image
          :src="getAvatarImg"
          round
        />
      </div>
      <p class="home_container_header_user_name">
        {{ userInfo.xm }}
      </p>
      <van-icon
        slot="icon"
        name="youjiantou"
        class-prefix="icon"
      />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      getAvatarImg: require('@assets/image/avatar.jpg'),
      userInfo: {} // 用户信息列表
    }
  },
  created () {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
  },
  methods: {
    toPersonal () {
      this.$router.push('/layout/personal')
    }
  }
}
</script>
<style lang="scss" scoped>
.home_container {
  height: calc(100% - 13.33333vw);

  &_header {
    position: relative;
    height: 64vw;

    &_bg {
      position: absolute;
      z-index: -1;
      width: 100vw;
      height: 61.33333vw;
      background-image: url(../../../assets/image/header-bg.png);
      background-size: contain;
    }

    &_title {
      padding: 4vw;
      font-size: 5.33333vw;
      color: #fff;
    }

    &_user {
      position: absolute;
      right: 4.66667vw;
      bottom: 0;
      left: 4.66667vw;
      display: flex;
      align-items: center;
      padding: 2.66667vw;
      background-color: #fff;
      border-radius: 1.6vw;
      box-shadow: 0 0.8vw 1.86667vw rgb(0 0 0 / 10%);

      &_image {
        width: 10.66667vw;
        height: 10.66667vw;
      }

      &_name {
        flex: 1;
        padding: 2.66667vw;
      }
    }
  }
}
</style>
