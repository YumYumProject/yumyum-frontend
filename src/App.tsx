import React from 'react'
import './App.css'
import Sample from './pages/sample'
import { Route, Routes } from 'react-router-dom'
import Search from './pages/Search'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/sample" element={<Sample />} />
        <Route path="/menu" element={<Search />} />
      </Routes>

      {/* <Toaster position="top-center" />
      <Search /> */}
    </>
  )
}

export default App
