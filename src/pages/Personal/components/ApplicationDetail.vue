<template>
  <div id="app">
    <NavBar
      name="返回"
      :nav-bar-title="navBarTitle"
      :left-arrow-status="true"
    />
    <div class="process_container_content">
      <div class="header_container">
        <p class="header_container_title">
          {{ itemDetail.leader }}提交的用证申请
        </p>
        <p class="header_container_tip">
          等待我处理
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
            {{ item.text ===null||item.text ===''?'无':item.text }}
          </p>
        </li>
      </ul>
    </div>
    <div class="process_container_footer">
      <van-button
        block
        round
      >
        取消申请
      </van-button>
    </div>
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
        title: '姓名',
        text: this.itemDetail.leader
      }, {
        title: '性别',
        text: (this.itemDetail.sex === '0' ? '男' : '女')
      }, {
        title: '出生日期',
        text: this.itemDetail.birthDate
      }, {
        title: '籍贯',
        text: this.itemDetail.birthplace
      }, {
        title: '民族',
        text: this.itemDetail.nation
      }, {
        title: '政治面貌',
        text: this.itemDetail.politicsStatus
      }, {
        title: '身份证号码',
        text: this.itemDetail.idCard
      }, {
        title: '文化程度',
        text: this.itemDetail.education
      }, {
        title: '工作部门',
        text: this.itemDetail.department
      }, {
        title: '职务',
        text: this.itemDetail.job
      }, {
        title: '家庭住址',
        text: this.itemDetail.address
      }, {
        title: '联系电话',
        text: this.itemDetail.tellphone
      }, {
        title: ' 应急联系人 ',
        text: this.itemDetail.emergencyContact
      }, {
        title: ' 应急联系人电话 ',
        text: this.itemDetail.emergencyPhone
      }, {
        title: ' 证件名称  ',
        text: this.itemDetail.certificate
      }, {
        title: '  证件号码   ',
        text: this.itemDetail.certificateId
      }, {
        title: '   出发时间    ',
        text: this.itemDetail.startTime
      }, {
        title: '    回程时间     ',
        text: this.itemDetail.endTime
      }, {
        title: '     目的地      ',
        text: this.itemDetail.destination
      }, {
        title: '      使用事由       ',
        text: this.itemDetail.reason
      }]
    }
  },
  beforeCreate () {
    this.itemDetail = JSON.parse(localStorage.getItem('applicationList')).list[this.$route.query.listIndex]
  },
  created () {
    this.itemDetail = JSON.parse(localStorage.getItem('applicationList')).list[this.$route.query.listIndex]
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

  &_tip {
    font-size: 3.2vw;
    line-height: 1.6;
    color: #ff976a;
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

.process_container_footer {
  position: relative;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2.66667vw 8vw;
  background-color: #fff;
}

::v-deep .van-button--default {
  color: #fff;
  background-color: #b13a3d;
  border: 1px solid #b13a3d;
}
</style>
