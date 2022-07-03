export default {
  namespaced: true,
  state: () => ({
    tagsList: []
  }),
  mutations: {
    addTags(state, tag) {
      const isExist = state.tagsList.find((item) => item.path === tag.path)
      if (!isExist) {
        state.tagsList.push(tag)
      }
    },
    closeTag(state, index) {
      state.tagsList.splice(index, 1)
    }
  },
  actions: {}
}
