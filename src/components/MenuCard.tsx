import React from 'react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'
import { IContent } from '../types/types'

interface MenuCardProps {
  menu: IContent
}

const MenuCard = ({ menu }: MenuCardProps) => {
  return (
    <Link className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center" to={`/menu/${menu._id}`}>
      <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
        <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
          <img className="w-full h-full" src={menu.menu_image_url} alt="img-menu" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="font-bold text-[#454545] text-lg">{menu.menu_name}</p>
          <ReactStars key={menu.average_rating} count={5} size={24} color2={'#ffd700'} edit={false} />
        </div>
      </div>
    </Link>
  )
}

export default MenuCard
