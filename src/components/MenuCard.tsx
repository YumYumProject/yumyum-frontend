import React from 'react'
import { MenuDto } from '../types/types'
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars'

interface MenuCardProps {
  menu: MenuDto
}

const MenuCard = ({ menu }: MenuCardProps) => {
  return (
    <Link to={`/menu/${menu.id}`}>
      <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
        <div className="relative box-content w-[220px] h-[80px] rounded-xl bg-white/70 p-2 gap-2 flex flex-col justify-end items-center">
          <div className="absolute bottom-16 box-content w-[200px] h-[200px] border-2 rounded-2xl overflow-auto items-center">
            <img className="w-full h-full" src={menu.menu_image_url} alt="img-menu" />
          </div>
          <p className="font-bold text-xl">{menu.menu_name}</p>
          <p className="flex font-bold text-yellow-300">
            {[...Array(menu.rating).keys()].map((star) => (
              <ReactStars key={star} count={5} size={24} color2={'#ffd700'} edit={false} />
            ))}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default MenuCard
