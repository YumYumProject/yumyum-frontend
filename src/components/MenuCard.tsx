import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import { IContent } from '../types/types'

interface MenuCardProps {
  menu: IContent
}

const MenuCard = ({ menu }: MenuCardProps) => {
  return (
    <Link
      className="box-content w-full h-[400px]  bg-white/90 rounded-2xl flex flex-col justify-end items-center transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 border-4 hover:border-[#FFA559] hover:shadow-[#FFA559]/50"
      to={`/menu/${menu._id}`}
    >
      {/* <div className="box-content w-full h-full  overflow-auto items-center"> */}
      <img
        className="box-content w-full h-full object-cover overflow-hidden items-center rounded-t-[12px]"
        src={menu.menu_image_url}
        alt="img-menu"
      />
      {/* </div> */}
      <div className="w-full flex flex-col items-center gap-1 py-6">
        <p className="font-bold text-[18px]">{menu.menu_name}</p>
        <ReactStars
          key={menu.average_rating}
          value={menu.average_rating}
          count={5}
          size={24}
          color2="orange"
          edit={false}
        />
      </div>
      {/* <div className="transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-full h-[100px] rounded-b-2xl  bg-white/60 border-2 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] py-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl"></div> */}
    </Link>
    // <Link className="box-content w-full h-[400px] flex flex-col justify-end items-center" to={`/menu/${menu._id}`}>
    //   <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[320px] h-[100px] rounded-xl border-white/80 bg-white/60 border-2 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
    //     <div className="absolute bottom-[85px] box-content w-[300px] h-[300px] rounded-2xl overflow-auto items-center drop-shadow-xl">
    //       <img className="w-full h-full  object-cover" src={menu.menu_image_url} alt="img-menu" />
    //     </div>
    //     <div className="flex flex-col items-center gap-1">
    //       <p className="font-bold text-[18px]">{menu.menu_name}</p>
    //       <ReactStars
    //         key={menu.average_rating}
    //         value={menu.average_rating}
    //         count={5}
    //         size={24}
    //         color2="orange"
    //         edit={false}
    //       />
    //     </div>
    //   </div>
    // </Link>
  )
}

export default MenuCard
