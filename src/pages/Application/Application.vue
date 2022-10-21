<template>
  <div id="app">
    <van-dialog />
    <NavBar
      name="返回"
      :nav-bar-title="navBarTitle"
      :left-arrow-status="true"
    />
  </div>
</template>
<script>
import NavBar from '../../components/NavBar.vue'
// function beforeClose (action, done) {
//   if (action === 'confirm') {
//     setTimeout(done, 1000)
//   } else {
//     done()
//   }
// }
// Dialog.alert({
//   title: ' 行前教育 ',
//   beforeClose,
//   confirmButtonText: ' 已阅读并同意(0s) ',
//   messageAlign: 'left',
//   message: '<p style="text-indent:2em">根据国家和省外办相关规定，为加强我校因公出国（境）教师的政治意识、组织意识和纪律意识，特明确相关纪律要求如下:</p><p>一、请登录中国领事服务网http://cs.mfa.gov.cn,浏览有关注意事项和安全提示，注意了解往访国的安全形势和当地治安状况，如遇突发事件或紧急情况，尽量减少外出或避开人群密集、敏感场所，必要时请报警并寻求中国驻当地使领馆的协助。</p>',
//   theme: 'round-button'
// }).then(() => {
//   // on close
// })
export default {
  components: { NavBar },
  data () {
    return {
      navBarTitle: this.$route.meta.title // 获取头部标题
    }
  }
}
</script>
