import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProviders'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [usernameInput, setUsernameInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Login completed > automatically to Home page

    try {
      await login(usernameInput, passwordInput)

      navigate('/')
    } catch (err) {
      console.log(`${err}.message`)
    }
  }

  return (
    <div className="h-[710px] bg-center bg-fixed bg-cover bg-loginBg">
      <div className="h-[559px] flex justify-center">
        <main className="bg-gradient-to-r from-red-50/50 to-zinc-100/20 h-[400px] w-[500px] rounded-[35px] grid justify-items-center">
          <div>
            <p className="font-bold text-[30px] text-white p-12">Welcome Back!</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="grid grid-cols-1">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                className="h-[32px] w-[400px] rounded-[50px] p-[10px] bg-white/80"
                required
              />
            </div>
            <div className="grid grid-cols-1">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                id="password"
                className="h-[32px] w-[400px] rounded-[50px] p-[10px] bg-white/80"
                required
              />
            </div>
            <div className="flex justify-center">
              <button type="submit" value="submit" className="bg-white h-[50px] w-[150px] m-10 rounded-[50px]">
                Login
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

export default Login
