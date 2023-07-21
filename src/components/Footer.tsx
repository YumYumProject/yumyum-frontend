import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-t from-[#D6D3D1]/90">
      <footer className="footer max-w-[1280px] h-[80px] mx-auto px-[16px] flex justify-between tems-center">
        <p className="font-bold text-[18px] text-white drop-shadow-lg">&copy; 2023 EazyEat</p>
        <div className="social flex item-center gap-6">
          <a href="#">
            <FaFacebook className="font-bold text-[24px] text-white hover:text-[#FF8C32] drop-shadow-lg" />
          </a>
          <a href="#">
            <FaInstagram className="font-bold text-[24px] text-white hover:text-[#FF8C32] drop-shadow-lg" />
          </a>
          <a href="#">
            <FaTwitter className="font-bold text-[24px] text-white hover:text-[#FF8C32] drop-shadow-lg" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer