<template>
  <div class="login">
    <div class="login_logo">
      <div class="login_logo_image" />
    </div>
    <div class="login_form">
      <van-form
        @submit="onSubmit"
      >
        <div class="login_form_info">
          <font-awesome-icon icon="user" />
          <van-field
            v-model.trim="userImformation.userName"
            placeholder="请输入账号"
            :rules="[{required:true,message:'请输入账号'}]"
          />
        </div>
        <div class="login_form_info">
          <font-awesome-icon icon="lock" />
          <van-field
            v-model.trim="userImformation.passWord"
            :rules="[{required:true,message:'请输入密码'}]"
            placeholder="请输入密码"
            type="password"
          />
        </div>
        <van-button
          class="login_form_btn"
          color="#b13a3d"
          round
          block
          native-type="submit"
        >
          提交
        </van-button>
        <van-button
          class="login_form_auth"
          color="#b13a3d"
          round
          block
        >
          统一身份认证登录
        </van-button>
      </van-form>
    </div>
  </div>
</template>
<script>
import { login, loginLic, dictionaryByType } from '../../api/login'
import { sm2 } from 'sm-crypto'

const PUBLIC_KEY =
  '047e3177c510f0fd85fb2a7ca8b7cabf5b62395f41fc9e7acd332751b176b4b644f8837b0d4e88b004dcb89143dd66f3aa5672e15e056a1581ea260504fef5bec9'

// 屏幕适配
// window.addEventListener('resize', () => {
//   const vh = window.innerHeight * 0.01
//   document.documentElement.style.setProperty('--vh', `${vh}px`)
// })

export default {
  // name: 'Login',
  data () {
    return {
      userImformation: {
        userName: '', // 账号信息
        passWord: '' // 密码
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        this.$toast.loading({
          message: '加载中...',
          forbidClick: true
        })
        const { msgCode, item } = await login({
          username: this.encryptUserNameAndPassword(this.userImformation.userName),
          password: this.encryptUserNameAndPassword(this.userImformation.passWord)
        })
        if (msgCode === 0) {
          localStorage.setItem('tokenInfo', JSON.stringify(item.token))
          const userInfo = await loginLic({
            token: JSON.parse(localStorage.getItem('tokenInfo')).access_token
          })
          localStorage.setItem('userInfo', JSON.stringify(userInfo.item.user))
          const { page } = await dictionaryByType({
            type: 'paperwork_type'
          })
          this.$router.push({
            path: '/layout/home',
            query: {
              paperworkDic: page.list
            }
          })
          this.$toast.clear()
        }
      } catch (e) {
        this.$toast.clear()
      } finally {
        this.$toast.loading({
          forbidClick: false
        })
      }
      // 校验表单
      // 跳到指定页面 （成功）
      // 失败（提示）
    },
    /**
     * @support
     * 使用sm2非对称加密方式的国密加密方法加密账号和密码
     * @param {string} message 账号或密码
     */
    encryptUserNameAndPassword (message) {
      return '04' + sm2.doEncrypt(message, PUBLIC_KEY)
    }

  }
}

</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/image/login-bg.png);
  background-size: cover;

  &_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;

    &_image {
      width: 66.4vw;
      height: 19.2vw;
      background-image: url(../../assets/image/logo.png);
      background-size: cover;
    }
  }

  &_form {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;

    &_info {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &_btn {
      width: 46.66667vw !important;
      margin: 13.33333vw auto 0 !important;
    }

    &_auth {
      width: 46.66667vw;
      margin: 5.33333vw auto 0;
    }
  }
}
</style>
