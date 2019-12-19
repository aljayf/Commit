import Firebase from 'firebase'

export default ({ app, router, Vue, store }) => {
  // Register the Firebase authentication listener
  Firebase.auth().onAuthStateChanged(user => {
    if (user) {
      //  if the user is logged in
      let userId = Firebase.auth().currentUser.uid
      // get data from the database once
      Firebase.database().ref('users/' + userId).once('value', snapshot => {
        // get the value of the snapshot
        let userDetails = snapshot.val()
        console.log('userDetails', userDetails)
        // calls the mutation to modify state
        store.commit('Authentication/setUserDetails', {
          email: userDetails.email,
          userId: userId
        })
      })
      // get todoList
      store.dispatch('Todo/firebaseGetTasks', {
        userId: userId
      })
      // route to main page
      router.replace({ name: 'Main' }).catch(() => {})
    } else {
      // reset state and returns to login
      store.commit('Authentication/setUserDetails', {})
      router.replace({ name: 'Login' }).catch(() => {})
    }
  })
}
