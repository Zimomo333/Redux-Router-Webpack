import request from '../utils/request'

export function loginApi(query) {
  return request({
    url: '/login',
    method: 'post',
    params: query
  })
}

export function getInfoApi(token) {
  return request({
    url: '/info',
    method: 'get',
    params: { token }
  })
}

export function logoutApi() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
