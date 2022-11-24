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
        :badge="tab.name==='等待审核'?count:undefined"
      >
        <component
          :is="currentComponent"
          :item-list="itemList"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { applicationList, applicationListByStatus } from '@api/application'
import { approvalList, approvalListByStatus } from '@api/approval'
import ApplicationItem from './ApplicationItem.vue'
import ApprovalItem from './ApprovalItem.vue'
import VantEmpty from '@components/VantEmpty.vue'
export default {
  components: { ApplicationItem, ApprovalItem, VantEmpty },
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
        name: '全部'
      }],
      emptySatus: true,
      componentName: '', // 动态绑定组件名字
      components: [ // 动态组件数据
        {
          navBarTitle: '我的申请',
          componentName: 'ApplicationItem',
          methods: applicationList,
          methodsByStatus: applicationListByStatus// 根据状态改变的api方法
        },
        {
          navBarTitle: '我的审批',
          componentName: 'ApprovalItem',
          methods: approvalList,
          methodsByStatus: approvalListByStatus // 根据状态改变的api方法
        }
      ],
      pageNo: 1,
      pageSize: 5 // 每页5条数据
    }
  },
  computed: {
    currentComponent () {
      return this.itemList.length ? this.componentName : 'VantEmpty'
    }
  },
  created () {
    this.click(this.activeName) // 页面加载完后默认调用一次api
  },
  methods: {
    // 点击tab栏切换获取后端数据
    async click (name, title) {
      for (var i = 0; i < this.components.length; i++) {
        if (this.navBarTitle === this.components[i].navBarTitle) { // 通过父组件传值 调用不同的api接口
          this.componentName = this.components[i].componentName
          const { msgCode, page } = title === '全部' ? await this.components[i].methods(this.pageNo, this.pageSize) : await this.components[i].methodsByStatus({ status: name })
          if (msgCode === 0) {
            this.$toast.clear()
            this.itemList = page.list
            if (name === '5') {
              this.count = this.itemList.length
            }
            break
          }
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
