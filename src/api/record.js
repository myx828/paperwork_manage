import request from '@/utils/request'
/**
 * @description 根据不同的status获取不同的列表
 * @param {*} status 状态参数
 * @returns
 */
export function listByStatus ({ status }) {
  return request({
    url: '/api/lic/record/v1.0/list',
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
 * 获取全部列表
 * @returns
 */
export function list () {
  return request({
    url: '/api/lic/record/v1.0/list',
    method: 'get',
    headers: {
      'Access-Token': JSON.parse(localStorage.getItem('tokenInfo')).access_token
    }
  })
}
