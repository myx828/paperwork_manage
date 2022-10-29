import request from '@/utils/request'

export function approvalList ({ status }) {
  return request({
    url: '/api/lic/process/v1.0/list',
    method: 'get',
    headers: {
      'Access-Token': JSON.parse(localStorage.getItem('tokenInfo')).access_token
    },
    params: {
      status
    }
  })
}
/**
 * 根据用户点击的对应申请人id查看详情
 * @param {*} applyId
 * @returns
 */
export function approvalListById (applyId) {
  return request({
    url: '/api/lic/process/v1.0/getProcess/' + applyId,
    method: 'get',
    headers: {
      'Access-Token': JSON.parse(localStorage.getItem('tokenInfo')).access_token
    }
  })
}
