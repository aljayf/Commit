import Firebase from 'firebase'

export default {
  namespaced: true,

  state: {
    user: {}
  },
  getters: {
    user: state => state.user,
    isAuthenticated: state => !!state.user
  },
  mutations: {
    SIGNIN_USER (state, payload) {
      let user = payload
      state.user = user
    },
    LOGOUT_USER (state, payload) {
      state.user = null
    }
  },
  actions: {
    async logInUser ({ commit }, payload) {
      let email = payload.email
      let password = payload.password
      await Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
          commit('SIGNIN_USER', user)
        })
        .catch(error => { throw error })
    },
    async logOutUser ({ commit }) {
      await Firebase.auth().signOut()
        .then(() => {
          commit('SIGNIN_USER')
        })
    },
    async registerUser ({ commit }, payload) {
      let email = payload.email
      let password = payload.password
      await Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('SIGNIN_USER', user)
        })
        .catch(function (error) {
          console.log('Error Code: ' + error.code + '\n' + 'Error Message:' + error.message)
        })
    }
  }
}
