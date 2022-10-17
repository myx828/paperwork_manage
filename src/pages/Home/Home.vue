<template>
  <div class="home_container">
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
          庄晨忠
        </p>
        <van-icon
          slot="icon"
          name="youjiantou"
          class-prefix="icon"
        />
      </div>
    </div>
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
    <ul class="menu_container">
      <li
        v-for="(item, index) in services"
        :key="index"
        class="menu_container_item"
      >
        <van-image
          class="menu_container_item_icon"
          :src="item.image"
        />
        <div class="menu_container_item_content">
          <p class="menu_container_item_content_title">
            {{ item.title }}
          </p>
          <span class="menu_container_item_content_discription">{{ item
            .discription }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      getAvatarImg: require('../../assets/image/avatar.jpg'),
      images: [
        require('../../assets/image/banner.png'),
        require('../../assets/image/banner.png')
      ],
      services: [{
        image: require('../../assets/image/apply.png'),
        title: '用证申请',
        discription: '证照使用申请'
      }, {
        image: require('../../assets/image/record.png'),
        title: ' 用证记录 ',
        discription: '用在哪何时在用'
      }]
    }
  },
  methods: {
    toPersonal () {
      this.$router.push({ path: '/personal' })
    }
  }
}
</script>
<style lang="scss" scoped>
.home_container {
  height: calc(100% - 50px);

  &_header {
    position: relative;
    height: 64vw;

    &_bg {
      position: absolute;
      z-index: -1;
      width: 100vw;
      height: 61.33333vw;
      background-image: url(../../assets/image/header-bg.png);
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

  .menu_container {
    display: flex;
    flex-wrap: wrap;
    padding: 4vw 4vw 1.33333vw;

    &_item {
      display: flex;
      align-items: center;
      width: 39.33333vw;
      padding: 2.66667vw;
      margin-right: 2.66667vw;
      margin-bottom: 2.66667vw;
      background-color: #f4f4f4;
      border-radius: 2.66667vw;

      &:nth-child(2n) {
        margin-right: 0;
      }

      &_icon {
        width: 8vw;
        height: 8vw;
      }

      &_content {
        margin-left: 2.66667vw;

        &_title {
          margin-bottom: 2.66667vw;
          font-size: 4vw;
          font-weight: 500;
        }

        &_discription {
          font-size: 3.46667vw;
        }
      }
    }
  }
}
</style>
