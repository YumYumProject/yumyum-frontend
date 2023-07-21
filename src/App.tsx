import React from 'react'
import './App.css'
import Search from './pages/Search'
import Home from './pages/Home'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
