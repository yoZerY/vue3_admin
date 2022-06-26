import md5 from 'md5'
import router from '@/router'
import { ElLoading } from 'element-plus'

import { setTimeStamp } from '@/utils/auth'
import { loginReq, getUserInfo } from '@/api/sys'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    // login
    login({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        loginReq({ username, password: md5(password) })
          .then((res) => {
            const { token = '' } = res
            commit('setToken', token)
            resolve(token)
            setTimeStamp()
            router.push('/')
          })
          .catch((e) => {
            reject(e)
          })
      })
    },
    async getUserInfo({ commit }) {
      const loading = ElLoading.service({
        lock: true,
        text: 'Loading'
      })
      const res = await getUserInfo()
      commit('setUserInfo', res)
      loading.close()
      return res
    },
    // 退出登录
    logout({ commit }) {
      router.push('/login')
      commit('setToken', '')
      commit('setUserInfo', {})
      removeAllItem()
    }
  }
}
