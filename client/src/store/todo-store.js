// import Firebase from 'firebase'
import 'firebase/database'

const state = {
  todoList: [],
  task: {}
}
const mutations = {

}
const actions = {
  addTask ({ commit }, payload) {
    console.log('blah', payload)
  }
}
const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
