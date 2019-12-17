import Firebase from 'firebase'

export default ({ app, router, Vue, store }) => {
  Firebase.auth().onAuthStateChanged(user => {
    if (user) {
      store.commit('Authentication/SIGNIN_USER', user)
      router.replace({ name: 'Main' }).catch(() => {})
    } else {
      store.commit('Authentication/LOGOUT_USER')
      router.replace({ name: 'Login' }).catch(() => {})
    }
  })
}
