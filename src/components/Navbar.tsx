import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-[#D6D3D1]/90 w-screen">
      <nav className="flex justify-between px-[160px] py-[48px]">
        <div className="logo font-black text-[46px] text-white hover:text-[#FF8C32] drop-shadow-lg shadow-orange">
          <Link to={'/'}>
            <p>EazyEat</p>
          </Link>
        </div>
        <div className="nav-link flex items-center gap-6 font-black text-lg text-white drop-shadow-md">
          <Link to={'/contact'}>
            <p className="hover:text-[#FF8C32]">ติดต่อเรา</p>
          </Link>
          <Link to={'/login'}>
            <p className="hover:text-[#FF8C32]">เข้าสู่ระบบ</p>
          </Link>
          <Link to={'/register'}>
            <p className="text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full font-black text-lg px-5 py-2.5 drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
              ลงทะเบียน
            </p>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
