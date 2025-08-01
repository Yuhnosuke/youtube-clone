// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  type User,
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAxBIQeRkXRRZYTDu3BFz5koxXk3S0RBZ0',
  authDomain: 'clone-e8f71.firebaseapp.com',
  projectId: 'clone-e8f71',
  storageBucket: 'clone-e8f71.firebasestorage.app',
  messagingSenderId: '324510305565',
  appId: '1:324510305565:web:a9eb8a5a118a9ba60b65f4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

/**
 * Signs the user in with a Google popup.
 * @returns A promise that resolves with the user's credentials.
 */
export const signInWithGoogle = () => {
  return signInWithPopup(auth, new GoogleAuthProvider())
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export const signOut = () => {
  return auth.signOut()
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export const onAuthStateChangedHelper = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback)
}
