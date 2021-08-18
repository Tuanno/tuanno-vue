import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    token: ''
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    async login ({ commit }, data) {
      const response = await axios.post('http://localhost:8000/api/auth/login', {
        email: data[0],
        password: data[1]
      })
      const responseData = response.data
      commit('setToken', responseData.acess_token)
    }
  },
  modules: {
  }
})
