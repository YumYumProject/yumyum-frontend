import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProviders'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth()
  return (
    <div className="header w-ful bg-white">
      <nav className="header-nav max-w-[1280px] h-auto mx-auto px-[16px] py-[20px] flex justify-between items-center ">
        <Link to={'/'}>
          <p className="logo font-bold text-[30px] hover:text-orange drop-shadow-sm">EazyEat</p>
        </Link>
        <div className="menu-bar flex items-center gap-6 text-[18px] font-medium drop-shadow-lg">
          <Link to={'/menu'}>
            <p className="hover:text-orange">ค้นหาเมนู</p>
          </Link>
          <div>
            {isLoggedIn ? (
              <Link to={'/'}>
                <button onClick={logout} className="hover:text-orange">
                  ออกจากระบบ
                </button>
              </Link>
            ) : (
              <div className="flex items-center gap-6">
                <Link to={'/auth/login'}>
                  <p className="hover:text-orange">เข้าสู่ระบบ</p>
                </Link>
                <Link to={'/user'}>
                  <p className="text-[16px] font-medium px-5 py-2.5 text-white rounded-full drop-shadow-sm bg-[#FF9642] hover:bg-[#7dac59]">
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
