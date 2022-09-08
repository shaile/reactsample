import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../Context';
import { useAuthDispatch } from '../../Context/context';

import styles from './auth.module.css';

function Login() {
  const [username, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAuthDispatch() ;
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()
    let payload = {username, password};
    try {
        let response = await loginUser(dispatch, payload) //loginUser action makes the request and handles all the neccessary state changes
        if (!response.username) return
        navigate('/dashboard') //navigate to dashboard on success
    } catch (error) {
        console.log(error)
    }
}

return (
  <div className={styles.container}>
      <div className={{ width: 200 }}>
          <h1>Login Page</h1>
         <form >
              <div className={styles.loginForm}>
                  <div className={styles.loginFormItem}>
                      <label htmlFor="email">Username</label>
                      <input type="text" id='email' value={username} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className={styles.loginFormItem}>
                      <label htmlFor="password">Password</label>
                      <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
                  </div>
              </div>
              <button onClick={handleLogin} >login</button>
          </form>
      </div>
  </div>
)
}

export default Login;