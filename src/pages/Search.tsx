import React, { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import { host } from '../constant'
import { Loading } from '../components/Loading'
import { Nationality, Process } from '../types/types'
import MenuCard from '../components/MenuCard'
import useContentList from '../hooks/useContentList'

const Search = () => {
  const { contentList, setContentList, isLoading, error } = useContentList()
  const [searchMaterial, setSearchMaterial] = useState<string>('')
  const [filterProcess, setFilterProcess] = useState<string>('All')
  const [filterNationality, setFilterNationality] = useState<string>('All')

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(searchMaterial, filterProcess, filterNationality)

    try {
      const res = await fetch(
        `${host}/menu?material=${searchMaterial}&process=${filterProcess}&nationality=${filterNationality}`,
      )
      const data = await res.json()

      setContentList(data)

      toast.success('เลือกเมนูกันเลย!')
    } catch (err) {
      alert(err)
    }
  }

  if (isLoading) return <Loading />

  if (error || !contentList) return <p>{error}</p>

  return (
    <div className="w-full h-full bg-searchBg bg-cover">
      <div className="box-content flex flex-col justify-center items-center gap-y-5 backdrop-blur-sm">
        <div className="form-container w-[1440px] h-auto box-content py-8 border-2 border-[#D6D3D1]/50 bg-gradient-to-r from-[#D6D3D1]/80 to-[#D6D3D1]/60 rounded-3xl">
          <form className="flex justify-evenly gap-2" onSubmit={handleSearch}>
            <div className="flex flex-col">
              <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="material">
                วัตถุดิบ:
              </label>
              <input
                className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
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
                className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
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
                className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
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
              <button
                className="font-medium text-base px-5 py-2.5 mb-2 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full drop-shadow-xl"
                type="submit"
              >
                ค้นหาเมนู
              </button>
            </div>
          </form>
        </div>
        <div className="menu-list w-[1440px] h-auto grid grid-cols-4 justify-items-center box-content gap-x-10 gap-y-16 p-6 border-2 border-[#D6D3D1]/50 bg-gradient-to-r from-[#D6D3D1]/80 to-[#D6D3D1]/60 rounded-3xl">
          {contentList.map((menu) => (
            <MenuCard key={menu._id} menu={menu} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search
