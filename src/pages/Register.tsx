import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProviders'
import { toast } from 'react-hot-toast'
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

    try {
      await register(displayNameInput, usernameInput, passwordInput)
      await login(usernameInput, passwordInput)

      resetForm()

      navigate('/')
      toast.success('สมัครสมาชิกเรียบร้อยแล้ว!')
    } catch (err) {
      console.log(`${err}.message`)
    }
  }

  return (
    <div className="w-full h-full bg-registerBg bg-cover">
      <div className="w-full h-[1000px]">
        <div className="box-content max-w-[1280px] mx-auto flex items-center">
          <div className="form-container flex flex-col w-full h-auto rounded-[20px] backdrop-blur-md bg-gradient-to-r from-gray-50/50 to-zinc-500/60 my-[60px] p-[40px]">
            <p className="w-full mb-[40px] text-[40px] text-center">&ldquo; สมัครสมาชิกกับ EazyEat &rdquo;</p>
            <img src="/assets/img/avartar.jpg" className="h-[150px] w-[140px] mx-auto rounded-[20px] mb-[20px]" />
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
              <div className="grid grid-cols-1 gap-4">
                <label className="relative grid grid-cols-1 gap-2 mb-2 text-[16px] font-medium" htmlFor="password">
                  รหัสผ่าน:
                  <input
                    className="block w-[620px] border border-white/90 bg-white/90 text-[16px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] focus:bg-white/90 drop-shadow-lg"
                    type={passwordShown ? 'text' : 'password'}
                    id="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="รหัสผ่าน..."
                    required
                  />
                  <button onClick={togglePassword} className="absolute h-[105px] right-4 text-3xl">
                    {!passwordShown ? <BiSolidShow /> : <BiSolidHide />}
                  </button>
                </label>
              </div>
              <div className="flex gap-[20px]">
                <button
                  type="reset"
                  value="Reset"
                  onClick={() => resetForm()}
                  className="text-[16px] font-medium px-5 py-2.5 mt-[20px] text-white rounded-full drop-shadow-sm w-[128px] bg-[#432727] hover:bg-[#ff0000]"
                >
                  รีเซ็ต
                </button>
                <button
                  className="text-[16px] font-medium px-5 py-2.5 mt-[20px] text-white rounded-full drop-shadow-sm w-[128px] bg-[#FF9642] hover:bg-[#7dac59]"
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
                  <button className="text-green-600 italic font-bold hover:text-[#7dac59]">เข้าสู่ระบบ</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
