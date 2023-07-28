import React from 'react'
import './App.css'
import Sample from './pages/Sample'
import { Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import { Toaster } from 'react-hot-toast'
import IndividualMenu from './pages/IndividualMenu'
import EditComment from './pages/EditComment'
import CreateComment from './pages/CreateComment'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/sample" element={<Sample />} />
        <Route path="/menu" element={<Search />} />
        <Route path="/menu/:_id" element={<IndividualMenu />} />
        <Route path="/menu/:_id/create" element={<CreateComment />} />
        <Route path="/menu/:_id/edit/:comment_id" element={<EditComment />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
