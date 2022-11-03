<template>
  <div id="app">
    <div class="message_container">
      <van-pull-refresh
        v-model="isLoading"
        @refresh="onRefresh"
      >
        <div
          class="message_container_content"
        >
          <!-- 没有数据时 -->
          <van-empty
            v-if="emptySatus"
            description="暂无数据"
          />
          <div
            v-for="(item,index) in messageList"
            :key="index"
            ref="contentItem"
            class="message_container_content_item"
            :class="{view:!isRead&&activeIndex===index}"
            @click="showDetail(index)"
          >
            <div class="item_header">
              <p class="item_header_title">
                {{ item.type ==='5'?'过期提醒':'归还提醒' }}
              </p>
              <p
                ref="headerTime"
                class="item_header_time"
              >
                {{ activeIndex === index ?(isRead?(item.mark==='1'?'已读':'未读'):item.updateDate):item.mark==='1'?'已读':'未读' }}
              </p>
            </div>
            <div
              v-if=" activeIndex === index ?isRead:true"
              class="item_time"
            >
              {{ item.updateDate }}
            </div>
            <div
              class="item_content"
            >
              {{ activeIndex === index ?item.message:undefined }}
            </div>
            <div
              class="item_btn"
            >
              收起
            </div>
          </div>
          <div
            v-if="!(emptySatus)"
            class="pull"
          >
            <p class="pull_title">
              没有更多了
            </p>
          </div>
        </div>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import { Toast } from 'vant'
export default {
  data () {
    return {
      isRead: true,
      messageList: [],
      emptySatus: true, // 判断是否有数据
      activeIndex: -1, // 点击的索引值
      isLoading: false // 加载标志
    }
  },
  created () {
    this.messageList = JSON.parse(sessionStorage.getItem('messageList'))
    if (this.messageList === null) {
      this.emptySatus = true
    } else {
      this.emptySatus = false
    }
  },
  updated () {
    sessionStorage.removeItem('messageList')
  },
  methods: {
    showDetail (index) {
      this.activeIndex = index
      this.isRead = !this.isRead
    },
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    }

  }

}
</script>
<style lang="scss" scoped>

.message_container {
  height: 100%;
  padding: 0 4vw;
  background-color: #f4f4f4;

  &_content {
    padding: 4vw 0;

    &_item {
      height: 15.2vw;
      padding: 4vw 4vw 0;
      margin-bottom: 4vw;
      overflow: hidden;
      background-color: #fff;
      border-radius: 1.33333vw;
    }
  }
}

.view {
  height: auto;
}

.item_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4vw;

  &_title {
    font-size: 4vw;
    font-weight: 700;
    color: #282828;
  }

  &_time {
    font-size: 2.93333vw;
    color: #666;
  }
}

.is_read {
  color: #868686;
}

.item_time {
  padding-bottom: 4vw;
  font-size: 2.93333vw;
  color: #868686;
  text-align: right;
}

.item_content {
  padding-bottom: 4vw;
  font-size: 2.93333vw;
  line-height: 1.8;
  text-indent: 2em;
}

.item_btn {
  font-size: 3.2vw;
  line-height: 12vw;
  color: #868686;
  text-align: center;
  border-top: 1px solid #ccc;
}

.pull {
  display: flex;
  align-items: center;
  justify-content: center;

  &_title {
    padding: 2.66667vw;
    font-size: 2.93333vw;
    color: #b13a3d;
  }
}
</style>
