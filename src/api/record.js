import request from '@/utils/request'

export function list () {
  return request({
    url: '/api/lic/record/v1.0/list',
    method: 'get',
    headers: {
      'Access-Token': JSON.parse(localStorage.getItem('tokenInfo')).access_token
    }
  })
}
