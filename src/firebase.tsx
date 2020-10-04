import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { FirebaseContext } from './contexts'

export const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
})

export const loginWithEmail = async (email: string, password: string) => {
  await app.auth().signInWithEmailAndPassword(email, password)
}

export const loginWithGoogle = async () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  await firebase.auth().signInWithPopup(provider)
}

export const signupWithEmail = async (email: string, password: string) => {
  await app.auth().createUserWithEmailAndPassword(email, password)
}

export const logout = () => {
  app.auth().signOut()
}

export const FirebaseProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div className='loading'>ローディング中...</div>
  }

  return (
    <FirebaseContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}
