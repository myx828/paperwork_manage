<template>
  <van-tabs
    sticky
    @rendered="click"
  >
    <van-tab
      title="等待审批"
      :badge="waitList.length"
    >
      <ApplicationItem
        :item-list="waitList"
        :clicked-title="clickedTitle"
      />
    </van-tab>
    <van-tab title="通过">
      <ApplicationItem
        :item-list="passList"
        :clicked-title="clickedTitle"
      />
    </van-tab>

    <van-tab title="拒绝">
      <ApplicationItem
        :item-list="refuseList"
        :clicked-title="clickedTitle"
      />
    </van-tab>
    <van-tab title="全部">
      <ApplicationItem
        :item-list="applicationList"
        :clicked-title="clickedTitle"
      />
    </van-tab>
  </van-tabs>
</template>
<script>
import { list } from '../../../api/application'
import ApplicationItem from './ApplicationItem.vue'
export default {
  components: { ApplicationItem },
  data () {
    return {
      applicationList: [], // 全部数据列表
      waitList: [], // 等待审核数组
      passList: [], // 通过数组
      refuseList: [], // 拒绝数组
      clickedTitle: ''// 点击的标签页名
    }
  },
  methods: {
    // 点击tab栏切换获取后端数据
    async click (name, title) {
      this.waitList = []
      this.passList = []
      this.refuseList = []
      this.clickedTitle = title
      const { page } = await list()
      localStorage.setItem('applicationList', JSON.stringify(page))
      this.applicationList = JSON.parse(localStorage.getItem('applicationList')).list
      this.applicationList.forEach(element => {
        if (element.status === '5') {
          this.waitList.push(element)
        } else if (element.status === '0') {
          this.passList.push(element)
        } else if (element.status === '1') {
          this.refuseList.push(element)
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
