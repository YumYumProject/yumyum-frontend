import React from 'react'
import { FaRegCopyright, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-[#D6D3D1]/90 w-screen">
      <footer className="flex justify-between  px-[160px] py-[48px]">
        <div className="copyright flex justify-center item-center gap-2">
          <div>
            <FaRegCopyright className="font-black text-2xl text-white drop-shadow-md" />
          </div>

          <p className="font-black text-lg text-white drop-shadow-md">2023 EazyEat</p>
        </div>
        <div className="social flex gap-6">
          <a href="#">
            <FaFacebook className="font-black text-2xl text-white hover:text-[#FF8C32] drop-shadow-md" />
          </a>
          <a href="#">
            <FaInstagram className="font-black text-2xl text-white hover:text-[#FF8C32] drop-shadow-md" />
          </a>
          <a href="#">
            <FaTwitter className="font-black text-2xl text-white hover:text-[#FF8C32] drop-shadow-md" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
