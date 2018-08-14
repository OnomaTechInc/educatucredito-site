const initialState = {
  active: false,
  title: '',
  body: '',
  cancel: '',
  confirm: '',
  resolve: null,
  reject: null
}

const state = Object.assign({}, initialState)

const mutations = {
  'ACTIVATE': (state, payload) => {
    Object.assign(state, payload)
  },
  'DEACTIVATE': (state) => {
    state = Object.assign(state, initialState)
  }
}

const actions = {
  ask: ({ commit }, { title, body, cancel, confirm }) => {
    return new Promise((resolve, reject) => {
      commit('ACTIVATE', {
        active: true,
        title,
        body,
        cancel,
        confirm,
        resolve,
        reject
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
