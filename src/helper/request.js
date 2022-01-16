import axios from 'axios'
import {baseURL} from './config-baseURL'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = baseURL
//http://note-server.hunger-valley.com/
axios.defaults.withCredentials = true

export default function request(url, method = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        let options = {
            url,
            method,
            validateStatus(status) {
                return (status >= 200 && status < 300) || status === 400
            }
        }
        if (method.toLowerCase() === 'get') {
            options.params = data
        } else {
            options.data = data
        }
        axios(options).then((res) => {
            let op =options.method.toLowerCase()
            let isOption = op!== 'get' &&op!== 'patch'
            // console.log(isOption);
            if (res.status === 200) {
                // console.log(res.data.msg);
                isOption&&Message.success(res.data.msg)
                resolve(res.data)
            } else {
                isOption&&Message.error(res.data.msg)
                reject(res.data)
            }
        }).catch((err) => {
            Message.error('网络异常')
            reject({ msg: '网络异常' })
        })
    })
}