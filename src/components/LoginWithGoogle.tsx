import React, { useCallback } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { loginWithGoogle } from '../firebase'
import paths from '../paths'

const LoginWithGoogle: React.FC<RouteComponentProps> = ({ history }) => {
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      try {
        await loginWithGoogle()
        history.push(paths.home)
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  return (
    <>
      <button onClick={handleSubmit} className='button-google'>
        Googleでログイン
      </button>
    </>
  )
}

export default withRouter(LoginWithGoogle)
