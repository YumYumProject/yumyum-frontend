import React from 'react'
import './App.css'
import Sample from './pages/sample'
import { Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Toaster position="top-center" />
      <Routes>
        <Route path="/sample" element={<Sample />} />
        <Route path="/menus" element={<Search />} />
      </Routes>
    </>
  )
}

export default App
