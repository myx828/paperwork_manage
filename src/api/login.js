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
