import React from 'react'
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import GuardRoute from './guards/GuardRoute'
import { useAuth } from './providers/AuthProviders'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<GuardRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/user/" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
      <Register />
    </div>
  )
}

export default App
