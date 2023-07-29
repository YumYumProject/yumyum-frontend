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
    <div className="w-full h-full bg-registerBg bg-cover">
      <div className="box-content bg-white w-full h-[50px] rounded-b-[100%] drop-shadow-lg" />
      <div className="w-full h-screen backdrop-blur-sm">
        <div className="box-content max-w-[1440px] mx-auto flex items-center ">
          <div className="form-container w-full h-auto rounded-[20px] bg-white/50 my-[60px] p-[40px]">
            <p className="w-full mb-[60px] text-[40px] text-center text-orange">
              &ldquo; ยินดีต้อนรับเข้าสู่ EazyEat &rdquo;
            </p>
            <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="displayname">
                  ชื่อ:
                </label>
                <input
                  className="block w-[620px] border border-white/90 bg-white/90 text-[16px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] focus:bg-white/90 drop-shadow-lg"
                  type="text"
                  id="displayname"
                  value={displayNameInput}
                  onChange={(e) => setDisplayNameInput(e.target.value)}
                  placeholder="ชื่อ..."
                  required
                />
              </div>
              <div>
                <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="username">
                  ชื่อผู้ใช้:
                </label>
                <input
                  className="block w-[620px] border border-white/90 bg-white/90 text-[16px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] focus:bg-white/90 drop-shadow-lg"
                  type="text"
                  id="username"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="ชื่อผู้ใช้..."
                  required
                />
              </div>
              <div>
                <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="password">
                  รหัสผ่าน:
                </label>
                <input
                  className="block w-[620px] border border-white/90 bg-white/90 text-[16px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] focus:bg-white/90 drop-shadow-lg"
                  type="password"
                  id="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="รหัสผ่าน..."
                  required
                />
              </div>
              <div>
                <button
                  className="text-[16px] font-medium px-5 py-2.5 mt-[20px] text-white rounded-full drop-shadow-xl hover:text-xl bg-gradient-to-r from-[#fea622] to-[#d0e03c]  
                        hover:from-[#c1f31f] hover:to-[#4ccf20]"
                  type="submit"
                >
                  สมัครสมาชิก
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center pt-[30px]">
              <div className="inline-flex gap-[15px]">
                <p>คุณมีบัญชีแล้วใช่ไหม?</p>
                <Link to={'/auth/login'}>
                  <button className="text-[#382b98] italic hover:text-orange">เข้าสู่ระบบ</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-0 box-content bg-white w-full h-[50px] rounded-t-[100%]" />
    </div>
  )
}

export default Register
