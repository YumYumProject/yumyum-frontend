import React from 'react'
import { FaRegCopyright, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-between  px-[10rem] py-[3rem]">
        <div className="copyright flex justify-center item-center font-bold">
          <p>
            <FaRegCopyright />
          </p>
          <p>2023 EazyEat</p>
        </div>
        <div className="social flex">
          <a href="#">
            <FaFacebook className="text-xl text-orange-300" />
          </a>
          <a href="#">
            <FaInstagram className="text-xl text-orange-300" />
          </a>
          <a href="#">
            <FaTwitter className="text-xl text-orange-300" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
