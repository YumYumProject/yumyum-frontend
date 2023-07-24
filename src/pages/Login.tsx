import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProviders';

const Login = () => {
  return (
    <div className='bg-center bg-fixed bg-cover bg-loginBg'>
      <div className='flex justify-center'>
        <body className='bg-gradient-to-r from-red-50/50 to-zinc-100/20 h-[400px] w-[500px] rounded-[35px] grid justify-items-center'>
          <div>
            <p className="font-bold text-[30px] text-white p-12">Welcome Back!</p>
          </div>
          <form className="flex flex-col">
            <div className='grid grid-cols-1'>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" className='h-[32px] w-[400px] rounded-[50px] p-[10px] bg-white/80'required />
            </div>
            <div className='grid grid-cols-1'>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" className='h-[32px] w-[400px] rounded-[50px] p-[10px] bg-white/80' required />
            </div>
            <div className='flex justify-center'>
              <button type="submit" className='bg-white h-[50px] w-[150px] m-10 rounded-[50px]'>Login</button>
            </div>
          </form>
        </body>
        </div>
    </div>
  )
}

export default Login
