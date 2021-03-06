import { createStore } from 'vuex'
import user from './modules/user.js'
import app from './modules/app.js'
import tags from './modules/tags.js'
import getters from './getters.js'
export default createStore({
  state: {},
  getters,
  mutations: {},
  actions: {},
  modules: {
    user,
    app,
    tags
  }
})
