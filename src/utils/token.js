import Cookies from 'js-cookie'
const key = 'user_token'
export function getToken() {
  return Cookies.get(key)
}

export function setToken(token) {
  return Cookies.set(key, token)
}

export function removeToken() {
  return Cookies.remove(key)
}
