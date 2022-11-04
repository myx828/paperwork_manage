import request from '@/utils/request'

export function applicationList ({ status, pageNo, pageSize }) {
  return request({
    url: '/api/lic/approval/v1.0/list',
    method: 'get',
    headers: {
      'Access-Token': JSON.parse(localStorage.getItem('tokenInfo')).access_token
    },
    params: {
      status,
      pageNo,
      pageSize
    }
  })
}

export function applicationListById (applyId) {
  return request({
    url: '/api/lic/approval/v1.0/getProcess/' + applyId,
    method: 'get',
    headers: {
      'Access-Token': JSON.parse(localStorage.getItem('tokenInfo')).access_token
    }
  })
}

export function saveApplication ({ applicationList }) {
  return request({
    url: '/api/lic/approval/v1.0/save',
    method: 'post',
    headers: {
      'Access-Token': JSON.parse(localStorage.getItem('tokenInfo')).access_token
    },
    data: {
      applicationList
    }
  })
}
