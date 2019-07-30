import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store/store'
import { getToken } from '@/utils/token'


const service = axios.create({
  baseURL: 'http://39.98.243.100:8088/', // url = base url + request url
  timeout: 5000 // request timeout
})


service.interceptors.request.use(
  config => {

    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // console.log(error) 
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    //自己定义的http.code
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message || 'Error',
    //     type: 'error',
    //     duration: 3 * 1000
    //   })
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
    return res;
  },
  error => {
    // console.log('err' + error)
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 3 * 1000
    // })
    return Promise.reject(error)
  }
)

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url, data = {}, params = {}) {
  return service({
    method: 'post',
    url,
    data,
    params,
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url, params = {}) {
  return service({
    method: 'get',
    url,
    params,
  })
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put(url, data = {}, params = {}) {
  return service({
    method: 'put',
    url,
    params,
    data,
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function _delete(url, params = {}) {
  return service({
    method: 'delete',
    url,
    params,
  })
}

export default service
