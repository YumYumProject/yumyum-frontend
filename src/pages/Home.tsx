import React from 'react'
import { useNavigate } from 'react-router-dom'
import MenuRankingCard from '../components/MenuRankingCard'
import useMenuRankingList from '../hooks/useMenuRankingList'

const Home = () => {
  const navigate = useNavigate()
  const { menuRankingList } = useMenuRankingList()

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    return navigate('/menu')
  }

  // แก้พื้นหลัง หาบีจีฟรีมาใส่แทนให้เหมือนกันทุกหน้า
  // หน้าโฮมเอารูปอาหารมาเล่น ทำเป็นรูปสไลด์ feel like banner
  // bg-gradient-to-r from-red-50/50 to-zinc-500/20 rounded-[35px]

  return (
    <div className="bg-white">
      <div className="bg-top bg-scroll bg-cover bg-testH1 h-[600px] w-full flex flex-col items-center gap-[200px]">
        <div className="top-0 box-content bg-white w-full h-[50px] rounded-b-[100%] drop-shadow-lg" />
        <div className="w-[1280px] px-[16px]">
          <header className="flex flex-col justify-center items-start border-box w-[45%] mx-auto mr-0">
            <h3 className="text-[34px] font-bold">เลือกเมนูตามใจคุณกับ EazyEat</h3>
            <h3 className="text-[22px]">จากวัตถุดิบในครัว สู่อาหารจานพิเศษที่คัดสรรมาเพื่อคุณ</h3>
            <button
              type="button"
              onClick={handleClick}
              className="text-[16px] font-medium px-5 py-2.5 mt-[20px] text-white rounded-full drop-shadow-sm bg-[#FF9642] hover:bg-[#7dac59]"
            >
              เริ่มกันเลย!!
            </button>
          </header>
        </div>
      </div>
      <section className="max-w-[1280px] px-[16px] py-[30px] flex justify-around items-center mx-auto">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[34px] font-bold">เกี่ยวกับเรา</p>
          <p className="text-[24px] font-bold">ยินดีต้อนรับเข้าสู่ EazyEat!!</p>
          <p className="text-[18px]">
            หากคุณต้องการ เลือกสรรเมนูที่ชอบ วัตถุดิบที่ใช่ เราช่วยคุณได้
            <br />
            มาทำให้การเลือกเมนูอาหารง่ายขึ้นแบบอีซี่ๆ เราใส่ใจทุกกระบวนการเลือกสรร
            <br />
            แม้ว่าคุณจะแพ้อาหารประเภทใด ปัญหาสุขภาพแบบไหน
            <br />
            วางใจ EazyEat เราคัดสรรอาหารจานพิเศษด้วยใจมาเพื่อคุณ
            <br />
            มาทำให้มื้ออาหารของคุณเต็มไปด้วยความสุขที่ดีที่สุดที่ EazyEat
          </p>
        </div>
        <img src="assets\img\pexels-steve-3789885.jpg" className="h-[450px] w-auto drop-shadow-2xl rounded-[20px]" />
      </section>
      <main className="bg-center bg-scroll bg-cover bg-testH2 h-[600px] min-w-full grid justify-items-end px-[4%]">
        <div className="grid grid-cols-3 justify-items-end items-center content-between mx-[1.5%] my-[4%] gap-[30%]">
          <h1 className="col-span-3 text-[38px] font-bold text-[#ffffff]">เลือกสรรเมนูกับ EazyEat</h1>
          <section className="box-border h-[240px] w-[240px] rounded-[30px] bg-red-50/60 p-10 border-1 grid grid-cols-1 gap-1 justify-items-center content-end">
            <img src="/assets/img/image-home-prepare.png" className="mb-[41px]" />
            <div className="grid justify-items-center">
              <h3 className="text-[34px] font-bold text-[#000000]">จัดเตรียม</h3>
              <p className="text-[20px] text-[#000000]/80">วัตถุดิบให้พร้อม</p>
            </div>
          </section>
          <section className="box-border h-[240px] w-[240px] rounded-[30px] bg-red-50/60 p-10 border-1 grid grid-cols-1 gap-1 justify-items-center content-end">
            <img src="/assets/img/image home-select.png" className="mb-[41px]" />
            <div className="grid justify-items-center">
              <h3 className="text-[34px] font-bold text-[#000000]">เลือกดู</h3>
              <p className="text-[20px] text-[#000000]/80">เมนูได้ตามใจชอบ</p>
            </div>
          </section>
          <section className="box-border h-[240px] w-[240px] rounded-[30px] bg-red-50/60 p-10 border-1 grid grid-cols-1 gap-1 justify-items-center content-end">
            <img src="/assets/img/image home-enjoy.png" className="mb-[34px] ml-[77px]" />
            <div className="grid justify-items-center">
              <h3 className="text-[34px] font-bold text-[#000000]">สนุกสนาน</h3>
              <p className="text-[20px] text-[#000000]/80">ไปกับการทำอาหาร</p>
            </div>
          </section>
        </div>
      </main>
      <div className="menu-list max-w-[1440px] h-auto grid grid-cols-4 justify-items-center box-content gap-x-[20px] gap-y-[50px] px-[60px] py-[60px] mt-[32px] mb-[50px] rounded-[20px] bg-white/50 ">
        {menuRankingList && menuRankingList.map((menu) => <MenuRankingCard key={menu._id} menuRanking={menu} />)}
      </div>
      {/* <main className="h-[600px] min-w-full grid justify-items-center p-[2%]">
        <div className="h-[550px] w-auto flex justify-center items-center gap-4 flex-col">
          <h1 className="text-[38px] font-bold text-[#0000000]">POPULAR MENU</h1>
          <div className="flex justify-center gap-10">
            <section className="h-[440px] w-[300px] rounded-[30px] bg-[#e3bb1d] p-7 grid grid-cols-1 justify-items-center content-end">
              <img src="/assets/img/pop1.jpg" className="mb-[10px] h-[320px] w-auto" />
              <div className="grid justify-items-center mb-[2%]">
                <h3 className="text-[30px] font-bold text-[#000000]">Menu name</h3>
                <p className="text-[20px] text-[#000000]/80">Rating</p>
              </div>
            </section>
            <section className="h-[440px] w-[300px] rounded-[30px] bg-[#e3bb1d] p-7 grid grid-cols-1 justify-items-center content-end">
              <img src="/assets/img/pop2.jpg" className="mb-[10px] h-[320px] w-auto" />
              <div className="grid justify-items-center mb-[2%]">
                <h3 className="text-[30px] font-bold text-[#000000]">Menu name</h3>
                <p className="text-[20px] text-[#000000]/80">Rating</p>
              </div>
            </section>
            <section className="h-[440px] w-[300px] rounded-[30px] bg-[#e3bb1d] p-7 grid grid-cols-1 justify-items-center content-end">
              <img src="/assets/img/pop3.jpg" className="mb-[10px] h-[320px] w-auto" />
              <div className="grid justify-items-center mb-[2%]">
                <h3 className="text-[30px] font-bold text-[#000000]">Menu name</h3>
                <p className="text-[20px] text-[#000000]/80">Rating</p>
              </div>
            </section>
          </div>
        </div>
      </main> */}
      <div className="bg-center bg-scroll bg-cover bg-testH3 h-[900px] min-w-full p-5">
        <div className="grid justify-items-center">
          <h3 className="text-[38px] font-bold my-5">GALLERY</h3>
          <div className="bg-red-50/60 h-[700px] w-[1000px] grid justify-items-center items-center rounded-[30px]">
            <img src="/assets/img/gallery.jpg" className="h-[550px] w-[760px]" />
          </div>
        </div>
      </div>
      <div className="bottom-0 box-content bg-white w-full h-[50px] rounded-t-[100%]" />
    </div>
  )
}

export default Home
