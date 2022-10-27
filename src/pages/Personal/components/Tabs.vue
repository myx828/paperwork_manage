<template>
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
    >
      <ApplicationItem
        :item-list="itemList"
        :clicked-title="tab.name"
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
      itemList: [], // 数据列表
      activeName: '5', // 默认启用的标签
      tabList: [{ // tab栏切换 状态获取
        name: '等待审核',
        status: '5'
      }, {
        name: '通过',
        status: '0'
      }, {
        name: '拒绝',
        status: '1'
      }, {
        name: '全部',
        status: ''
      }]
    }
  },
  mounted () {
    this.click(this.activeName) // 页面加载完后默认调用一次api
  },
  methods: {
    // 点击tab栏切换获取后端数据
    async click (name, title) {
      try {
        const { page } = await list({ status: name })
        this.itemList = page.list
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
