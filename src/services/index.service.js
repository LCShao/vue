import axios from 'axios'
import { baseHost } from './config'

export const getAllSkills = () => {
  return new Promise(resolve => {
    axios.get(`${baseHost}/index/getAllSkills.php`)
      .then(res => {
        for (var skill of res.data) {
          skill.isHover = false
          var subs = skill.skill_subs.split(';')
          skill.skill_subs = []
          for (var strSub of subs) {
            var obj = {}
            var arr = strSub.split(':')
            obj.title = arr[0]
            var arr2 = arr[1].split(',')
            obj.content = arr2
            skill.skill_subs.push(obj)
          }
        }
        resolve(res.data)
      })
  })
}
