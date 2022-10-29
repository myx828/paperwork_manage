import request from '@/utils/request'

export function messageList () {
  return request({
    url: '/api/lic/message/v1.0/list',
    method: 'get',
    headers: {
      'Access-Token': JSON.parse(localStorage.getItem('tokenInfo')).access_token
    }
  })
}

export function getCount () {
  return request({
    url: '/api/lic/message/v1.0/getCount',
    method: 'get',
    headers: {
      'Access-Token': JSON.parse(localStorage.getItem('tokenInfo')).access_token
    }
  })
}
