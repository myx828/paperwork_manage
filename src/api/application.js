import request from '@/utils/request'

/**
 *  根据不同的status获取不同的列表
 * @param {status}
 * @returns
 */
export function applicationListByStatus ({ status }) {
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
/**
 * 获取全部列表
 * @param {*} param0
 * @returns
 */
export function applicationList (pageNo, pageSize) {
  return request({
    url: '/api/lic/approval/v1.0/list',
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
 * 根据id查看详情
 * @param {*} applyId
 * @returns
 */
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
