import React from 'react'
import useMenuList from '../hooks/useMenuList'
import { Link } from 'react-router-dom'
import MenuCard from './MenuCard'
import { Loading } from './Loading'

const MenuList = () => {
  //   const { setIsLoading } = useAuth()
  const { menuList, isLoading, error } = useMenuList()

  if (isLoading) return <Loading />

  if (error || !menuList) return <p>{error}</p>

  return (
    <div>
      <Link to={`/menu`}>yyy</Link>
      <div className="menu-list flex flex-wrap justify-around box-content h-auto w-[1120px] gap-x-10 gap-y-16 p-6 border-2 border-stone-200/50 bg-gradient-to-r from-stone-300/80 to-stone-300/60 rounded-3xl">
        {menuList.map((menu) => (
          <MenuCard key={menu.id} menu={menu} />
        ))}
      </div>
    </div>
  )
}

export default MenuList
