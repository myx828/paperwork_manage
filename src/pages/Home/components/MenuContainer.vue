<template>
  <ul class="menu_container">
    <li
      v-for="(item, index) in services"
      :key="index"
      class="menu_container_item"
      @click="toDetail(item.path)"
    >
      <van-image
        class="menu_container_item_icon"
        :src="item.image"
      />
      <div class="menu_container_item_content">
        <p class="menu_container_item_content_title">
          {{ item.title }}
        </p>
        <span class="menu_container_item_content_discription">{{ item
          .discription }}</span>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      showDialog: false,
      services: [{
        image: require('../../../assets/image/apply.png'),
        title: '用证申请',
        discription: '证照使用申请',
        path: '/application'
      }, {
        image: require('../../../assets/image/record.png'),
        title: ' 用证记录 ',
        discription: '用在哪何时在用',
        path: '/record'
      }]
    }
  },
  methods: {
    toDetail (path) {
      this.$router.push({ path })
    }
  }
}
</script>
<style lang="scss" scoped>
.menu_container {
  display: flex;
  flex-wrap: wrap;
  padding: 4vw 4vw 1.33333vw;

  &_item {
    display: flex;
    align-items: center;
    width: 39.33333vw;
    padding: 2.66667vw;
    margin-right: 2.66667vw;
    margin-bottom: 2.66667vw;
    background-color: #f4f4f4;
    border-radius: 2.66667vw;

    &:nth-child(2n) {
      margin-right: 0;
    }

    &_icon {
      width: 8vw;
      height: 8vw;
    }

    &_content {
      margin-left: 2.66667vw;

      &_title {
        margin-bottom: 2.66667vw;
        font-size: 4vw;
        font-weight: 500;
      }

      &_discription {
        font-size: 3.46667vw;
      }
    }
  }
}
</style>
