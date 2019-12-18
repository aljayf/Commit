import { firebaseAuth, firebaseDb } from '../boot/firebase'

const state = {
  loggedIn: false,
  userDetails: {}
}

const mutations = {
  setLoggedIn (state, value) {
    state.loggedIn = value
  },
  setUserDetails (state, payload) {
    state.userDetails = payload
  }
}

const actions = {
  loginUser (a = {}, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password).then(response => {
      console.log('response: ', response)
    }).catch(error => {
      console.log('error.message: ', error.message)
    })
  },
  registerUser (a = {}, payload) {
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
  logoutUser () {
    firebaseAuth.signOut()
  },
  handleAuthStateChanged ({ commit }) {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        let userId = firebaseAuth.currentUser.uid
        firebaseDb.ref('users/' + userId).once('value', snapshot => {
          let userDetails = snapshot.val()
          console.log('userDetails', userDetails)
          commit('setUserDetails', {
            email: userDetails.email,
            userId: userId
          })
        })
        commit('setLoggedIn', true)
        this.$router.push('/').catch(err => { console.log(err) })
      } else {
        commit('setUserDetails', {})
        commit('setLoggedIn', false)
        this.$router.replace('/auth').catch(err => { console.log(err) })
      }
    })
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
