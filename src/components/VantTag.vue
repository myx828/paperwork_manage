<template>
  <van-tag
    plain
    round
    :type="statusTagItem.tagType"
  >
    {{ statusTagItem.status }}{{ itemStatusId }}
  </van-tag>
</template>
<script>
export default {
  props: {
    itemStatusId: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      // 状态标签列表
      statusTagList: [
        {
          statusId: '5',
          status: '等待审核',
          tagType: 'primary'
        },
        {
          statusId: '1',
          status: '拒绝',
          tagType: 'danger'
        },
        {
          statusId: '0',
          status: '通过',
          tagType: 'success'
        },
        {
          statusId: '4',
          status: '撤回',
          tagType: 'warning'
        }
      ],
      // 对应标签项
      statusTagItem: {}
    }
  },
  // 默认标签页标签数据
  mounted () {
    this.statusTagItem = this.statusTagList.find((item) => item.statusId === this.itemStatusId)
  },
  // 切换标签页更改标签数据
  updated () {
    this.statusTagItem = this.statusTagList.find((item) => item.statusId === this.itemStatusId)
  }

}
</script>
