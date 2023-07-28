import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import GuardRoute from './guards/GuardRoute'
import CreateComment from './pages/CreateComment'
import EditComment from './pages/EditComment'
import Home from './pages/Home'
import IndividualMenu from './pages/IndividualMenu'
import Login from './pages/Login'
import Register from './pages/Register'
import Sample from './pages/Sample'
import { default as Search } from './pages/Search'
import { useAuth } from './providers/AuthProviders'

function App() {
  const { isLoggedIn } = useAuth()

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
        <Route path="/" element={<Home />} />
        <Route element={<GuardRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/user/" element={<Register />} />
        </Route>
        <Route element={<GuardRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/auth/login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
