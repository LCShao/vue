import axios from 'axios'
import { baseHost } from './config'

export const searchHelper = kw => {
  return new Promise(resolve => {
    axios.get(`${baseHost}/header/search/${kw}`)
      .then(res => {
        resolve(res.data)
      })
  })
}
