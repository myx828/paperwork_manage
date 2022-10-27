<template>
  <div id="app">
    <van-tabs
      sticky
      @click="click"
    >
      <van-tab
        title="未归还"
        :badge="unreturnedList.length"
      >
        <RecordItem :item-list="unreturnedList" />
      </van-tab>
      <van-tab title="已归还">
        <RecordItem :item-list="returnList" />
      </van-tab>
      <van-tab
        title="全部"
      >
        <RecordItem :item-list="recordList" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { list } from '../../../api/record'
import RecordItem from './RecordItem.vue'
export default {
  components: { RecordItem },
  data () {
    return {
      recordList: [], // 全部数据列表
      returnList: [], // 已归还数组
      unreturnedList: []// 未归还数组
    }
  },
  methods: {
    // 点击tab栏切换获取后端数据
    async click () {
      this.returnList = []
      this.unreturnedList = []
      const { page } = await list()
      localStorage.setItem('recordList', JSON.stringify(page))
      this.recordList = JSON.parse(localStorage.getItem('recordList')).list
      this.recordList.forEach(element => {
        if (element.status === '1') {
          this.returnList.push(element)
        } else if (element.status === '0') {
          this.unreturnedList.push(element)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  overflow: hidden;
  background-color: #f4f4f4;
}
</style>
