import React from 'react'
import Navbar from '../components/Navbar'
import { FaStar } from 'react-icons/fa'

const MenuList = () => {
  return (
    <div className="w-full h-screen bg-center bg-cover bg-searchBg flex justify-center items-center">
      <div className="box-content w-[1440px] md:w-1000 lg:w-300 h-screen flex flex-col items-center">
        <Navbar />
        <div className="flex flex-col justify-center items-center gap-y-5">
          <div className="form-search flex justify-center items-center box-content h-auto w-[600px] py-8 border-2 border-stone-200/50 bg-gradient-to-r from-stone-300/80 to-stone-300/60 rounded-3xl">
            <form>
              <div className="flex flex-col">
                <label className="text-zinc-700" htmlFor="raw-material">
                  Raw Material:
                </label>
                <input
                  className="border rounded-full px-5 bg-white/80 w-[500px] h-[40px]"
                  type="text"
                  id="raw-material"
                  placeholder="type raw material..."
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-zinc-700" htmlFor="process">
                  Process:
                </label>
                <select
                  className=" text-zinc-700 border rounded-full px-4 bg-white/80 w-[500px] h-[40px]"
                  name="process"
                >
                  <option value="">---</option>
                  <option value="ทั้งหมด">ทั้งหมด</option>
                  <option value="ต้ม">ต้ม</option>
                  <option value="ผัด">ผัด</option>
                  <option value="ทอด">ทอด</option>
                  <option value="อบ">อบ</option>
                  <option value="นึ่ง">นึ่ง</option>
                  <option value="ยำ">ยำ</option>
                  <option value="ย่าง">ย่าง</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-zinc-700" htmlFor="nationality">
                  Nationality:
                </label>
                <select
                  className=" text-zinc-700 border rounded-full px-4 bg-white/80 w-[500px] h-[40px]"
                  name="process"
                >
                  <option value="">---</option>
                  <option value="ทั้งหมด">ทั้งหมด</option>
                  <option value="ไทย">ไทย</option>
                  <option value="จีน">จีน</option>
                  <option value="ญี่ปุ่น">ญี่ปุ่น</option>
                  <option value="เกาหลี">เกาหลี</option>
                  <option value="อิตาเลียน">อิตาเลียน</option>
                </select>
              </div>
              <div className="flex justify-center items-center pt-6">
                <button
                  className="mx-[10px] flex justify-center items-center bg-orange-400 w-[100px] h-[35px] rounded-full text-white font-bold text-sm"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="menu-list flex flex-wrap justify-around box-content h-auto w-[1120px] gap-x-10 gap-y-16 p-6 border-2 border-stone-200/50 bg-gradient-to-r from-stone-300/80 to-stone-300/60 rounded-3xl">
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <div className="relative box-content w-[220px] h-[80px] rounded-xl bg-white/70 p-2 gap-2 flex flex-col justify-end items-center">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] border-2 rounded-2xl overflow-auto items-center">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <p className="font-bold text-xl">yyy</p>
                <p className="flex font-bold text-yellow-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <div className="relative box-content w-[220px] h-[80px] rounded-xl bg-white/70 p-2 gap-2 flex flex-col justify-end items-center">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] border-2 rounded-2xl overflow-auto items-center">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <p className="font-bold text-xl">yyy</p>
                <p className="flex font-bold text-yellow-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <div className="relative box-content w-[220px] h-[80px] rounded-xl bg-white/70 p-2 gap-2 flex flex-col justify-end items-center">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] border-2 rounded-2xl overflow-auto items-center">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <p className="font-bold text-xl">yyy</p>
                <p className="flex font-bold text-yellow-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <div className="relative box-content w-[220px] h-[80px] rounded-xl bg-white/70 p-2 gap-2 flex flex-col justify-end items-center">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] border-2 rounded-2xl overflow-auto items-center">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <p className="font-bold text-xl">yyy</p>
                <p className="flex font-bold text-yellow-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <div className="relative box-content w-[220px] h-[80px] rounded-xl bg-white/70 p-2 gap-2 flex flex-col justify-end items-center">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] border-2 rounded-2xl overflow-auto items-center">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <p className="font-bold text-xl">yyy</p>
                <p className="flex font-bold text-yellow-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <div className="relative box-content w-[220px] h-[80px] rounded-xl bg-white/70 p-2 gap-2 flex flex-col justify-end items-center">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] border-2 rounded-2xl overflow-auto items-center">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <p className="font-bold text-xl">yyy</p>
                <p className="flex font-bold text-yellow-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <div className="relative box-content w-[220px] h-[80px] rounded-xl bg-white/70 p-2 gap-2 flex flex-col justify-end items-center">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] border-2 rounded-2xl overflow-auto items-center">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <p className="font-bold text-xl">yyy</p>
                <p className="flex font-bold text-yellow-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <div className="relative box-content w-[220px] h-[80px] rounded-xl bg-white/70 p-2 gap-2 flex flex-col justify-end items-center">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] border-2 rounded-2xl overflow-auto items-center">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <p className="font-bold text-xl">yyy</p>
                <p className="flex font-bold text-yellow-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <div className="relative box-content w-[220px] h-[80px] rounded-xl bg-white/70 p-2 gap-2 flex flex-col justify-end items-center">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] border-2 rounded-2xl overflow-auto items-center">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <p className="font-bold text-xl">yyy</p>
                <p className="flex font-bold text-yellow-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <div className="relative box-content w-[220px] h-[80px] rounded-xl bg-white/70 p-2 gap-2 flex flex-col justify-end items-center">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] border-2 rounded-2xl overflow-auto items-center">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <p className="font-bold text-xl">yyy</p>
                <p className="flex font-bold text-yellow-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuList
