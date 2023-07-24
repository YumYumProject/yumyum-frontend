import React from 'react'
import { FaWeightScale } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Sample = () => {
  return (
    <div className="p-[80px]">
      <div className="max-w-[1440px] mx-auto px-[16px] flex flex-col justify-center items-center backdrop-blur-sm">
        <div className="contianer-menu relative box-border w-[990px] h-[860px] flex justify-center mb-[20px]">
          <img
            className="w-full h-[660px] rounded-2xl"
            src="src/assets/img/img-spaghetti-carbonara.jpg"
            alt="img-menu"
          />

          <div className="absolute bottom-0 border-2 rounded-t-2xl bg-white w-[700px] px-[60px] pt-[60px] mt-auto mx-[145px] flex flex-col items-center">
            <div className="text-orange">
              <p className="max-h-[130px] font-black text-[58px] text-center text-ellipsis overflow-hidden leading-[60px]">
                สปาเกตตี้คาโบนาร่า
              </p>
              <div className="w-full flex justify-center items-center gap-[10px] py-[20px]">
                <FaWeightScale />
                <p>317 กิโลแคลอรี่</p>
                <Link
                  className="font-medium text-base px-5 py-2.5 mb-2 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full drop-shadow-xl"
                  to={`/menu`}
                >
                  แก้ไขความคิดเห็น
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-full border-4 mb-[50px] border-orange" />
        <div className="flex justify-center gx-[20px]">
          <div className="w-1/2]">
            <p className="font-bold text-[24px]">วัตถุดิบ</p>
            <ol>
              <li>เส้นสปาเก็ตตี้ 100 กรัม</li>
              <li>เบคอน 150 กรัม</li>
              <li>พาเมซานชีส 40 กรัม</li>
              <li>ไข่ไก่ 4 ฟอง</li>
              <li>เกลือ 1 ช้อนชา</li>
              <li>น้ำสะอาด 50 มิลลิลิตร</li>
            </ol>
          </div>
          <div className="w-1/2 pl-10">
            <p className="font-bold text-[24px]">วิธีทำ</p>
            <ol>
              <li>1 นำเบคอนมาหั่นเป็นชิ้นขนาดตามต้อมการ</li>
              <li>2 นำไข่ไก่สดมาแยกไข่แดงออกจากไข่ขาว โดยใช้เฉพาะไข่แดงอย่างเดียว 3 ฟอง และไข่ไก่ทั้งใบ 1 ฟอง</li>
              <li>3 นำพาเมซานชีสที่ขูดแล้วมาผสมกับไข่ไก่ จากนั้นใส่พริกไทย และเกลือ คนผสมให้เข้ากัน</li>
              <li>4 ต้มน้ำให้เดือด แล้วใส่เกลือลงไป จากนั้นใส่เส้นสปาเก็ตตี้ลงไปต้ม ใช้เวลาต้มประมาณ 6 นาที</li>
              <li>
                5 นำเบคอนมาผัดในกระทะจนเหลืองหอม และเริ่มมีน้ำมันออกมา จากนั้นใส่เส้นสปาก็ตตี้ที่ต้มเสร็จแล้วลงไป
                ผัดจนน้ำมันเบคอนเคลือบเส้นดี เติมน้ำเดือดที่ใช้ต้มเส้นลงไปเล็กน้อย
              </li>
              <li>6 ปิดเตาแก๊ส จากนั้นใส่ส่วนผสมของไข่และชีสลงไป แล้วคลุกเคล้าให้เข้ากับเส้นสปาเก็ตตี้</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    // <div className="w-full h-full bg-searchBg bg-cover">
    // <div>
    //   <div className="max-w-[1440px] mx-auto px-[16px] box-content flex flex-col justify-center items-center gap-y-5 backdrop-blur-sm">
    //     <div className="form-container w-full h-auto mt-[30px] box-content py-[32px] ">
    //       <form className="flex flex-col gap-2">
    //         <div className="flex justify-evenly">
    //           <div>
    //             <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="raw-material">
    //               วัตถุดิบ:
    //             </label>
    //             <input
    //               className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
    //               type="text"
    //               id="raw-material"
    //               name="raw-material"
    //               placeholder="วัตถุดิบของคุณ..."
    //               required
    //             />
    //           </div>
    //           <div>
    //             <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="process">
    //               วิธีการ:
    //             </label>
    //             <select
    //               className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
    //               name="process"
    //             >
    //               <option value="All">ทั้งหมด</option>
    //               <option value="Tom">ต้ม</option>
    //               <option value="Pad">ผัด</option>
    //               <option value="Tod">ทอด</option>
    //               <option value="Aob">อบ</option>
    //               <option value="Nung">นึ่ง</option>
    //               <option value="Yam">ยำ</option>
    //               <option value="Yang">ย่าง</option>
    //             </select>
    //           </div>
    //           <div>
    //             <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="nationality">
    //               สัญชาติ:
    //             </label>
    //             <select
    //               className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
    //               name="nationality"
    //             >
    //               <option value="All">ทั้งหมด</option>
    //               <option value="Thai">ไทย</option>
    //               <option value="Chinese">จีน</option>
    //               <option value="Japanese">ญี่ปุ่น</option>
    //               <option value="Korea">เกาหลี</option>
    //               <option value="Italian">อิตาเลี่ยน</option>
    //             </select>
    //           </div>
    //         </div>
    //         <hr className="w-full border-1 mt-[30px] border-orange" />
    //         <div>
    //           <p>ข้อมูลสุขภาพ</p>
    //           <div className="flex justify-evenly">
    //             <div>
    //               <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="food-allergen">
    //                 อาหารที่แพ้:
    //               </label>
    //               <input
    //                 className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
    //                 type="text"
    //                 id="food-allergen"
    //                 name="food-allergen"
    //                 placeholder="---"
    //               />
    //             </div>
    //             <div>
    //               <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="nationality">
    //                 สุขภาพที่กังวล:
    //               </label>
    //               <select
    //                 className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
    //                 name="healthy-concern"
    //               >
    //                 <option value="">---</option>
    //                 <option value="Diabetes">เบาหวาน</option>
    //                 <option value="Pressure">ความดัน</option>
    //                 <option value="Heart">หัวใจ</option>
    //                 <option value="Kidney">ไต</option>
    //                 <option value="Fat">อ้วน</option>
    //                 <option value="WeightLoss">ลดน้ำหนัก</option>
    //               </select>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex justify-center items-center pt-6">
    //           <button
    //             className="flex justify-center font-medium text-base py-2.5 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full w-[130px] drop-shadow-xl"
    //             type="submit"
    //           >
    //             ค้นหาเมนู
    //           </button>
    //         </div>
    //       </form>
    //     </div>

    //     {/* <hr className="border border-b-8 w-full" /> */}

    //     <div className="menu-list w-full h-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center box-content gap-x-10 gap-y-16 py-[60px] border-2 border-[#D6D3D1]/50 bg-gradient-to-r from-[#D6D3D1]/80 to-[#D6D3D1]/60 rounded-3xl">
    //       <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
    //         <a href="#">
    //           <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
    //             <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
    //               <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
    //             </div>
    //             <div className="flex flex-col items-center gap-1">
    //               <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
    //               <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //               </p>
    //             </div>
    //           </div>
    //         </a>
    //       </div>
    //       <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
    //         <a href="#">
    //           <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
    //             <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
    //               <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
    //             </div>
    //             <div className="flex flex-col items-center gap-1">
    //               <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
    //               <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //               </p>
    //             </div>
    //           </div>
    //         </a>
    //       </div>
    //       <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
    //         <a href="#">
    //           <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
    //             <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
    //               <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
    //             </div>
    //             <div className="flex flex-col items-center gap-1">
    //               <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
    //               <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //               </p>
    //             </div>
    //           </div>
    //         </a>
    //       </div>
    //       <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
    //         <a href="#">
    //           <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
    //             <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
    //               <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
    //             </div>
    //             <div className="flex flex-col items-center gap-1">
    //               <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
    //               <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //               </p>
    //             </div>
    //           </div>
    //         </a>
    //       </div>
    //       <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
    //         <a href="#">
    //           <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
    //             <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
    //               <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
    //             </div>
    //             <div className="flex flex-col items-center gap-1">
    //               <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
    //               <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //               </p>
    //             </div>
    //           </div>
    //         </a>
    //       </div>
    //       <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
    //         <a href="#">
    //           <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
    //             <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
    //               <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
    //             </div>
    //             <div className="flex flex-col items-center gap-1">
    //               <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
    //               <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //               </p>
    //             </div>
    //           </div>
    //         </a>
    //       </div>
    //       <div className="box-content w-[236px] h-[267px] flex flex-col justify-end items-center">
    //         <a href="#">
    //           <div className="relative transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-105 duration-150 box-content w-[220px] h-[80px] rounded-xl bg-white/60 border-4 shadow-lg hover:shadow-[#FFA559]/50 hover:border-[#FFA559] p-2 gap-2 flex flex-col justify-end items-center drop-shadow-xl">
    //             <div className="absolute bottom-16 box-content w-[200px] h-[200px] rounded-2xl overflow-auto items-center drop-shadow-xl">
    //               <img className="w-full h-full" src="src/assets/img/img-menu.jpg" alt="img-menu" />
    //             </div>
    //             <div className="flex flex-col items-center gap-1">
    //               <p className="font-bold text-[#454545] text-lg">ข้าวไข่ข้น</p>
    //               <p className="flex font-bold text-[#FFE05D] drop-shadow-md">
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //                 <FaStar />
    //               </p>
    //             </div>
    //           </div>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="w-full h-full bg-searchBg bg-cover">
    //   <div className="box-content flex flex-col justify-center items-center gap-y-5 backdrop-blur-sm">
    //     <div className="form-container w-[1440px] h-auto box-content py-8 border-2 border-[#D6D3D1]/50 bg-gradient-to-r from-[#D6D3D1]/80 to-[#D6D3D1]/60 rounded-3xl">
    //       <form className="flex justify-evenly gap-2" onSubmit={handleSearch}>
    //         <div className="flex flex-col">
    //           <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="material">
    //             วัตถุดิบ:
    //           </label>
    //           <input
    //             className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
    //             type="text"
    //             id="material"
    //             name="material"
    //             value={searchMaterial}
    //             onChange={(e) => setSearchMaterial(e.target.value)}
    //             placeholder="วัตถุดิบของคุณ..."
    //             required
    //           />
    //         </div>
    //         <div className="flex flex-col">
    //           <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="process">
    //             วิธีการ:
    //           </label>
    //           <select
    //             className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
    //             value={filterProcess}
    //             name="process"
    //             onChange={(e) => setFilterProcess(e.target.value)}
    //           >
    //             <option value="All">ทั้งหมด</option>
    //             <option value={Process.Tom}>ต้ม</option>
    //             <option value={Process.Pad}>ผัด</option>
    //             <option value={Process.Tod}>ทอด</option>
    //             <option value={Process.Aob}>อบ</option>
    //             <option value={Process.Nung}>นึ่ง</option>
    //             <option value={Process.Yum}>ยำ</option>
    //             <option value={Process.Yang}>ย่าง</option>
    //           </select>
    //         </div>
    //         <div className="flex flex-col">
    //           <label className="block mb-2 text-base font-medium text-[#454545]" htmlFor="nationality">
    //             สัญชาติ:
    //           </label>
    //           <select
    //             className="block w-[300px] border border-white/80 bg-white/60 text-[#454545] text-sm rounded-full focus:ring-[#FFA559] focus:border-[#FFA559] drop-shadow-lg"
    //             value={filterNationality}
    //             name="nationality"
    //             onChange={(e) => setFilterNationality(e.target.value)}
    //           >
    //             <option value="All">ทั้งหมด</option>
    //             <option value={Nationality.Thai}>ไทย</option>
    //             <option value={Nationality.Chinese}>จีน</option>
    //             <option value={Nationality.Japanese}>ญี่ปุ่น</option>
    //             <option value={Nationality.Korean}>เกาหลี</option>
    //             <option value={Nationality.Italian}>อิตาเลี่ยน</option>
    //           </select>
    //         </div>
    //         <div className="flex justify-center items-center pt-6">
    //           <button
    //             className="font-medium text-base px-5 py-2.5 mb-2 text-white bg-[#FF9642]/95 hover:bg-[#FF8C32] rounded-full drop-shadow-xl"
    //             type="submit"
    //           >
    //             ค้นหาเมนู
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //     <div className="menu-list w-[1440px] h-auto grid grid-cols-4 justify-items-center box-content gap-x-10 gap-y-16 p-6 border-2 border-[#D6D3D1]/50 bg-gradient-to-r from-[#D6D3D1]/80 to-[#D6D3D1]/60 rounded-3xl">
    //       {contentList.map((menu) => (
    //         <MenuCard key={menu._id} menu={menu} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  )
}

export default Sample