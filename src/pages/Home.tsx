import React from 'react'
import { logout } from '../firebase'

const Home = () => {
  return (
    <>
      <h1>Home(要ログイン)</h1>
      <div className='home'>
        <button onClick={logout}>ログアウト</button>
      </div>
    </>
  )
}

export default Home
