import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    token: '',
    cars: []
  },
  getters: {
    isLogged: state => {
      return state.token !== '' 
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem('token', '')
    },
    setCars (state, cars) {
      state.cars = cars
    },
    newVeiculo (state, newCar) {
      state.cars.push('newCar')
    }
  },
  actions: {
    async login ({ commit }, data) {
      try {
        const response = await axios.post('http://localhost:8000/api/auth/login', {
          email: data[0],
          password: data[1]
        })
        const responseData = response.data
        commit('setToken', responseData.access_token)
        return true
      } catch (ex) {
        return false
      }
    },
    async logout ({ commit }) {
      commit('setToken', '')
      commit('setCars', [])
    },
    async register ({ commit }, data) {
      try {
        const response = await axios.post('http://localhost:8000/api/register', data)
      } catch (ex) {
        return false
      }
    },
    async loadToken ({ commit }) {
      const token = localStorage.getItem('token')
      if (token) {
        commit('setToken', token)
      }
    },
    async loadCars ({ state, commit }) {
      const response = await axios.get('http://localhost:8000/api/Car', {
        headers: { Authorization: `Bearer ${state.token}` } 
      })
      commit('setCars', response.data)
    },

    async criarVeiculo ({ state, commit }, carData) {
      const response = await axios.post('http://localhost:8000/api/Car', carData, {
        headers: { Authorization: `Bearer ${state.token}` }
      }) 
      commit('newVeiculo', response.data)
    },

    async apagarCar ({ state, commit }, id) {
      const response = await axios.delete(`http://localhost:8000/api/Car/${id}`, {
        headers: { Authorization: `Bearer ${state.token}` } 
      })
    } 

  },
  modules: {
  }
})
