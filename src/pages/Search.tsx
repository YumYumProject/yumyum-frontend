import React, { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import { host } from '../constant'
import { Loading } from '../components/Loading'
import useMenuList from '../hooks/useMenuList'
import MenuCard from '../components/MenuCard'
import Navbar from '../components/Navbar'
import { Nationality, Process } from '../types/types'

const Search = () => {
  const { menuList, setMenuList, isLoading, error } = useMenuList()
  const [searchMaterial, setSearchMaterial] = useState<string>('')
  const [filterProcess, setFilterProcess] = useState<string>('All')
  const [filterNationality, setFilterNationality] = useState<string>('All')

  console.log('asdf')

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(searchMaterial, filterProcess, filterNationality)

    try {
      const res = await fetch(
        `${host}/menu?material=${searchMaterial}&process=${filterProcess}&nationality=${filterNationality}`,
      )
      const data = await res.json()

      setMenuList(data)

      toast.success('เลือกเมนูกันเลย!')
    } catch (err) {
      alert(err)
    }
  }

  if (isLoading) return <Loading />

  if (error || !menuList) return <p>{error}</p>

  return (
    <div className="w-full h-screen bg-center bg-cover bg-searchBg flex justify-center items-center">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="box-content w-[1440px] md:w-1000 lg:w-300 flex flex-col gap-10 items-center">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <div className="form-search flex justify-center items-center box-content h-auto w-[600px] py-8 border-2 border-[#D6D3D1]/50 bg-gradient-to-r from-[#D6D3D1]/80 to-[#D6D3D1]/60 rounded-3xl">
              <form onSubmit={handleSearch}>
                <div className="flex flex-col">
                  <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="material">
                    วัตถุดิบ:
                  </label>
                  <input
                    className="border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] w-[500px] drop-shadow-lg"
                    type="text"
                    id="material"
                    name="material"
                    value={searchMaterial}
                    onChange={(e) => setSearchMaterial(e.target.value)}
                    placeholder="วัตถุดิบของคุณ..."
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="process">
                    วิธีการ:
                  </label>
                  <select
                    className="border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] w-[500px] drop-shadow-lg"
                    value={filterProcess}
                    name="process"
                    onChange={(e) => setFilterProcess(e.target.value)}
                  >
                    <option value="All">ทั้งหมด</option>
                    <option value={Process.Tom}>ต้ม</option>
                    <option value={Process.Pad}>ผัด</option>
                    <option value={Process.Tod}>ทอด</option>
                    <option value={Process.Aob}>อบ</option>
                    <option value={Process.Nung}>นึ่ง</option>
                    <option value={Process.Yum}>ยำ</option>
                    <option value={Process.Yang}>ย่าง</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="nationality">
                    สัญชาติ:
                  </label>
                  <select
                    className="border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] w-[500px] drop-shadow-lg"
                    value={filterNationality}
                    name="nationality"
                    onChange={(e) => setFilterNationality(e.target.value)}
                  >
                    <option value="All">ทั้งหมด</option>
                    <option value={Nationality.Thai}>ไทย</option>
                    <option value={Nationality.Chinese}>จีน</option>
                    <option value={Nationality.Japanese}>ญี่ปุ่น</option>
                    <option value={Nationality.Korean}>เกาหลี</option>
                    <option value={Nationality.Italian}>อิตาเลี่ยน</option>
                  </select>
                </div>
                <div className="flex justify-center items-center pt-6">
                  <div className="relative drop-shadow-xl">
                    <div className="absolute inset-y-2 flex items-center px-5 py-2.5 mb-2">
                      <svg
                        className="w-4 h-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <button
                      className="w-[500px] text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full font-medium text-base px-5 py-2.5 mb-2"
                      type="submit"
                    >
                      ค้นหาเมนู
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="menu-list grid grid-cols-4 justify-items-center box-content h-auto w-[1120px] gap-x-10 gap-y-16 p-6 border-2 border-[#D6D3D1]/50 bg-gradient-to-r from-[#D6D3D1]/80 to-[#D6D3D1]/60 rounded-3xl">
              {menuList.map((menu) => (
                <MenuCard key={menu._id} menu={menu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
