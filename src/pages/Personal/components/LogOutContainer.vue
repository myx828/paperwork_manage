<template>
  <div
    class="personal_container_wrap_logout"
    @click="loginOut"
  >
    退出登录
  </div>
</template>
<script>
export default {
  methods: {
    loginOut () {
      localStorage.removeItem('tokenInfo')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
.personal_container_wrap_logout {
  padding: 4vw 0;
  margin-top: 5.33333vw;
  font-size: 3.46667vw;
  color: #b13a3d;
  text-align: center;
  background-color: #fff;
}
</style>
