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
        <!-- 没有数据时 -->
        <van-empty
          v-if="emptySatus"
          description="暂无数据"
        />
        <component
          :is="componentName"
          :item-list="itemList"
        />
      </van-tab>
    </van-tabs>
  </div>
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
      componentName: '', // 动态绑定组件名字
      emptySatus: true,
      components: [ // 动态组件数据
        {
          navBarTitle: '我的申请',
          componentName: 'ApplicationItem',
          methods: applicationList
        },
        {
          navBarTitle: '我的审批',
          componentName: 'ApprovalItem',
          methods: approvalList
        }
      ],
      pageNo: 1,
      pageSize: 5 // 每页5条数据
    }
  },
  created () {
    this.click(this.activeName) // 页面加载完后默认调用一次api
  },
  methods: {
    // 点击tab栏切换获取后端数据
    async click (name, title) {
      try {
        for (var i = 0; i < this.components.length; i++) {
          if (this.navBarTitle === this.components[i].navBarTitle) { // 通过父组件传值 调用不同的api接口
            this.componentName = this.components[i].componentName
            const { msgCode, page } = await this.components[i].methods({ status: name, pageNo: this.pageNo, pageSize: this.pageSize })
            if (msgCode === 0) {
              this.$toast.clear()
              if (page.count === 0) {
                this.emptySatus = true
              } else {
                this.emptySatus = false
              }
              this.itemList = page.list
              if (name === '5') {
                this.count = this.itemList.length
              }
              break
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
