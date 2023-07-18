import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="flex justify-between px-[10rem] py-[3rem]">
        <div className="logo font-bold text-4xl text-white drop-shadow-md">
          <p>EazyEat</p>
        </div>
        <div className="menus flex items-center font-bold text-lg text-white drop-shadow-md">
          <a href="#" className="mx-[10px] ">
            Contact Us
          </a>
          <a href="#" className="mx-[10px]">
            Login
          </a>
          <a
            href="#"
            className="mx-[10px] flex justify-center items-center bg-orange-400 w-[100px] h-[35px] rounded-full text-white font-bold text-lg drop-shadow-md"
          >
            Register
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
