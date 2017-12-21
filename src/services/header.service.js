import axios from 'axios'
import { baseHost } from './config'

export const searchHelper = kw => {
  return new Promise(resolve => {
    axios.get(`${baseHost}index/searchHelper.php`, {
      params: {kw: kw}
    })
    .then(res => {
      resolve(res.data)
    })
  })
}
