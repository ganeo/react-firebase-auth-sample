import React, { useCallback } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { loginWithEmail } from '../firebase'
import paths from '../paths'

const LoginWithEmail: React.FC<RouteComponentProps> = ({ history }) => {
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await loginWithEmail(email.value, password.value)
        history.push(paths.home)
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  return (
    <>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input name='email' type='email' placeholder='Eメール' />
        </div>
        <div>
          <input name='password' type='password' placeholder='パスワード' />
        </div>
        <button type='submit'>ログイン</button>
      </form>
    </>
  )
}

export default withRouter(LoginWithEmail)
