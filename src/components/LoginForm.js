import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../css/login.css'
import { fetchUser } from '../reducers/current'

const LoginForm = () => {

  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onUsernameChange = e => setUsername(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)

  const saveLogin = () => {
    const loginDetails = {
      username: username,
      password: password
    }
      dispatch(fetchUser(loginDetails))
       setUsername('')
       setPassword('')
  }

  return (
    <section>
      <br></br>
      <h3>please login</h3>
      <form>
        <label>Username: </label>
        <input
          className="logoutInput"
          type="text"
          name="username"
          value={username}
          onChange={onUsernameChange}
          />
        <label>Password: </label>
        <input
          className="logoutInput"
          type="text"
          name="password"
          value={password}
          onChange={onPasswordChange}
          />
        <button className="button" type="button" onClick={saveLogin}>Login</button>
        </form>
      </section>
  )
}

export default LoginForm
