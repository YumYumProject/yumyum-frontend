import { Link } from 'react-router-dom'
import { IContent } from '../types/types'
import { FaStar } from 'react-icons/fa'

interface MenuCardProps {
  menu: IContent
}

const MenuCard = ({ menu }: MenuCardProps) => {
  return (
    <Link className="w-full h-[400px]" to={`/menu/${menu._id}`}>
      <div className="card relative w-full h-full bg-base-100 shadow-xl overflow-hidden transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150">
        <figure className="h-[70%]">
          <img className="w-full h-full object-cover" src={menu.menu_image_url} alt="img-menu" />
        </figure>
        <div className="card-body flex justify-center items-center bg-white h-[30%]">
          <h2 className="card-title text-center">{menu.menu_name}</h2>
          <div className="badge badge-secondary absolute top-[10px] right-[10px] bg-white shadow-xl border-none py-[14px] px-[14px] gap-[6px]">
            <FaStar className="text-orange" />
            <p className="text-black">({menu.average_rating})</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MenuCard
