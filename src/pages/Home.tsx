import React, { useContext } from 'react'
import { logout } from '../firebase'
import { FirebaseContext } from '../contexts'

const Home = () => {
  const { user } = useContext(FirebaseContext)

  return (
    <>
      <header className='header-page'>
        <h1>Home(要ログイン)</h1>
      </header>
      <div className='wrap-home'>
        <p>{user?.email}でログインしています。</p>
        <button onClick={logout}>ログアウト</button>
      </div>
    </>
  )
}

export default Home
