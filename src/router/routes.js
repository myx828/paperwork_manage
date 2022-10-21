import Login from '@/pages/Login/Login.vue'
import Layout from '@/layout/Layout.vue'
import Personal from '@/pages/Personal/Personal.vue'
import Home from '@/pages/Home/Home.vue'
import Application from '@/pages/Application/Application.vue'
import Record from '@/pages/Record/Record.vue'
import MyApplication from '../pages/Personal/components/MyApplication.vue'
import MyApproval from '../pages/Personal/components/MyApproval.vue'
import Infomation from '../pages/Personal/components/Infomation.vue'
export default [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/layout',
    component: Layout,
    children: [{ path: 'home', component: Home }, {
      path: 'personal',
      component: Personal,
      meta: {
        title: '我的'
      }
    }]
  },
  {
    path: '/application',
    component: Application,
    meta: {
      title: '用证申请'
    }
  }, {
    path: '/record',
    component: Record,
    meta: {
      title: '用证记录'
    }
  }, {
    path: '/myApplication',
    component: MyApplication,
    meta: {
      title: '我的申请'
    }
  }, {
    path: '/myApproval',
    component: MyApproval,
    meta: {
      title: '我的审批'
    }
  }, {
    path: '/info',
    component: Infomation,
    meta: {
      title: '个人信息'
    }
  }
]
