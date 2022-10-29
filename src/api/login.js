import request from '@/utils/request'

export function login ({
  username,
  password
}) {
  return request({
    url: '/api/login',
    method: 'post',
    params: { // query传值
      username,
      password
    }
    // data: { // body传值
    //   username,
    //   password
    // }
  })
}
/**
 * 统一登录接口
 * @param {*} param0
 * @returns
 */
export function loginLic ({
  token
}) {
  return request({
    url: '/api/lics/loginLic/loginLic',
    method: 'post',
    params: { // query传值
      token
    }
  })
}

export function dictionaryByType ({
  type
}) {
  return request({
    url: '/api/system/dictionary',
    method: 'get',
    headers: {
      'Access-Token': JSON.parse(localStorage.getItem('tokenInfo')).access_token
    },
    params: { // query传值
      type
    }
  })
}
