import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Form, Field, Cell, Button, Toast, Tabbar, TabbarItem, Icon, Image as VanImage, Swipe, SwipeItem, Lazyload } from 'vant'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/font/iconfont.css'
import 'reset-css'
import 'normalize.css'

library.add(faUser, faLock)

Vue.config.productionTip = false

Vue.use(Form).use(Field).use(Cell).use(Button).use(Toast).use(Tabbar).use(TabbarItem).use(Icon).use(VanImage).use(Swipe).use(SwipeItem).use(Lazyload).component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
