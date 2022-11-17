<template>
  <div id="app">
    <van-tabs
      v-model="activeName"
      @click="click"
    >
      <van-tab
        v-for="(tab,index) in tabList"
        :key="index"
        :title="tab.name"
        :name="tab.status"
        :badge="tab.name==='未归还'?count:undefined"
      />
      <component
        :is="currentComponent"
        :item-list="itemList"
      />
    </van-tabs>
  </div>
</template>
<script>
import { recordList, recordListByStatus } from '@api/record'
import RecordItem from './RecordItem.vue'
import VantEmpty from '@components/VantEmpty.vue'
export default {
  components: { RecordItem, VantEmpty },
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
      }, {
        name: '全部'
      }],
      // emptySatus: true, // 是否空数据
      pageNo: 1,
      pageSize: 5
    }
  },
  computed: {
    currentComponent () {
      return this.itemList.length ? 'RecordItem' : 'VantEmpty'
    }
  },
  created () {
    this.click(this.activeName) // 页面加载完后默认调用一次api
  },
  methods: {
    // 点击tab栏切换获取后端数据
    async click (name, title) {
      const { msgCode, page } = title === '全部' ? await recordList(this.pageNo, this.pageSize) : await recordListByStatus({ status: name })
      if (msgCode === 0) {
        this.itemList = page.list
        this.$toast.clear()
        if (name === '0') {
          this.count = this.itemList.length
        }
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
