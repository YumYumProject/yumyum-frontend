import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProviders'

const Navbar = () => {
  return (
    <div className="header w-full bg-gradient-to-b from-[#D6D3D1]/90">
      <nav className="header-nav max-w-[1280px] h-[80px] mx-auto px-[16px] flex justify-between tems-center">
        <Link to={'/'}>
          <p className="logo font-bold text-[40px] text-white hover:text-[#FF8C32] drop-shadow-lg">EazyEat</p>
        </Link>
        <div className="menu-bar flex items-center gap-6 font-bold text-[18px] text-white drop-shadow-lg">
          <Link to={'/contact'}>
            <p className="hover:text-[#FF8C32]">ติดต่อเรา</p>
          </Link>
          <Link to={'/auth/login'}>
            <p className="hover:text-[#FF8C32]">เข้าสู่ระบบ</p>
          </Link>
          <Link to={'/user'}>
            <p className="flex justify-center bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full w-[130px] px-5 py-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              ลงทะเบียน
            </p>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar