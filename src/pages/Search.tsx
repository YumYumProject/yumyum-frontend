import { FormEvent, useState } from 'react'
import { toast } from 'react-hot-toast'
import { host } from '../constant'
import { Loading } from '../components/Loading'
import { HealthyConcern, Nationality, Process } from '../types/types'
import MenuCard from '../components/MenuCard'
import useContentList from '../hooks/useContentList'
import { GiFruitBowl } from 'react-icons/gi'
import { MdSoupKitchen } from 'react-icons/md'
import { BiSolidFlagAlt } from 'react-icons/bi'
import { TbMilkOff } from 'react-icons/tb'
import { PiHeartbeatFill } from 'react-icons/pi'

const Search = () => {
  const { contentList, setContentList, isLoading, error } = useContentList()
  const [filterMaterial, setFilterMaterial] = useState<string>('')
  const [filterProcess, setFilterProcess] = useState<string>('All')
  const [filterNationality, setFilterNationality] = useState<string>('All')
  const [filterHealthyConcern, setHealthyConcern] = useState<string>('')
  const [filterFoodAllergen, setFoodAllergen] = useState<string>('')

  const handleFilter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(filterMaterial, filterProcess, filterNationality, filterHealthyConcern, filterFoodAllergen)

    try {
      const res = await fetch(
        `${host}/menu?material=${filterMaterial}&process=${filterProcess}&nationality=${filterNationality}&healthy_concern=${filterHealthyConcern}&food_allergen=${filterFoodAllergen}`,
      )

      const data = await res.json()

      setContentList(data)

      if (filterFoodAllergen === filterMaterial) {
        toast.error('ไม่พบเมนูที่คุณค้นหา')
      } else if (data.length === 0) {
        toast.error('ไม่พบเมนูที่คุณค้นหา')
      } else {
        toast.success('เลือกเมนูกันเลย!')
      }
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  if (isLoading) return <Loading />
  if (error || !contentList) return <p>{error}</p>

  return (
    <div className="w-full h-full bg-searchBg bg-cover">
      <div className="w-full h-full backdrop-blur-sm">
        <div className="max-w-[1280px] mx-auto px-[16px] box-content flex flex-col justify-center items-center gap-y-5">
          <div className="form-container w-full h-auto mt-[30px] box-content py-[32px]">
            <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleFilter}>
              <div>
                <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="material">
                  <GiFruitBowl className="font-bold text-[24px] text-orange drop-shadow-lg" />
                  วัตถุดิบ:
                </label>
                <input
                  className="block w-[620px] border border-white/90 bg-white/90 text-[14px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] focus:bg-white/90 drop-shadow-lg"
                  type="text"
                  id="material"
                  value={filterMaterial}
                  onChange={(e) => setFilterMaterial(e.target.value)}
                  placeholder="วัตถุดิบของคุณ..."
                  required
                />
              </div>
              <div className="flex justify-evenly gap-5">
                <div>
                  <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="process">
                    <MdSoupKitchen className="font-bold text-[24px] text-orange drop-shadow-lg" />
                    วิธีการ:
                  </label>
                  <select
                    className="block w-[300px] border border-white/80 bg-white/90 text-[14px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] focus:bg-white/90 drop-shadow-lg"
                    value={filterProcess}
                    id="process"
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
                <div>
                  <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="nationality">
                    <BiSolidFlagAlt className="font-bold text-[24px] text-orange drop-shadow-lg" />
                    สัญชาติอาหาร:
                  </label>
                  <select
                    className="block w-[300px] border border-white/80 bg-white/90 text-[14px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] focus:bg-white/90 drop-shadow-lg"
                    value={filterNationality}
                    id="nationality"
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
              </div>

              <div className="flex justify-evenly gap-5">
                <div>
                  <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="food-allergen">
                    <TbMilkOff className="font-bold text-[24px] text-orange drop-shadow-lg" />
                    อาหารที่แพ้:
                  </label>
                  <input
                    className="block w-[300px] border border-white/80 bg-white/90 text-[14px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] focus:bg-white/90 drop-shadow-lg"
                    type="text"
                    id="food-allergen"
                    value={filterFoodAllergen}
                    onChange={(e) => setFoodAllergen(e.target.value)}
                    placeholder="ไม่มี"
                  />
                </div>
                <div>
                  <label className="flex gap-2 mb-2 text-[16px] font-medium" htmlFor="healthy-concern">
                    <PiHeartbeatFill className="font-bold text-[24px] text-orange drop-shadow-lg" />
                    สุขภาพที่กังวล:
                  </label>
                  <select
                    className="block w-[300px] border border-white/80 bg-white/90 text-[14px] rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] focus:bg-white/90 drop-shadow-lg"
                    value={filterHealthyConcern}
                    id="healthy-concern"
                    onChange={(e) => setHealthyConcern(e.target.value)}
                  >
                    <option value="">ไม่มี</option>
                    <option value={HealthyConcern.Diabetes}>เบาหวาน</option>
                    <option value={HealthyConcern.Pressure}>ความดัน</option>
                    <option value={HealthyConcern.Heart}>หัวใจ</option>
                    <option value={HealthyConcern.Kidney}>ไต</option>
                    <option value={HealthyConcern.Fat}>อ้วน</option>
                    <option value={HealthyConcern.WeightLoss}>ลดน้ำหนัก</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="text-[16px] font-medium px-5 py-2.5 mt-[20px] rounded-full text-white drop-shadow-sm bg-[#FF9642] hover:bg-[#7dac59]"
                  type="submit"
                >
                  ค้นหาเมนู
                </button>
              </div>
            </form>
          </div>
          <hr className="w-full border-1 border-orange" />
          <div className="menu-list max-w-[1280px] h-auto grid grid-cols-4 justify-items-center box-content gap-x-[20px] gap-y-[50px] px-[60px] py-[60px] mt-[32px] mb-[50px] rounded-[20px] bg-white/50 ">
            {contentList.length === 0 ? (
              <p className="text-[14px] flex justify-center items-center mx-auto">ไม่พบข้อมูลที่คุณค้นหา</p>
            ) : (
              <>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <>
                    {contentList.map((menu) => (
                      <MenuCard key={menu._id} menu={menu} />
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
