<template>
  <div id="app">
    <div
      v-for="(item, index) in itemList"
      :key="index"
      class="list_container"
    >
      <div
        class="card"
        @click="toDetail(index)"
      >
        <div class="card_header">
          <p class="card_header_title">
            {{ item.leader }}的{{ item.certificate }}
          </p>
          <p class="card_header_time">
            {{ item.certificateId }}
          </p>
        </div>
        <div class="card_content">
          <p>借出时间：{{ item.outTime }}</p>
          <p>归还时间：{{ item.returnTime }}</p>
          <p>借出类型：{{ item.lendType }}</p>
          <p>地点：{{ item.destination }}</p>
          <p>事由：{{ item.reason }}</p>
        </div>
        <div class="card_footer">
          <van-tag color="rgb(177, 58, 61)">
            {{ item.leader.charAt(0) }}
          </van-tag>
          <p class="card_footer_name">
            由 {{ item.leader }} 提交
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    // 详情
    toDetail (index) {
      this.$router.push({
        path: '/recordDetail',
        query: {
          listIndex: index
        }
      })
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
