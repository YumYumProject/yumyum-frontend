import { useState, FormEvent } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProviders'
import { toast } from 'react-toastify'
import { BiSolidShow, BiSolidHide } from 'react-icons/bi'

const Register = () => {
  const navigate = useNavigate()
  const { register, login } = useAuth()
  const [usernameInput, setUsernameInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  const [displayNameInput, setDisplayNameInput] = useState<string>('')
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  const resetForm = () => {
    setUsernameInput('')
    setPasswordInput('')
    setDisplayNameInput('')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Register completed > automatically to login page? or Homepage

    try {
      await register(displayNameInput, usernameInput, passwordInput)
      await login(usernameInput, passwordInput)

      navigate('/')
      toast.success('Register success!')
    } catch (err) {
      console.log(`${err}.message`)
    }
  }

  return (
    <div className="h-[700px] max-w-[1440px] min-w-full bg-center bg-cover bg-registerBg">
      <div className="flex justify-center content-center p-[1%]">
        <div className="bg-gradient-to-r from-gray-50/50 to-zinc-500/60 h-[660px] w-[500px] rounded-[35px] grid justify-items-center content-evenly">
          <header className="grid justify-items-center gap-5">
            <h2 className="text-[30px] font-bold">Register</h2>
            <img src="/assets/img/avartar.jpg" className="h-[150px] w-auto" />
          </header>
          <form onSubmit={handleSubmit} className="grid justify-items-center grid-cols-1 gap-4">
            <div>
              <fieldset>
                <label>
                  <p>Display name</p>
                  <input
                    type="text"
                    value={displayNameInput}
                    onChange={(e) => setDisplayNameInput(e.target.value)}
                    className="h-[32px] w-[400px] rounded-[50px] p-[2.5%]"
                    required
                  />
                </label>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <label>
                  <p>Username</p>
                  <input
                    type="text"
                    value={usernameInput}
                    onChange={(e) => setUsernameInput(e.target.value)}
                    className="h-[32px] w-[400px] rounded-[50px] p-[2.5%]"
                    required
                  />
                </label>
              </fieldset>
            </div>
            <div>
              <fieldset className="grid grid-cols-1 gap-4">
                <label className="relative">
                  <p>Password</p>
                  <input
                    type={passwordShown ? 'text' : 'password'}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className=" h-[32px] w-[400px] rounded-[50px] p-[2.5%]"
                    required
                  />
                  <button onClick={togglePassword} className="absolute h-8 right-2 text-3xl">
                    {!passwordShown ? <BiSolidShow /> : <BiSolidHide />}
                  </button>
                </label>
              </fieldset>
            </div>
            <span className="w-[100%] flex content-between justify-center gap-6 my-3">
              <div>
                <button
                  type="reset"
                  value="Reset"
                  onClick={() => resetForm()}
                  className="bg-[#432727] text-[#ffffff] h-[50px] w-[150px] rounded-[50px] drop-shadow-xl focus:bg-[#ff0000]"
                >
                  Reset
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  value="Submit"
                  className="bg-[#FF9642] h-[50px] w-[150px] rounded-[50px] drop-shadow-xl focus:bg-white"
                >
                  Register
                </button>
              </div>
            </span>
          </form>
          <div className="w-[100%] grid justify-items-center p-1">
            <div className="inline-flex gap-[15px]">
              <p>Already have an account?</p>
              <Link to={'/auth/login'}>
                <button className="text-[#382b98] italic hover:text-[#FF8C32]">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
