import request from '@/utils/request'

export function list ({ status }) {
  return request({
    url: '/api/lic/approval/v1.0/list',
    method: 'get',
    headers: {
      'Access-Token': JSON.parse(localStorage.getItem('tokenInfo')).access_token
    },
    params: {
      status
    }
  })
}
