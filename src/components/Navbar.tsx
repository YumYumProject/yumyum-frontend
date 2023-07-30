import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProviders'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()

  return (
    <div className="top-0 header w-full bg-white/90 box-content ">
      <nav className="header-nav max-w-[1440px] h-auto mx-auto px-[16px] py-[20px] flex justify-between items-center ">
        <Link to={'/'}>
          <p className="logo font-bold text-[40px] hover:text-[#FF8C32] drop-shadow-lg">EazyEat</p>
        </Link>
        <div className="menu-bar flex items-center gap-6 font-bold text-[18px] drop-shadow-lg">
          <div>
            {isLoggedIn ? (
              <button onClick={logout} className="hover:text-[#FF8C32]">
                ออกจากระบบ
              </button>
            ) : (
              <div className="flex items-center gap-6">
                <Link to={'/auth/login'}>
                  <p className="hover:text-[#FF8C32]">เข้าสู่ระบบ</p>
                </Link>
                <Link to={'/user/'}>
                  <p className="font-medium text-[18px] px-5 py-2.5 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full drop-shadow-xl">
                    สมัครสมาชิก
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
