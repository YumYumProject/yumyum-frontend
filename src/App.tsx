import './App.css'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import GuardRoute from './guards/GuardRoute'
import { useAuth } from './providers/AuthProviders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeTest from './pages/Home copy'
import { ToastContainer } from 'react-toastify'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<HomeTest />} />
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
