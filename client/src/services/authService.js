import app from "../firebase"

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
}

export const login = (email, password) => {
  return signInWithEmailAndPassword(
    auth,
    email,
    password
  )
}

export const googleLogin = () => {
  return signInWithPopup(auth, provider)
}

export const logout = () => {
  return signOut(auth)
}