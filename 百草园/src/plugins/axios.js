import axios from 'axios'

// 请求拦截
axios.interceptors.request.use(
  config => {
    config.url = `/api${config.url}`
    return config
  },
  err => Promise.reject(err.response)
)

// 响应拦截
axios.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err.response)
)

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$http', { value: axios })
  }
}
