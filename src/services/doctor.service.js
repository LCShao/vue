import axios from 'axios'
import { baseHost } from './config'

export const queryDoctor = () => {
  return new Promise(resolve => {
    axios.get(`${baseHost}/doctor/queryDoctor.php`)
      .then(res => {
        resolve(res.data)
      })
  })
}
