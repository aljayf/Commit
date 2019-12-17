import Firebase from 'firebase/app'
import 'firebase/firestore'
import firebase from '../../firebase-conf'

export default ({ Vue }) => {
  Firebase.initializeApp(firebase)
  Vue.prototype.$firebase = Firebase
}
