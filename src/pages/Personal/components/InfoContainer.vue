<template>
  <div class="info_container">
    <div class="info_container_user">
      <div class="info_container_user_image">
        <van-image
          :src="getAvatarImg"
          round
        />
      </div>
      <p class="info_container_user_name">
        庄晨忠
      </p>
      <van-icon
        name="envelop-o"
        badge="0"
        class="info_container_user_icon"
      />
    </div>
    <div class="info_container_banner">
      <van-image :src="getBannerImg" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      getAvatarImg: require('../../../assets/image/avatar.jpg'), // 获取头像路径
      getBannerImg: require('../../../assets/image/banner1.png')
    }
  }
}
</script>
<style lang="scss" scoped>
    .info_container {
      &_user {
        display: flex;
        align-items: center;
        padding: 4vw 4vw 16vw;
        background-color: #fff;

        &_image {
          width: 10.66667vw;
          height: 10.66667vw;
        }

        &_name {
          flex: 1;
          padding: 0 2.66667vw;
          font-size: 4vw;
        }

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
