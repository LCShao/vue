import axios from 'axios'
import { baseHost } from './config'

export const queryDoctor = () => {
  return new Promise(resolve => {
    axios.get(`${baseHost}/doctors/query`)
      .then(res => {
        resolve(res.data)
      })
  })
}
