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
      :badge="tab.name==='等待审核'?count:undefined"
    >
      <component
        :is="componentName"
        :item-list="itemList"
      />
    </van-tab>
  </van-tabs>
</template>
<script>
import { applicationList } from '../../../api/application'
import { approvalList } from '../../../api/approval'
import ApplicationItem from './ApplicationItem.vue'
import ApprovalItem from './ApprovalItem.vue'
export default {
  components: { ApplicationItem, ApprovalItem },
  props: {
    navBarTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      itemList: [], // 数据列表
      count: 0, // 等候审批的数据量
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
      }],
      componentName: ''// 动态绑定组件名字
    }
  },
  mounted () {
    this.click(this.activeName) // 页面加载完后默认调用一次api
  },
  methods: {
    // 点击tab栏切换获取后端数据
    async click (name, title) {
      try {
        if (this.navBarTitle === '我的申请') { // 通过父组件传值 调用不同的api接口
          this.componentName = 'ApplicationItem'
          const { page } = await applicationList({ status: name })
          this.itemList = page.list
          if (name === '5') {
            this.count = this.itemList.length
          }
        } else if (this.navBarTitle === '我的审批') {
          this.componentName = 'ApprovalItem'
          const { page } = await approvalList({ status: name })
          this.itemList = page.list
          if (name === '5') {
            this.count = this.itemList.length
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
