import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProviders';

const Login = () => {
  return (
    <div className='bg-center bg-fixed bg-cover bg-loginBg'>
      <Navbar />
        <body className='bg-gradient-to-r from-red-50/50 to-zinc-500/20 container h-[500px] w-[500px] rounded-[35px] grid justify-items-center'>
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
        </body>
      <Footer />
    </div>
  )
}

export default Login
