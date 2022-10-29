<template>
  <div id="app">
    <NavBar
      name="返回"
      :nav-bar-title="navBarTitle"
      :left-arrow-status="true"
    />
    <div class="info_container">
      <div class="info_container_baseInfo">
        <h2 class="info_container_baseInfo_title">
          基础信息
        </h2>
        <van-cell-group
          v-for="(item, index) in baseInfo"
          :key="index"
        >
          <van-cell
            :title="item.title"
            :label="item.value"
          />
        </van-cell-group>
      </div>
      <div class="info_container_commonInfo">
        <h2 class="info_container_baseInfo_title">
          常用信息
        </h2>
        <van-cell-group
          v-for="(item, index) in commonInfo"
          :key="index"
        >
          <van-cell
            :title="item.title"
            :label="item.value"
          />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '../../../components/NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
      navBarTitle: this.$route.meta.title, // 获取头部标题
      userInfo: {}, // 用户信息列表
      baseInfo: [{ // 基础信息
        title: '姓名',
        value: this.userInfo.xm
      },
      {
        title: '性别',
        value: (this.userInfo.xbm === '0') ? '男' : '女'
      },
      {
        title: '出生日期',
        value: this.userInfo.csrq
      },
      {
        title: '国籍',
        value: this.userInfo.gjm
      },
      {
        title: '联系电话',
        value: this.userInfo.phone
      }
      ],
      commonInfo: [{ // 常用信息
        title: '籍贯',
        value: this.userInfo.jgm
      },
      {
        title: '民族',
        value: this.userInfo.mzm
      },
      {
        title: '政治面貌',
        value: this.userInfo.zzmmm
      },
      {
        title: '身份证号',
        value: this.userInfo.zjhm
      }
      ]
    }
  },
  beforeCreate () { // data还未生效 一旦到created data可以使用或许不到userInfo
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
  }
}
</script>
<style lang="scss" scoped>
.info_container {
  padding: 8.53333vw 6.66667vw 6.66667vw;

  &_baseInfo {
    margin-bottom: 8.53333vw;

    &_title {
      font-size: 5.86667vw;
      color: #282828;
    }
  }
}

.van-cell {
  padding: 0;
  margin: 5.86667vw 0;
}

.van-cell__label {
  font-size: 4vw;
  color: #868686;
}
</style>
