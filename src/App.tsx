import React from 'react'
import './App.css'
import Search from './pages/Search'
import Home from './pages/Home'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/' element={<Register />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
