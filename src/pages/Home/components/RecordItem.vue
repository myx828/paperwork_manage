<template>
  <div id="app">
    <div
      v-for="(item, index) in itemList"
      :key="index"
      class="list_container"
    >
      <div
        class="card"
        @click="toDetail(index)"
      >
        <Card
          :item="item"
          :component-title="componentTitle "
          :tag-color="tagColor"
        >
          <template #recordHeaderTitle>
            {{ item.leader }}的{{ item.certificate }}
          </template>
          <template #recordHeaderTime>
            {{ item.certificateId }}
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '@components/Card.vue'
export default {
  components: {
    Card
  },
  props: {
    itemList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      componentTitle: this.$route.meta.title, // 导航栏标题
      tagColor: '#B13A3D' // 标签页颜色
    }
  },
  methods: {
    // 详情
    toDetail (index) {
      this.$router.push({
        path: '/recordDetail',
        query: {
          itemList: JSON.stringify(this.itemList),
          index
        }
      })
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
