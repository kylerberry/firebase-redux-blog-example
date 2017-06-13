import { initializeApp } from 'firebase'
import config from './firebaseConfig'

const Firebase = initializeApp(config)
const FirebaseAuth = Firebase.auth()
const FirebaseDb = Firebase.database()

export { FirebaseAuth, FirebaseDb }