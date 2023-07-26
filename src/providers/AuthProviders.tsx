import React, { useState, createContext } from 'react'
import { host } from '../types/host'

interface IAuthContext {
  isLoggedIn: boolean
  username: string | null
  login: (username: string, password: string) => Promise<void>
  register: (display_name: string, username: string, password: string) => Promise<void>
  logout: () => void
}
const AuthContext = createContext<IAuthContext | null>(null)

const retrieveUserData = (token: string) =>
  fetch(`${host}/auth/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json)

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider!')

  return context
}

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token)
  const [username, setUsername] = useState<string | null>(user)

  const register = async (display_name: string, username: string, password: string) => {
    const registerBody = { display_name, username, password }

    try {
      const res = await fetch(`${host}/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerBody),
      })
      const data = await res.json()

      if (data.statusCode && data.statusCode !== 201) {
        throw new Error(data.message)
      }
    } catch (err: any) {
      throw new Error(err.message)
    }
  }
  const login = async (username: string, password: string) => {
    const loginInfo = { username, password }

    console.log(JSON.stringify(loginInfo))

    try {
      const res = await fetch(`${host}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo),
      })

      const data = await res.json()

      // const newToken = data.accessToken

      // const { username } = await retrieveUserData(newToken)

      // const userInfo = userData(data.token)

      if (data.statusCode === 401) {
        throw new Error(data.message)
      }

      localStorage.setItem('token', data.token)
      localStorage.setItem('user', username)
      setIsLoggedIn(true)
      setUsername(username)
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    setUsername(null)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout, register }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
