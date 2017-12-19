import axios from 'axios'
import { baseHost } from './config'
import qs from 'querystring'

export const login = (uname, upwd) => {
  return new Promise(resolve => {
    axios.post(
      `${baseHost}/index/login.php`,
      qs.stringify({uname, upwd}),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        withCredentials: true
      }
    ).then(res => {
      resolve(res.data)
    })
  })
}
export const isLogin = () => {
  return new Promise(resolve => {
    axios.get(
      `${baseHost}/index/isLogin.php`, {
        withCredentials: true
      }
    ).then(res => {
      resolve(res.data)
    })
  })
}
export const logout = () => {
  return new Promise(resolve => {
    axios.get(`${baseHost}/index/logout.php`, {
      withCredentials: true
    }).then(res => {
      resolve(res.data)
    })
  })
}
