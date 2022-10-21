<template>
  <div class="home_container_swiper">
    <p class="home_container_swiper_title">
      证照服务
    </p>
    <div class="home_container_swiper_item">
      <van-swipe
        class="swiper"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item
          v-for="(image, index) in images"
          :key="index"
        >
          <van-image
            :src="image"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      images: [
        require('../../../assets/image/banner.png'),
        require('../../../assets/image/banner.png')
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.home_container {
  &_swiper {
    padding: 0 4vw;

    &_title {
      padding: 4.66667vw 0;
      font-size: 5.86667vw;
    }

    &_item {
      overflow: hidden;
      border-radius: 1.33333vw;
    }
  }
}

::v-deep .swiper_container_swipe .van-swipe-item[data-v-74af9124] {
  background-color: #39a9ed;
}
</style>
