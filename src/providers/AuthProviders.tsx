import React, { createContext, useState } from 'react'
import { host } from '../constant'
import { IComment } from '../types/types'

interface IAuthContext {
  isLoggedIn: boolean
  userInfo: UserInfo

  login: (username: string, password: string) => Promise<void>
  register: (display_name: string, username: string, password: string) => Promise<void>
  logout: () => void
  isOwnComment: (comment: IComment) => boolean
}

interface UserInfo {
  username: string | null
  token: string | null
}

const AuthContext = createContext<IAuthContext | null>(null)

const retrieveUserData = (token: string) =>
  fetch(`${host}/auth/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json())

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider!')

  return context
}

const token = localStorage.getItem('token')
const user = localStorage.getItem('username')

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem('token'))
  const [username, setUsername] = useState<string | null>(user)
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: username,
    token: token,
  })

  const register = async (display_name: string, username: string, password: string) => {
    const registerBody = { display_name, username, password }

    try {
      // axios.post
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
      throw new Error('cannot register')
    }
  }
  const login = async (username: string, password: string) => {
    const loginInfo = { username, password }

    try {
      const res = await fetch(`${host}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo),
      })

      const data = await res.json()

      if (data.statusCode === 401) {
        throw new Error('cannot login')
      }

      const newToken = data.token

      const { username } = await retrieveUserData(newToken)

      localStorage.setItem('token', newToken)
      localStorage.setItem('user', username)
      setIsLoggedIn(true)
      setUserInfo({
        username: username,
        token: newToken,
      })
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

  const isOwnComment = (comment: IComment) => {
    console.log(comment)
    return comment.comment_by.user_id === userInfo.username
  }

  console.log('erere')

  return (
    <AuthContext.Provider value={{ isLoggedIn, userInfo, login, logout, register, isOwnComment }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
