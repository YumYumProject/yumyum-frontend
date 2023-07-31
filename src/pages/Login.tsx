import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProviders'
import { toast } from 'react-hot-toast'

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
      toast.success('เข้าสู่ระบบเรียบร้อยแล้ว!')
    } catch (err) {
      console.log(`${err}.message`)
    }
  }

  return (
    <div className="w-full h-full bg-loginBg bg-cover">
      <div className="w-full h-[1000px]">
        <div className="box-content max-w-[1280px] mx-auto flex items-center ">
          <div className="form-container w-full h-auto rounded-[20px]  backdrop-blur-md bg-gradient-to-r from-gray-50/50 to-zinc-500/60 my-[60px] p-[40px]">
            <p className="w-full mb-[40px] text-[40px] text-center">&ldquo; เข้าสู่ระบบ EazyEat &rdquo;</p>
            <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleSubmit}>
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
                  className="text-[16px] font-medium px-5 py-2.5 mt-[20px] text-white rounded-full drop-shadow-sm bg-[#FF9642] hover:bg-[#7dac59]"
                  type="submit"
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center pt-[30px]">
              <div className="inline-flex gap-[15px]">
                <p>คุณยังไม่มีบัญชีใช่ไหม?</p>
                <Link to={'/user'}>
                  <button className="text-orange italic hover:text-[#7dac59]">สมัครสมาชิก</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
