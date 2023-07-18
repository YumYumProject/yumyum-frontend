import React from 'react'

const Login = () => {
  return (
    <div>
      <div>
        <p className="font-bold text-xl">Welcome Back!</p>
      </div>
      <form className="flex flex-col">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" placeholder="username..." required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="password..." required />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
