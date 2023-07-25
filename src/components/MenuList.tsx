import React from 'react'
import MenuCard from './MenuCard'
import { Loading } from './Loading'
import useContentList from '../hooks/useContentList'

const MenuList = () => {
  const { contentList, isLoading, error } = useContentList()

  if (isLoading) return <Loading />
  if (error || !contentList) return <p>{error}</p>

  return (
    <div>
      <div className="menu-list grid grid-cols-4 justify-items-center box-content h-auto w-[1120px] gap-x-10 gap-y-16 p-6 border-2 border-[#D6D3D1]/50 bg-gradient-to-r from-[#D6D3D1]/80 to-[#D6D3D1]/60 rounded-3xl">
        {contentList.map((menu) => (
          <MenuCard key={menu._id} menu={menu} />
        ))}
      </div>
    </div>
  )
}

export default MenuList
