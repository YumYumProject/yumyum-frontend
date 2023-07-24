import React, { useState, useContext, createContext } from "react";
import { host } from "../assets/constant/host";

export enum HealthyConcern {
    Diabetes = 'เบาหวาน',
    Pressure = 'ความดัน',
    Heart = 'หัวใจ',
    Kidney = 'ไต',
    WeightLoss = 'ลดน้ำหนัก',
    Fat = 'อ้วน',
  }

export interface IRegister {
    username: string,
    password: string,
    display_name: string,
    food_allergen: string,
    healthy_concern: HealthyConcern
}

interface IAuthContext {
  isLoggedIn: boolean
  username: string | null
  login: (username: string, password: string) => Promise<void>
  register: (display_name: string, username: string, password: string, food_allergen: string, healthy_concern: HealthyConcern) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<IAuthContext | null>(null)

export function useAuth () {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used inside AuthProvider!')

  return context
}

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token)
  const [username, setUsername] = useState<string | null>(user)

  const login = async (username: string, password: string) => {
    const loginInfo = { username, password }

    try {
      const res = await fetch(`${host}/auth/me}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginInfo),
      })
      const data = await res.json()

      if (data.statusCode === 401) {
        throw new Error(data.message)
      }

      localStorage.setItem('token', data.accessToken)
      localStorage.setItem('user', username)
      setIsLoggedIn(true)
      setUsername(username)
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  const register = async (display_name: string, username: string, password: string, food_allergen: string, healthy_concern: HealthyConcern) => {
    const registerBody = { display_name, username, password, food_allergen, healthy_concern }

    try {
      const res = await fetch(`${host}/user/}`, {
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