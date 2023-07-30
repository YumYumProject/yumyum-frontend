import { useState, FormEvent } from 'react'
import { useAuth } from '../providers/AuthProviders'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [usernameInput, setUsernameInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await login(usernameInput, passwordInput)

      navigate('/')
      toast.success('Login success!')
    } catch (err) {
      console.log(`${err}.message`)
    }
  }

  return (
    <div className="h-[700px] max-w-[1440px] min-w-full bg-center bg-local bg-cover bg-loginBg">
      <div className="h-[700px] flex justify-center items-center">
        <main className="bg-gradient-to-r from-zinc-50/70 to-slate-700/70 h-[400px] w-[500px] rounded-[35px] drop-shadow-2xl grid justify-items-center py-[4%] gap-5">
          <p className="font-bold text-[30px] text-black">Welcome Back!</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                className="h-[32px] w-[400px] rounded-[50px] p-[2.5%] bg-white/80"
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
                className="h-[32px] w-[400px] rounded-[50px] p-[2.5%] bg-white/80"
                required
              />
            </div>
            <div className="flex justify-center my-3">
              <button
                type="submit"
                value="submit"
                className="bg-[#FF9642] h-[50px] w-[150px] rounded-[50px] drop-shadow-xl focus:bg-white"
              >
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
