import React from 'react'
import { IContent } from '../types/types'
import { FaStar } from 'react-icons/fa6'

interface IMenuRankingListProps {
  menuRanking: IContent
}

const MenuRankingCard = ({ menuRanking }: IMenuRankingListProps) => {
  return (
    <div className="card relative w-full h-full bg-base-100 shadow-xl overflow-hidden transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150">
      <figure className="h-[70%]">
        <img className="w-full h-full object-cover" src={menuRanking.menu_image_url} alt="img-menu" />
      </figure>
      <div className="card-body flex justify-center items-center bg-white h-[30%]">
        <h2 className="card-title text-center">{menuRanking.menu_name}</h2>
        <div className="badge badge-secondary absolute top-[10px] right-[10px] bg-white shadow-xl border-none py-[14px] px-[14px] gap-[6px]">
          <FaStar className="text-orange" />
          <p className="text-black">({menuRanking.average_rating})</p>
        </div>
      </div>
    </div>
  )
}

export default MenuRankingCard
