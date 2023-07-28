import React from 'react'
import { useNavigate } from 'react-router-dom'
import { host } from '../types/host'

// link login,logout + register
// bg full image
// 1 container for all main home subject
// 3 inner containers horizontal : header, details, button

// example for image upper container className='relative -right-6 -top-40'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    return navigate(`${host}/content/`)
  }

  // แก้พื้นหลัง หาบีจีฟรีมาใส่แทนให้เหมือนกันทุกหน้า
  // หน้าโฮมเอารูปอาหารมาเล่น ทำเป็นรูปสไลด์ feel like banner
  // สร้างช่องอธิบายเพิ่มว่าเราทำอะไรได้บ้าง
  // ข้อความบนๆก็ใส่พวกคีย์เวิร์ดหลักสำคัญ แล้วลิ้งกับสิ่งที่เราสร้างบรรทัด 22

  return (
    <div className="bg-center bg-fixed bg-cover bg-homeBg h-full w-auto">
      {/* <Navbar /> */}
      <div className="flex justify-center">
        <main className="bg-gradient-to-r from-red-50/50 to-zinc-500/20 container h-[880px] w-auto rounded-[35px] my-10 grid justify-items-center">
          <header className="box-border h-auto w-auto ml-[20%] mr-[20%] mb-[100px] gap-[2px] items-center">
            <span className="flex flex-inline gap-[1px] text-white items-center mt-10">
              <h2 className="text-[48px] font-bold">E</h2>
              <p className="text-[26px] pt-[17px]">azy</p>
              <h2 className="text-[48px] font-bold">E</h2>
              <p className="text-[26px] pt-[17px]">at</p>
              <p className="text-[20px] pt-[18px] pl-[17px]">คือใคร? ทำอะไร?</p>
            </span>
            <span className="flex flex-inline gap-[1px] text-white items-center">
              {/* เอาคำพูดพวกนี้ไปสร้างเป็นกล่องใหม่ แล้วสามารถลิ้งไปได้ภายในหน้า homepage */}
              <p>
                หากคุณกำลังสงสัยว่าวันนี้จะกินอะไรดี อยากกินหมูกรอบมากแต่กำลังคุมอาหาร แง จะกินอะไรแทนดีที่แคลไม่เกิน
                <br /> EazyEat ช่วยคุณได้! เราคือเว็บไซต์สำหรับคนรักในการกินที่สามารถให้คุณค้นหาเมนูที่อยากรับทานได้
                พร้อมทั้งสูตรอาหารและวัตถุดิบในแต่ละเมนู ที่สำคัญ! เรา-มี-บอก-จำนวน-แคลอรีต่อจาน!
                <br />
                ไม่ต้องกังวล หากคุณมีอาการแพ้อาหารใดๆ เพราะเรามีตัวช่วยที่สามารถคัดกรองอาหารนั้นๆออกไปได้
                รับรองว่าคุณจะได้รับเมนูที่ไม่เป็นอันตรายต่อร่างกายอย่างแน่นอน เลือกได้ว่าอยากรับทานอะไร
                ต้มผัดแกงทอดหอมอร่อยในพริบตา หรือแม้แต่สัญชาติอาหารก็มีให้เลือกจ้า จะไทย จีน ญี่ปุ่น
                หรือจะอิตาเลี่ยนก็มีจ้า
              </p>
            </span>
          </header>

          <main className="flex justify-around">
            <section className="box-border h-[260px] w-[260px] rounded-[30px] bg-red-50/60 p-10 border-1 m-10 grid grid-cols-1 gap-1 justify-items-center content-end">
              <img src="/assets/img/image-home-prepare.png" className="mb-[80px]" />
              <div className="grid justify-items-center">
                <h3 className="text-3xl font-bold text-[#64748b]">จัดเตรียม</h3>
                <p className="font-bold text-white">วัตถุดิบให้พร้อม</p>
              </div>
            </section>
            <section className="box-border h-[260px] w-[260px] rounded-[30px] bg-red-50/60 p-10 border-1 m-10 grid grid-cols-1 gap-1 justify-items-center content-end">
              <img src="/assets/img/image home-select.png" className="mb-[70px]" />
              <div className="grid justify-items-center">
                <h3 className="text-3xl font-bold text-[#64748b]">เลือกดู</h3>
                <p className="font-bold text-white">เมนูได้ตามใจชอบ</p>
              </div>
            </section>
            <section className="box-border h-[260px] w-[260px] rounded-[30px] bg-red-50/60 p-10 border-1 m-10 grid grid-cols-1 gap-1 justify-items-center content-end">
              <img src="/assets/img/image home-enjoy.png" className="mb-[60px] ml-[90px]" />
              <div className="grid justify-items-center">
                <h3 className="text-3xl font-bold text-[#64748b]">สนุกสนาน</h3>
                <p className="font-bold text-white">ไปกับการทำอาหาร</p>
              </div>
            </section>
          </main>
          <button
            type="button"
            onClick={handleClick}
            className="box-border h-[50px] w-[150px] text-white text-l hover:text-xl font-bold p-[2px] m-10 rounded-[50px]
                    bg-gradient-to-r from-[#fea622] to-[#d0e03c]  
                    hover:from-[#c1f31f] hover:to-[#4ccf20]"
          >
            เริ่มกันเลย!!
          </button>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
