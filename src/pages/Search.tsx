import React, { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import useMenuList from '../hooks/useMenuList'
import { host } from '../constant'
import MenuCard from '../components/MenuCard'
import { Loading } from '../components/Loading'

const Search = () => {
  const { menuList, isLoading, error } = useMenuList()
  const [searchMaterial, setSearchMaterial] = useState('')
  const [filterProcess, setFilterProcess] = useState(['All'])
  const [filterNationality, setFilterNationality] = useState(['All'])

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await fetch(`${host}/menu`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          material: searchMaterial,
          process: filterProcess,
          nationality: filterNationality,
        }),
      })
      toast.success('เลือกเมนูกันเลย!')
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  if (isLoading) return <Loading />

  if (error || !menuList) return <p>{error}</p>

  return (
    <div className="w-full h-screen bg-center bg-cover bg-searchBg flex justify-center items-center">
      <div className="box-content w-[1440px] md:w-1000 lg:w-300 h-screen flex flex-col items-center">
        <div className="flex flex-col justify-center items-center gap-y-5">
          <div className="form-search flex justify-center items-center box-content h-auto w-[600px] py-8 border-2 border-stone-200/50 bg-gradient-to-r from-stone-300/80 to-stone-300/60 rounded-3xl">
            <form onSubmit={handleSearch}>
              <div className="flex flex-col">
                <label className="text-zinc-700" htmlFor="material">
                  วัตถุดิบ:
                </label>
                <input
                  className="border rounded-full px-5 bg-white/80 w-[500px] h-[40px]"
                  type="search"
                  id="material"
                  name="material"
                  value={searchMaterial}
                  onChange={(e) => setSearchMaterial(e.target.value)}
                  placeholder="วัตถุดิบของคุณ..."
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-zinc-700" htmlFor="process">
                  วิธีการ:
                </label>
                <select
                  className=" text-zinc-700 border rounded-full px-4 bg-white/80 w-[500px] h-[40px]"
                  value={filterProcess}
                  name="process"
                  onChange={(e) => setFilterProcess(e.target.value)}
                >
                  <option value="All">ทั้งหมด</option>
                  <option value="Tom">ต้ม</option>
                  <option value="Pad">ผัด</option>
                  <option value="Tod">ทอด</option>
                  <option value="Aob">อบ</option>
                  <option value="Nung">นึ่ง</option>
                  <option value="Yam">ยำ</option>
                  <option value="Yang">ย่าง</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-zinc-700" htmlFor="nationality">
                  สัญชาติ:
                </label>
                <select
                  className=" text-zinc-700 border rounded-full px-4 bg-white/80 w-[500px] h-[40px]"
                  value={filterNationality}
                  name="nationality"
                  onChange={(e) => setFilterNationality(e.target.value)}
                >
                  <option value="All">ทั้งหมด</option>
                  <option value="Thai">ไทย</option>
                  <option value="Chinese">จีน</option>
                  <option value="Japanese">ญี่ปุ่น</option>
                  <option value="Korea">เกาหลี</option>
                  <option value="Italian">อิตาเลี่ยน</option>
                </select>
              </div>
              <div className="flex justify-center items-center pt-6">
                <button
                  className="mx-[10px] flex justify-center items-center bg-orange-400 w-[100px] h-[35px] rounded-full text-white font-bold text-sm"
                  type="submit"
                >
                  ค้นหาเมนู
                </button>
              </div>
            </form>
          </div>
          <div className="menu-list flex flex-wrap justify-around box-content h-auto w-[1120px] gap-x-10 gap-y-16 p-6 border-2 border-stone-200/50 bg-gradient-to-r from-stone-300/80 to-stone-300/60 rounded-3xl">
            {menuList.map((menu) => (
              <MenuCard key={menu.id} menu={menu} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
