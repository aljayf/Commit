import Firebase from 'firebase'
import 'firebase/database'

export default {
  namespaced: true,

  state: {
    userDetails: null
  },

  getters: {
    userDetails (state) {
      return state.userDetails
    },
    isAuthenticated (state) {
      return !!state.userDetails
    }
  },

  mutations: {
    resetUser (state) {
      state.userDetails = null
    },
    setUserDetails (state, payload) {
      state.userDetails = payload
    }
  },

  actions: {
    async loginUser ({ commit }, payload) {
      let email = payload.email
      let password = payload.password

      await Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
          // commit('SET_USER', user)
        })
        .catch(error => {
          throw error
        })
    },
    async registerUser ({ commit }, payload) {
      let firebaseAuth = Firebase.auth()
      let firebaseDb = Firebase.database()
      firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password).then(response => {
        console.log('response: ', response)
        let userId = firebaseAuth.currentUser.uid
        firebaseDb.ref('users/' + userId).set({
          email: payload.email
        })
      }).catch(error => {
        console.log('error.message: ', error.message)
      })
    },
    async logoutUser ({ commit }) {
      await Firebase.auth().signOut()
        .then(() => {
          // commit('SET_USER', {})
        })
    }
  }
}
