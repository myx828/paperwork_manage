<template>
  <div id="app">
    <van-tabs
      v-model="activeName"
      sticky
      @click="click"
    >
      <van-tab
        v-for="(tab,index) in tabList"
        :key="index"
        :title="tab.name"
        :name="tab.status"
        :badge="tab.name==='未归还'?count:undefined"
      >
        <!-- 没有数据时 -->
        <van-empty
          v-if="emptySatus"
          description="暂无数据"
        />
        <RecordItem :item-list="itemList" />
      </van-tab>
      <van-tab title="全部">
        <RecordItem :item-list="itemList" />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { recordList, recordListByStatus } from '../../../api/record'
import RecordItem from './RecordItem.vue'
export default {
  components: { RecordItem },
  data () {
    return {
      itemList: [], // 数据列表
      activeName: '0', // 默认启用的标签
      count: 0, // 等候审批的数据量
      tabList: [{ // tab栏切换 状态获取
        name: '未归还',
        status: '0'
      }, {
        name: '已归还',
        status: '1'
      }],
      emptySatus: true
    }
  },
  created () {
    this.click(this.activeName) // 页面加载完后默认调用一次api
  },
  methods: {
    // 点击tab栏切换获取后端数据
    async click (name, title) {
      try {
        if (title === '全部') { // 不传status参数
          const { msgCode, page } = await recordList()
          if (msgCode === 0) {
            this.itemList = page.list
            this.$toast.clear()
          }
        } else {
          const { msgCode, page } = await recordListByStatus({ status: name })
          if (msgCode === 0) {
            this.$toast.clear()
            this.itemList = page.list
            if (page.count === 0) {
              this.emptySatus = true
            } else {
              this.emptySatus = false
            }
            if (name === '0') {
              this.count = this.itemList.length
            }
          }
        }
      } catch (error) {

      }
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
