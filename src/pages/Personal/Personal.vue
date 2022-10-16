<template>
  <div class="personal_container">
    <van-nav-bar
      title="我的"
    />
    <div class="personal_container_wrap">
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
      <div class="menu_container">
        <van-cell-group
          v-for="(item, index) in menus"
          :key="index"
        >
          <van-cell
            :title="item.title"
            :icon="item.icon"
            is-link
          />
        </van-cell-group>
      </div>
      <div class="personal_container_wrap_logout">
        退出登录
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      getAvatarImg: require('../../assets/image/avatar.jpg'), // 获取头像地址
      getBannerImg: require('../../assets/image/banner1.png'), // 获取广告栏地址
      menus: [ // 遍历所有功能菜单
        {
          icon: require('../../assets/image/xiaoxi.png'),
          title: '我的消息'
        },
        {
          icon: require('../../assets/image/geren.png'),
          title: '个人消息'
        },
        {
          icon: require('../../assets/image/shenqing.png'),
          title: '我的申请'
        },
        {
          icon: require('../../assets/image/shenpi.png'),
          title: '我的审批'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.personal_container {
  height: calc(var(--vh, 1vh) * 100 - 13.33333vw);
  background-color: #f1f3f5;

  &_wrap {
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

    .menu_container {
      margin-top: 5.33333vw;
      color: #333;

      .van-icon {
        display: flex;
        align-items: center;
      }

      
    }

    &_logout {
      padding: 4vw 0;
      margin-top: 5.33333vw;
      font-size: 3.46667vw;
      color: #b13a3d;
      text-align: center;
      background-color: #fff;
    }
  }
}
</style>
