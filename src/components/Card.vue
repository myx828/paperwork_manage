<template>
  <div>
    <div class="card_header">
      <p class="card_header_title">
        <slot name="recordHeaderTitle" />
        <slot name="applicationHeaderTitle" />
      </p>
      <p class="card_header_time">
        <slot name="recordHeaderTime" />
        <slot name="applicationHeaderTime" />
      </p>
    </div>
    <div
      class="card_content"
    >
      <p
        v-for="(content, index) in currentCardContent"
        :key="index"
      >
        {{ content.title }}：{{ content.info }}
      </p>
    </div>
    <div class="card_footer">
      <van-tag :color="tagColor">
        {{ item.leader.charAt(0) }}
      </van-tag>
      <p class="card_footer_name">
        由 {{ item.leader }} 提交
      </p>
      <slot name="vantTag" />
    </div>
  </div>
</template>
<script>

export default {
  props: {
    item: {
      type: Object,
      default: () => { }
    },
    componentTitle: {
      type: String,
      default: ''
    },
    tagColor: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // 不在父组件调用的原因是item只能在dom中拿
      recordCardContent: [{
        title: '借出时间',
        info: this.item.outTime
      }, {
        title: '归还时间',
        info: this.item.returnTime
      }, {
        title: '借出类型',
        info: this.item.lendType
      }, {
        title: '地点',
        info: this.item.destination
      }, {
        title: '事由',
        info: this.item.reason
      }],
      applicationCardContent: [{
        title: '联系电话',
        info: this.item.tellphone
      }, {
        title: '工作部门',
        info: this.item.department
      }, {
        title: '当前审批节点',
        info: this.item.department
      }]
    }
  },
  computed: {
    currentCardContent () {
      // 将组件标题与卡片内容绑定在一起
      const cardContent = {
        用证记录: this.recordCardContent,
        我的申请: this.applicationCardContent
      }
      return cardContent[this.componentTitle]
    }
  }

}
</script>
<style lang="scss" scoped>
.card_header {
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

.card_content {
  justify-content: space-between;
  padding: 4vw 0;
  font-size: 3.46667vw;
  line-height: 1.8;
  color: #868686;
}

.card_footer {
  display: flex;
  align-items: center;

  &_name {
    flex: 1;
    padding: 0 2.66667vw;
    font-size: 4vw;
  }
}
</style>
