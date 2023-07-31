import { IContent } from '../types/types'
import ReactStars from 'react-stars'

interface IMenuRankingListProps {
  menuRanking: IContent
}

const MenuRankingCard = ({ menuRanking }: IMenuRankingListProps) => {
  return (
    <div className="card w-full h-full bg-base-100 shadow-xl overflow-hidden transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150">
      <figure className="h-[70%]">
        <img className="w-full h-full object-cover" src={menuRanking.menu_image_url} alt="img-menu" />
      </figure>
      <div className="card-body flex justify-center items-center bg-white h-[30%]">
        <h2 className="card-title text-center">{menuRanking.menu_name}</h2>
        <ReactStars
          key={menuRanking.average_rating}
          count={5}
          value={menuRanking.average_rating}
          size={24}
          color2="orange"
          edit={false}
        />
      </div>
    </div>
  )
}

export default MenuRankingCard
