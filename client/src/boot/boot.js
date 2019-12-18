import Firebase from 'firebase'

export default ({ app, router, Vue, store }) => {
  Firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      router.replace({ name: 'Main' }).catch(() => {})
    } else {
      router.replace({ name: 'Login' }).catch(() => {})
    }
  })
}
