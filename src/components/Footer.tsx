import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="w-full bg-white/90">
      <footer className="footer max-w-[1440px] h-auto mx-auto px-[16px] py-[20px] flex justify-between items-end">
        <p className="font-bold text-[18px]  drop-shadow-lg">&copy; 2023 EazyEat</p>
        <div className="flex flex-col gap-[20px]">
          <div>
            <p className="font-bold text-[18px]  drop-shadow-lg">ติดต่อเรา</p>
            <p className=" ">
              Cleverse Corporation Co., Ltd.
              <br /> 44/1 Rungrojthanakul 16-storied building, 13th Floor,
              <br /> Ratchadaphisek Road, Huai Khwang Sub-district,
              <br /> Huai Khwang District, Bangkok 10310
            </p>
          </div>
          <div className="social flex item-center gap-6">
            <a href="https://www.facebook.com/">
              <FaFacebook className="font-bold text-[24px]  hover:text-[#FF8C32] drop-shadow-lg" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram className="font-bold text-[24px]  hover:text-[#FF8C32] drop-shadow-lg" />
            </a>
            <a href="https://twitter.com/">
              <FaTwitter className="font-bold text-[24px]  hover:text-[#FF8C32] drop-shadow-lg" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
