import React from 'react'
import Footer from '../components/Footer'
import { FaStar } from 'react-icons/fa6'
import Navbar from '../components/Navbar'

const Sample = () => {
  return (
    <div className="w-screen h-full bg-searchBg bg-cover">
      <div className="box-content flex flex-col justify-center items-center gap-y-5 backdrop-blur-sm">
        <Navbar />
        <div className="form-container w-[800px] md:w-[1000px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1440px] h-auto box-content py-8 border-2 border-[#D6D3D1]/50 bg-gradient-to-r from-[#D6D3D1]/80 to-[#D6D3D1]/60 rounded-3xl">
          <form className="flex justify-evenly gap-2">
            <div>
              <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="raw-material">
                วัตถุดิบ:
              </label>
              <input
                className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
                type="search"
                id="raw-material"
                name="raw-material"
                placeholder="วัตถุดิบของคุณ..."
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="process">
                วิธีการ:
              </label>
              <select
                className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
                name="process"
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
            <div>
              <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="nationality">
                สัญชาติ:
              </label>
              <select
                className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
                name="nationality"
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
                className="flex justify-center font-medium text-base py-2.5 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full w-[130px] drop-shadow-xl"
                type="submit"
              >
                ค้นหาเมนู
              </button>
            </div>
          </form>
        </div>

        <div className="menu-list w-[1440px] h-auto grid grid-cols-4 justify-items-center box-content gap-x-10 gap-y-16 p-6 border-2 border-[#D6D3D1]/50 bg-gradient-to-r from-[#D6D3D1]/80 to-[#D6D3D1]/60 rounded-3xl">
          <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
            <a href="#">
              <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
                  <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
            <a href="#">
              <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
                  <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
            <a href="#">
              <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
                  <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
            <a href="#">
              <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
                  <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
            <a href="#">
              <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
                  <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
            <a href="#">
              <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
                  <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
            <a href="#">
              <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                  <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
                  <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Sample
