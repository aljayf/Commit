import Firebase from 'firebase'

export default ({ app, router, Vue, store }) => {
  // Register the Firebase authentication listener
  Firebase.auth().onAuthStateChanged(user => {
    if (user) {
      let userId = Firebase.auth().currentUser.uid
      Firebase.database().ref('users/' + userId).once('value', snapshot => {
        let userDetails = snapshot.val()
        console.log('userDetails', userDetails)
        store.commit('Authentication/setUserDetails', {
          email: userDetails.email,
          userId: userId
        })
      })
      router.replace({ name: 'Main' }).catch(() => {})
    } else {
      store.commit('Authentication/setUserDetails', {})
      router.replace({ name: 'Login' }).catch(() => {})
    }
  })
}
