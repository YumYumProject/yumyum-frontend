import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProviders'

/* 

interface IUser extends Document {
  id: ObjectId;
  username: string;
  password: string;
  display_name: string;
}

*/

const Register = () => {
  const navigate = useNavigate()
  const { register, login } = useAuth()
  const [usernameInput, setUsernameInput] = useState<string>('')
  const [passwordInput, setPasswordInput] = useState<string>('')
  const [displayNameInput, setDisplayNameInput] = useState<string>('')

  // click to submit, then go to login page
  // user data must match with backend request
  // need useState, useEffect

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Register completed > automatically to login page? or Homepage

    try {
      await register(displayNameInput, usernameInput, passwordInput)
      await login(usernameInput, passwordInput)

      navigate('/')
    } catch (err) {
      console.log(`${err}.message`)
    }
  }

  return (
    <div className="bg-center bg-cover bg-registerBg">
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-red-50/50 to-zinc-500/20 h-auto w-[800px] rounded-[35px] grid justify-items-center">
          <header className="grid justify-items-center p-[20px]">
            <h2 className="text-[30px] font-bold p-[15px]">Register</h2>
            <img src="/assets/img/avartar.jpg" className="h-[200px] my-[15px]" />
          </header>
          <form onSubmit={handleSubmit} className="grid justify-items-center grid-cols-1 gap-[18px]">
            <div>
              <label>
                <p>Display name</p>
                <input
                  type="text"
                  value={displayNameInput}
                  onChange={(e) => setDisplayNameInput(e.target.value)}
                  className="h-[32px] w-[400px] rounded-[50px] p-[10px]"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <p>Username</p>
                <input
                  type="text"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  className="h-[32px] w-[400px] rounded-[50px] p-[10px]"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <p>Password</p>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="h-[32px] w-[400px] rounded-[50px] p-[10px]"
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              value="submit"
              className="box-border h-[50px] w-[150px] text-white text-l hover:text-xl font-bold p-[2px] m-10 rounded-[50px]
                          bg-gradient-to-r from-[#fea622] to-[#d0e03c]  
                        hover:from-[#c1f31f] hover:to-[#4ccf20]"
            >
              Register
            </button>
          </form>
          <div className="grid justify-items-center mb-[55px]">
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
