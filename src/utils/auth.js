import Cookies from 'js-cookie'

const tokenKey = 'myToken'
const userKey = 'userInfo'

export function getToken() {
  return Cookies.get(tokenKey)
}

export function setToken(token) {
  return Cookies.set(tokenKey, token)
}

export function removeToken() {
  return Cookies.remove(tokenKey)
}

export function getUserInfo() {
  return JSON.parse(localStorage.getItem(userKey))
}

export function setUserInfo(userInfo) {
  return localStorage.setItem(userKey,JSON.stringify(userInfo))
}

export function removeUserInfo() {
  return localStorage.removeItem(userKey)
}
