<template>
  <div id="app">
    <div
      v-for="(item, index) in itemList"
      :key="index"
      class="list_container"
    >
      <div
        class="card"
        @click="toDetail(item.applyId)"
      >
        <div class="card_header">
          <p class="card_header_title">
            {{ item.leader }}提交的用证申请
          </p>
          <p class="card_header_time">
            {{ item.createDate }}
          </p>
        </div>
        <div class="card_content">
          <p>联系电话：{{ item.tellphone }}</p>
          <p>工作部门：{{ item.department }}</p>
          <p>当前审批节点：{{ item.department }}</p>
        </div>
        <div class="card_footer">
          <van-tag
            type="primary"
            size="medium"
          >
            {{ String(item.leader).charAt(0) }}
          </van-tag>
          <p class="card_footer_name">
            由{{ item.leader }}提交
          </p>
          <van-tag
            v-if="item.status==='5'"
            plain
            round
            type="primary"
          >
            等待审核
          </van-tag>
          <van-tag
            v-if="item.status==='1'"
            plain
            round
            type="danger"
          >
            拒绝
          </van-tag>
          <van-tag
            v-if="item.status==='0'"
            plain
            round
            type="success"
          >
            通过
          </van-tag>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { applicationListById } from '../../../api/application'
export default {
  props: {
    itemList: {
      type: Array,
      default: () => {
        return []
      }
    },
    clickedTitle: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 详情
    async toDetail (applyId) {
      try {
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true
        })
        const { msgCode, item } = await applicationListById(applyId)
        if (msgCode === 0) {
          sessionStorage.setItem('itemDetail', JSON.stringify(item))
          this.$router.push({
            path: '/applicationDetail'
          })
          this.$toast.clear()
        }
      } catch (e) {

      }
    }
  }
}
</script>
<style lang="scss" scoped>
.list_container {
  padding: 0 2.66667vw;
}

.card {
  padding: 5.33333vw;
  margin-top: 4vw;
  background-color: #fff;
  border-radius: 2.66667vw;

  &_header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &_title {
      display: flex;
      align-items: center;
      font-size: 4vw;
    }

    &_time {
      font-size: 2.93333vw;
      color: #868686;
    }
  }

  &_content {
    justify-content: space-between;
    padding: 4vw 0;
    font-size: 3.46667vw;
    line-height: 1.8;
    color: #868686;
  }

  &_footer {
    display: flex;
    align-items: center;

    &_name {
      flex: 1;
      padding: 0 2.66667vw;
      font-size: 4vw;
    }
  }
}
</style>
