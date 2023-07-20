import React from 'react'
import Footer from '../components/Footer'
import { FaStar } from 'react-icons/fa6'
import Navbar from '../components/Navbar'

const Sample = () => {
  return (
    <div className="w-full h-full bg-cover bg-searchBg">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="box-content w-[1440px] md:w-1000 lg:w-300 flex flex-col gap-10 items-center">
          <div className="flex flex-col justify-center items-center gap-y-5">
            <div className="form-search flex justify-center items-center box-content h-auto w-[600px] py-8 border-2 border-[#D6D3D1]/50 bg-gradient-to-r from-[#D6D3D1]/80 to-[#D6D3D1]/60 rounded-3xl">
              <form className="flex flex-col gap-2">
                <div>
                  <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="raw-material">
                    วัตถุดิบ:
                  </label>
                  <input
                    className="border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] w-[500px] drop-shadow-lg"
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
                    className="border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] w-[500px] drop-shadow-lg"
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
                    className="border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] w-[500px] drop-shadow-lg"
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
          </div>
          <div className="menu-list grid grid-cols-4 justify-items box-content h-auto w-[1120px] gap-x-10 gap-y-16 p-6 border-2 border-[#D6D3D1]/50 bg-gradient-to-r from-[#D6D3D1]/80 to-[#D6D3D1]/60 rounded-3xl">
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <a href="#">
                <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                  <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                    <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                  </div>

                  <p className="font-bold text-[#393939] text-xl">yyy</p>

                  <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </a>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <a href="#">
                <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-2 border-dashed hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                  <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                    <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                  </div>

                  <p className="font-bold text-[#393939] text-xl">yyy</p>

                  <p className="flex font-bold text-yellow-300">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </a>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <a href="#">
                <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-2 border-dashed hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                  <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                    <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                  </div>

                  <p className="font-bold text-[#393939] text-xl">yyy</p>

                  <p className="flex font-bold text-yellow-300">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </a>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <a href="#">
                <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-2 border-dashed hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                  <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                    <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                  </div>

                  <p className="font-bold text-[#393939] text-xl">yyy</p>

                  <p className="flex font-bold text-yellow-300">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </a>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <a href="#">
                <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-2 border-dashed hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                  <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                    <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                  </div>

                  <p className="font-bold text-[#393939] text-xl">yyy</p>

                  <p className="flex font-bold text-yellow-300">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </a>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <a href="#">
                <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-2 border-dashed hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                  <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                    <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                  </div>

                  <p className="font-bold text-[#393939] text-xl">yyy</p>

                  <p className="flex font-bold text-yellow-300">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </a>
            </div>
            <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
              <a href="#">
                <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-2 border-dashed hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
                  <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
                    <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
                  </div>

                  <p className="font-bold text-[#393939] text-xl">yyy</p>

                  <p className="flex font-bold text-yellow-300">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Sample
