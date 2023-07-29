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

      toast.success('เลือกเมนูกันเลย!')
    } catch (err: any) {
      toast.error(err.message)
    }
  }

  if (isLoading) return <Loading />
  if (error || !contentList) return <p>{error}</p>

  return (
    <div className="w-full h-full bg-searchBg2 bg-cover">
      <div className="max-w-[1440px] mx-auto px-[16px] box-content flex flex-col justify-center items-center gap-y-5">
        <div className="form-container w-full h-auto mt-[30px] box-content py-[32px]">
          <form className="flex flex-col justify-center items-center gap-5" onSubmit={handleFilter}>
            {/* <div className="w-72">
              <div className='relative h-10 w-full min-w-[200px]"'>
                <input
                  className="peer h-full w-full rounded-full border border-white/80 border-t-white/80 focus:ring-transparent bg-white/60 px-3 py-2.5 text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-white/80 placeholder-shown:border-t-white/80 focus:border-2 focus:border-borderInput focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-white/80"
                  placeholder=" "
                  type="text"
                  id="material"
                  value={filterMaterial}
                  onChange={(e) => setFilterMaterial(e.target.value)}
                  required
                />
                <label
                  className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white/80 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white/80 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-borderInput peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-borderInput peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-borderInput peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                  htmlFor="material"
                >
                  <GiFruitBowl className="font-bold text-[24px] text-orange drop-shadow-lg" />
                  วัตถุดิบ:
                </label>
              </div>
            </div> */}
            <div>
              <label className="flex gap-2 mb-2 text-[18px] font-medium" htmlFor="material">
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
                <label className="flex gap-2 mb-2 text-[18px] font-medium" htmlFor="process">
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
                <label className="flex gap-2 mb-2 text-[18px] font-medium" htmlFor="nationality">
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
                <label className="flex gap-2 mb-2 text-[18px] font-medium" htmlFor="food-allergen">
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
                <label className="flex gap-2 mb-2 text-[18px] font-medium" htmlFor="healthy-concern">
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
                className="font-medium text-[18px] px-5 py-2.5 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full drop-shadow-xl"
                type="submit"
              >
                ค้นหาเมนู
              </button>
            </div>
          </form>
        </div>
        <hr className="w-full border-1 border-orange" />
        <div className="menu-list max-w-[1440px] h-auto grid grid-cols-4 justify-items-center box-content gap-x-[20px] gap-y-[50px] px-[60px] py-[60px] mt-[32px] mb-[50px] rounded-[20px] bg-white/50 ">
          {!contentList ? (
            <p>ไม่พบข้อมูลที่คุณค้นหา</p>
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
  )
}

export default Search
