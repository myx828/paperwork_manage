<template>
  <van-nav-bar
    :title="navBarTitle"
    :left-text="name"
    :left-arrow="leftArrowStatus"
    style="background-color: #b13a3d;"
    @click-left="onClickLeft"
  />
</template>
<script>

export default {
  props: {
    navBarTitle: {
      type: String,
      default: ''
    },
    leftArrowStatus: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>
<style  scoped>
.van-nav-bar /deep/ .van-icon {
  color: #fff !important;
}

::v-deep .van-nav-bar__text {
  color: #fff;
}

::v-deep .van-nav-bar__title {
  color: #fff;
}
</style>
