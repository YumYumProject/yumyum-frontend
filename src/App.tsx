import React from 'react'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import GuardRoute from './guards/GuardRoute'
import { useAuth } from './providers/AuthProviders'
import MenuList from './pages/Search'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<GuardRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/user/" element={<Register />} />
        </Route>
        <Route element={<GuardRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/auth/login" element={<Login />} />
        </Route>
        <Route path="/menu" element={<MenuList />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
