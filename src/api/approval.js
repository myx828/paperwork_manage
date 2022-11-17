import request from '@/utils/request'
/**
 *  根据不同的status获取不同的列表
 * @param {} param0
 * @returns
 */
export function approvalListByStatus ({ status }) {
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
 * 获取全部列表
 * @param {*} param0
 * @returns
 */
export function approvalList (pageNo, pageSize) {
  return request({
    url: '/api/lic/process/v1.0/list',
    method: 'get',
    headers: {
      'Access-Token': JSON.parse(localStorage.getItem('tokenInfo')).access_token
    },
    params: {
      pageNo,
      pageSize
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
