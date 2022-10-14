<template>
  <div class="home">
    <div class="home_container">
      <div class="home_container_header">
        <div class="home_container_header_bg" />
        <p class="home_container_header_title">
          因私出国服务平台
        </p>
        <div class="home_container_header_user">
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
      <ul class="home_container_menu">
        <li class="home_container_menu_item">
          <van-image
            class="home_container_menu_item_icon"
            :src="getApplyImg"
          />
          <div class="home_container_menu_item_content">
            <p class="home_container_menu_item_content_title">
              用证申请
            </p>
            <span class="home_container_menu_item_content_discription">证照使用申请</span>
          </div>
        </li>
        <li class="home_container_menu_item" />
      </ul>
    </div>
    <van-tabbar
      v-model="active"
      active-color="#B13A3D"
    >
      <van-tabbar-item icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item>
        <van-icon
          slot="icon"
          name="sousuo"
          class-prefix="icon"
        />
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0, // 导航栏切换标志
      getAvatarImg: require('../../assets/image/avatar.jpg'), // 获取头像本地地址
      getApplyImg: require('../../assets/image/apply.png'), // 获取申请功能图片地址
      images: [ // 遍历轮播图片
        require('../../assets/image/banner.png'),
        require('../../assets/image/banner.png')
      ]
    }
  }

}
</script>
<style lang="scss" scoped>
.home {
  height: calc(var(--vh, 1vh) * 100);

  &_container {
    height: calc(var(--vh, 1vh) * 100 - 13.33333vw);

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

    &_menu {
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

        &_icon {
          width: 8vw;
          height: 8vw;
        }

        &_content {
          margin-left: 2.66667vw;

          // &_title {
          //   margin-bottom: 2.66667vw;
          //   font-size: 4vw;
          //   font-weight: 500;
          // }

          // &_description{
          //   font-size: 3.46667vw;
          // }
        }
      }
    }
  }
}
</style>
