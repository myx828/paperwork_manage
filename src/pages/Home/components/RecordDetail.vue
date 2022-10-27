<template>
  <div id="app">
    <NavBar
      name="返回"
      :nav-bar-title="navBarTitle"
      :left-arrow-status="true"
    />
    <div class="header_container">
      <p class="header_container_title">
        {{ itemDetail.leader }}的{{ itemDetail.certificate }}
        <van-tag
          plain
          round
          color="rgb(177, 58, 61)"
          style="margin-left: 10px;"
        >
          {{ itemDetail.status==='1'?'已归还':'未归还' }}
        </van-tag>
      </p>
      <p class="header_container_number">
        {{ itemDetail.certificateId }}
      </p>
    </div>
    <ul

      class="form_detail"
    >
      <li
        v-for="(item,index) in detailItem"
        :key="index"
        class="form_detail_item"
      >
        <p class="form_detail_item_title">
          {{ item.title }}
        </p>
        <p class="form_detail_item_text">
          {{ item.text }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import NavBar from '../../../components/NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
      navBarTitle: this.$route.meta.title, // 通过路由获取头部标题
      itemDetail: {}, // 记录详情列表
      detailItem: [{
        title: '借出时间',
        text: this.itemDetail.outTime
      }, {
        title: '归还时间',
        text: this.itemDetail.returnTime
      }, {
        title: '时长'
        // text: this.itemDetail.
      }, {
        title: '借出类型'
        // text: this.itemDetail.
      }, {
        title: '地点',
        text: this.itemDetail.destination
      }, {
        title: '事由',
        text: this.itemDetail.reason
      }, {
        title: '归还提醒时间'
        // text: this.itemDetail.
      }]
    }
  },
  beforeCreate () {
    this.itemDetail = JSON.parse(localStorage.getItem('recordList')).list[this.$route.query.listIndex]
  },
  created () {
    this.itemDetail = JSON.parse(localStorage.getItem('recordList')).list[this.$route.query.listIndex]
  }
}
</script>
<style lang="scss" scoped>
#app {
  background-color: #f4f4f4;
}

.header_container {
  padding: 2.66667vw 4vw;
  background-color: #fff;

  &_title {
    display: flex;
    align-items: center;
    font-size: 4.8vw;
    line-height: 1.6;
  }

  &_number {
    font-size: 3.2vw;
    line-height: 1.6;
    color: #868686;
  }
}

.form_detail {
  padding: 4vw 4vw 1.33333vw;
  margin: 4vw 2.66667vw;
  background-color: #fff;
  border-radius: 2.66667vw;

  &_item {
    margin-bottom: 2.66667vw;
    line-height: 1.6;

    &_title {
      font-size: 3.2vw;
      color: #868686;
    }

    &_text {
      font-size: 4vw;
    }
  }
}
</style>
