import './config'
import axios from 'axios'

import { responseMessage } from '@core/utils/services'

import Noti, { toast } from '@/libs/notification'

const $http = axios.create()

/**
 * 400 一般錯誤回傳
 * 401 沒登入或逾時
 * 403 有登入但是沒有權限
 * 404 找不到資料
 * 405 Method 用錯了 post 用成 get 之類
 * 419 Session 逾時
 * 422 資料驗證錯誤回傳
 * 429 請求太多次達 throttle 上限
 * 500 後端 API 問題
 */

$http.interceptors.response.use(
  response => response.data,
  error => {
    toast.clear()

    Noti.error(responseMessage(error))

    return Promise.reject(error)
  }
)
export { axios }
export default $http
