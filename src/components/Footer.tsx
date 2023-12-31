import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <footer className="footer max-w-[1280px] h-auto mx-auto px-[16px] py-[20px] flex justify-between items-center gap-[20px]">
        <p className="text-[18px] font-medium">&copy; 2023 EazyEat</p>
        <div className="flex flex-col gap-[20px]">
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
