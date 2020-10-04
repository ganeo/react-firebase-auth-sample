import React from 'react'
import { withRouter } from 'react-router-dom'
import LoginWithEmail from '../components/LoginWithEmail'
import LoginWithGoogle from '../components/LoginWithGoogle'
import SignupWithEmail from '../components/SignupWithEmail'

const Top: React.FC = () => {
  return (
    <div className='wrap-top'>
      <div className='wrap-login'>
        <div>
          <LoginWithEmail />
        </div>
        <hr />
        <div>
          <LoginWithGoogle />
        </div>
      </div>
      <div className='wrap-signup'>
        <SignupWithEmail />
      </div>
    </div>
  )
}

export default withRouter(Top)
