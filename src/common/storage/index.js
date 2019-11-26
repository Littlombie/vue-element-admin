/*
 * @Author: Littlombie
 * @Date: 2019-10-08 15:24:40
 * @lastEditors: Littlombie
 * @LastEditTime: 2019-10-08 15:45:54
 * @ storage 的配置
 */

import {storagePrefix} from '../setting'

class Storage {
  constructor (type) {
    if (type === 'local') {
      this.store = window.localStorage
    } else if (type === 'session') {
      this.store = window.sessionStorage
    }
    this.prefix = storagePrefix
  }
  get (key) {
    if (!key) {
      throw new Error ('没有找到Key。')
    }
    if (typeof key === 'object') {
      throw new Error ('key 不能是一个对象')
    }
    let value = this.store.getItem(this.prefix + key)
    if (value === null) return 
    
    try {
      value = JSON.parse(value)
    }catch (e) {
      value = {}
    }
    return value
  }

  set (key, value) {
    try {
      value = JSON.stringify(value)
      this.store.setItem(this.prefix + key, value)
    } catch (e) {
      
    }
    return this
  }
  remove (key) {
    this.store.removeItem(this.prefix + key)
    return this
  }
}

export const localStorage = new Storage('local')
export const sessionStorage = new Storage('session')