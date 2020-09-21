import request from '../utils/request'

export function login(query) {
  return request({
    url: '/login',
    method: 'post',
    params: query
  })
}

export function getInfo(token) {
  return request({
    url: '/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
