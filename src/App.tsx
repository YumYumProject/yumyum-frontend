import React from 'react'
import './App.css'
import Sample from './pages/sample'
import { Route, Routes } from 'react-router-dom'
import Search from './pages/Search'
import { Toaster } from 'react-hot-toast'
import IndividualMenu from './pages/IndividualMenu'
import CreateReview from './pages/CreateReview'
import EditReview from './pages/EditReview'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Review from './pages/Review'

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/sample" element={<Sample />} />
        <Route path="/menus" element={<Search />} />
        <Route path="/menu/:_id" element={<IndividualMenu />} />
        <Route path="/create" element={<CreateReview />} />
        <Route path="/create/:_id" element={<Review />} />
        <Route path="/edit" element={<EditReview />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
