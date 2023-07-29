import React from 'react'
import { useNavigate } from 'react-router-dom'

// link login,logout + register
// bg full image
// 1 container for all main home subject
// 3 inner containers horizontal : header, details, button

// example for image upper container className='relative -right-6 -top-40'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    return navigate(`/menu`)
  }

  // แก้พื้นหลัง หาบีจีฟรีมาใส่แทนให้เหมือนกันทุกหน้า
  // หน้าโฮมเอารูปอาหารมาเล่น ทำเป็นรูปสไลด์ feel like banner
  // สร้างช่องอธิบายเพิ่มว่าเราทำอะไรได้บ้าง
  // ข้อความบนๆก็ใส่พวกคีย์เวิร์ดหลักสำคัญ แล้วลิ้งกับสิ่งที่เราสร้างบรรทัด 22

  // bg-gradient-to-r from-red-50/50 to-zinc-500/20 rounded-[35px]

  return (
    <div>
      <div className="bg-top bg-scroll bg-cover bg-testH1 h-[600px] w-auto">
        <div className="flex justify-center">
          <main className="h-[880px] w-auto my-10 ml-[500px] grid justify-items-center">
            <header className="box-border h-auto w-[650px] ml-[90%] my-[25%] gap-[2px] items-center">
              <h3 className="text-[38px] font-bold">เลือกเมนูตามใจคุณกับ EazyEat</h3>
              <h3 className="text-[28px]">จากวัตถุดิบในครัว สู่อาหารจานพิเศษที่คัดสรรมาเพื่อคุณ</h3>
              <button
                type="button"
                onClick={handleClick}
                className="box-border h-[50px] w-[150px] text-white text-[18px] font-bold p-[2px] my-5 rounded-[50px]
                bg-[#FF9642] hover:bg-[#7dac59] drop-shadow-xl"
              >
                เริ่มกันเลย!!
              </button>
            </header>
          </main>
        </div>
      </div>
      <section>
        <main className="bg-[#f0f0f0]/30 h-[600px] w-auto grid justify-items-start">
          <div className="flex flex-row-reverse">
            <img
              src="assets\img\pexels-steve-3789885.jpg"
              className="h-[450px] w-[500px] my-[4%] mr-[1%] drop-shadow-2xl"
            />
            <div className="ml-[6%]">
              <h1 className=" mt-[9%] mb-[5%] ml-[6%] text-[40px] font-bold text-[#000000]">เกี่ยวกับเรา</h1>
              <header className="h-[500px] w-[1240px] mx-[6%] items-center">
                <span className="flex flex-inline text-[#000000] text-[22px] items-center">
                  <p>
                    <h5 className="text-[30px] font-bold">ยินดีต้อนรับเข้าสู่ EazyEat!!</h5>
                    <br />
                    หากคุณต้องการ เลือกสรรเมนูที่ชอบ วัตถุดิบที่ใช่ เราช่วยคุณได้
                    <br />
                    มาทำให้การเลือกเมนูอาหารง่ายขึ้นแบบอีซี่ๆ เราใส่ใจทุกกระบวนการเลือกสรร
                    <br />
                    แม้ว่าคุณจะแพ้อาหารประเภทใด ปัญหาสุขภาพแบบไหน วางใจ EazyEat คัดสรรอาหารจานพิเศษด้วยใจมาเพื่อคุณ
                    <br />
                    มาทำให้มื้ออาหารของคุณเต็มไปด้วยความสุขที่ดีที่สุดที่ EazyEat
                  </p>
                </span>
              </header>
            </div>
          </div>
        </main>
      </section>
      <main className="bg-center bg-scroll bg-cover bg-testH2 h-[600px] w-auto flex justify-end flex-col gap-[50px]">
        <h1 className="my-10 ml-[57%] text-[48px] font-bold text-[#ffffff]">เลือกสรรเมนูกับ EazyEat</h1>
        <div className="flex justify-end mb-[2%] mr-[2%]">
          <section className="box-border h-[260px] w-[260px] rounded-[30px] bg-red-50/60 p-10 border-1 m-10 grid grid-cols-1 gap-1 justify-items-center content-end">
            <img src="/assets/img/image-home-prepare.png" className="mb-[41px]" />
            <div className="grid justify-items-center mb-[2%]">
              <h3 className="text-[34px] font-bold text-[#000000]">จัดเตรียม</h3>
              <p className="text-[20px] text-[#000000]/80">วัตถุดิบให้พร้อม</p>
            </div>
          </section>
          <section className="box-border h-[260px] w-[260px] rounded-[30px] bg-red-50/60 p-10 border-1 m-10 grid grid-cols-1 gap-1 justify-items-center content-end">
            <img src="/assets/img/image home-select.png" className="mb-[41px]" />
            <div className="grid justify-items-center mb-[2%]">
              <h3 className="text-[34px] font-bold text-[#000000]">เลือกดู</h3>
              <p className="text-[20px] text-[#000000]/80">เมนูได้ตามใจชอบ</p>
            </div>
          </section>
          <section className="box-border h-[260px] w-[260px] rounded-[30px] bg-red-50/60 p-10 border-1 m-10 grid grid-cols-1 gap-1 justify-items-center content-end">
            <img src="/assets/img/image home-enjoy.png" className="mb-[34px] ml-[90px]" />
            <div className="grid justify-items-center mb-[2%]">
              <h3 className="text-[34px] font-bold text-[#000000]">สนุกสนาน</h3>
              <p className="text-[20px] text-[#000000]/80">ไปกับการทำอาหาร</p>
            </div>
          </section>
        </div>
      </main>
      <main className="h-[700px] w-auto flex items-center flex-col">
        <h1 className="mt-10 text-[48px] font-bold text-[#0000000]">POPULAR MENU</h1>
        <div className="flex justify-center">
          <section className="box-border h-[460px] w-[380px] rounded-[30px] bg-[#e3bb1d] p-7 border-1 m-10 grid grid-cols-1 gap-1 justify-items-center content-end">
            <img src="/assets/img/pop1.jpg" className="mb-[10px] h-[320px] w-auto" />
            <div className="grid justify-items-center mb-[2%]">
              <h3 className="text-[30px] font-bold text-[#000000]">Menu name</h3>
              <p className="text-[20px] text-[#000000]/80">Rating</p>
            </div>
          </section>
          <section className="box-border h-[460px] w-[380px] rounded-[30px] bg-[#e3bb1d] p-7 border-1 m-10 grid grid-cols-1 gap-1 justify-items-center content-end">
            <img src="/assets/img/pop2.jpg" className="mb-[10px] h-[320px] w-auto" />
            <div className="grid justify-items-center mb-[2%]">
              <h3 className="text-[30px] font-bold text-[#000000]">Menu name</h3>
              <p className="text-[20px] text-[#000000]/80">Rating</p>
            </div>
          </section>
          <section className="box-border h-[460px] w-[380px] rounded-[30px] bg-[#e3bb1d] p-7 border-1 m-10 grid grid-cols-1 gap-1 justify-items-center content-end">
            <img src="/assets/img/pop3.jpg" className="mb-[10px] h-[320px] w-auto" />
            <div className="grid justify-items-center mb-[2%]">
              <h3 className="text-[30px] font-bold text-[#000000]">Menu name</h3>
              <p className="text-[20px] text-[#000000]/80">Rating</p>
            </div>
          </section>
        </div>
      </main>
      <div className="bg-center bg-scroll bg-cover bg-testH3 h-[900px] w-auto py-5">
        <div className="grid justify-items-center">
          <h3 className="text-[38px] font-bold my-5">GALLERY</h3>
          <div className="bg-red-50/60 h-[700px] w-[1000px] grid justify-items-center items-center rounded-[30px]">
            <img src="/assets/img/gallery.jpg" className="h-[550px] w-[760px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
