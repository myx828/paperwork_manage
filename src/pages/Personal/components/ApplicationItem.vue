<template>
  <div id="app">
    <div
      v-for="(item, index) in itemList"
      :key="index"
      class="list_container"
    >
      <div
        class="card"
        @click="toDetail(item.applyId)"
      >
        <Card
          :item="item"
          :component-title="componentTitle "
          :tag-color="tagColor"
        >
          <template #applicationHeaderTitle>
            {{ item.leader }}提交的用证申请
          </template>
          <template #applicationHeaderTime>
            {{ item.createDate }}
          </template>
          <template #vantTag>
            <VantTag :item-status-id="item.status" />
          </template>
        </Card>
      </div>
    </div>
    <NoMore />
  </div>
</template>
<script>
import { applicationListById } from '@api/application'
import Card from '@components/Card.vue'
import VantTag from '@components/VantTag.vue'
import NoMore from '@components/NoMore'
export default {
  components: {
    VantTag,
    Card,
    NoMore
  },
  props: {
    itemList: {
      type: Array,
      default: () => []
    },
    clickedTitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      componentTitle: this.$route.meta.title, // 导航栏标题
      tagColor: '#1989FA' // 标签页颜色
    }
  },
  methods: {
    // 详情
    async toDetail (applyId) {
      try {
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true
        })
        const { msgCode, item } = await applicationListById(applyId)
        if (msgCode === 0) {
          sessionStorage.setItem('itemDetail', JSON.stringify(item))
          this.$router.push({
            path: '/applicationDetail/' + applyId
          })
          this.$toast.clear()
        }
      } catch (e) {

      }
    }
  }
}
</script>
<style lang="scss" scoped>
.list_container {
  padding: 0 2.66667vw;
}

.card {
  padding: 5.33333vw;
  margin-top: 4vw;
  background-color: #fff;
  border-radius: 2.66667vw;
}

</style>
