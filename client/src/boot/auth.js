import Firebase from 'firebase/app'
import 'firebase/auth'

export default ({ auth, router, Vue, store }) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.authRequired)) {
      let isAuthenticated = Firebase.auth().currentUser != null
      if (isAuthenticated) {
        next()
      } else {
        next({
          name: 'Login'
        })
      }
    } else {
      next()
    }
  })
}
