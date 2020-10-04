import React from 'react'
import { withRouter } from 'react-router-dom'
import LoginWithEmail from '../components/LoginWithEmail'
import LoginWithGoogle from '../components/LoginWithGoogle'
import SignupWithEmail from '../components/SignupWithEmail'

const Top: React.FC = () => {
  return (
    <div className='top'>
      <div className='login'>
        <div>
          <LoginWithEmail />
        </div>
        <hr />
        <div>
          <LoginWithGoogle />
        </div>
      </div>
      <div className='signup-with-email'>
        <SignupWithEmail />
      </div>
    </div>
  )
}

export default withRouter(Top)
