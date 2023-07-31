import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useMenuRankingList from '../hooks/useMenuRankingList'
import 'react-multi-carousel/lib/styles.css'
import { Carousel, initTE } from 'tw-elements'
import MenuRankingCard from '../components/MenuRankingCard'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

initTE({ Carousel })

const Home = () => {
  const navigate = useNavigate()
  const { menuRankingList } = useMenuRankingList()
  const slides = [
    {
      url: '/assets/img/pop1.jpg',
    },
    {
      url: '/assets/img/pop2.jpg',
    },
    {
      url: '/assets/img/pop3.jpg',
    },
    {
      url: '/assets/img/pop4.jpg',
    },
    {
      url: '/assets/img/pop5.jpg',
    },
    {
      url: '/assets/img/pop6.jpg',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    return navigate('/menu')
  }

  return (
    <div className="bg-white">
      <div className="bg-top bg-cover bg-testH1 h-[600px] w-full flex justify-center items-center">
        <div className="max-w-[1280px] px-[16px] overflow-hidden flex flex-wrap">
          <header className="flex flex-col justify-center items-start w-[1280px] pl-[58%] gap-[10px] pr-[16px] ">
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
      <section className="max-w-[1280px] px-[16px] py-[40px] flex justify-between items-center mx-auto overflow-hidden flex-wrap gap-[20px]">
        <div className="flex flex-col gap-[10px] pr-[16px]">
          <p className="text-[34px] font-bold">เกี่ยวกับเรา</p>
          <p className="text-[24px] font-bold">ยินดีต้อนรับเข้าสู่ EazyEat!!</p>
          <p className="text-[18px] leading-[30px]">
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
        <img src="assets\img\pexels-steve-3789885.jpg" className="h-[450px] w-auto rounded-[20px]" />
      </section>
      <div className="bg-top bg-cover bg-testH2  w-full py-[40px]">
        <div className="max-w-[1280px] h-full box-content px-[16px] flex flex-col justify-center items-end mx-auto gap-[160px] overflow-hidden">
          <h1 className="col-span-3 text-[34px] font-bold text-[#ffffff]">เลือกสรรเมนูกับ EazyEat</h1>
          <div className="flex justify-center items-center gap-[15px] flex-wrap">
            <section className="box-border h-[240px] w-[240px] rounded-[30px] bg-red-50/60 p-10 border-1 grid grid-cols-1 gap-1 content-end">
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
        </div>
      </div>
      <div className="menu-ranking-list max-w-[1280px] px-[16px] py-[40px] flex flex-col justify-center items-center gap-[40px] mx-auto">
        <p className="text-[34px] font-bold">เมนูยอดฮิต</p>
        <div className="menu-ranking-list grid grid-cols-3 justify-items-center box-content gap-x-[50px] gap-y-[50px] h-[500px]">
          {menuRankingList && menuRankingList.map((menu) => <MenuRankingCard key={menu._id} menuRanking={menu} />)}
        </div>
      </div>
      <div className="bg-center bg-scroll bg-cover bg-testH3 h-[800px] min-w-full p-5">
        <div className="grid justify-items-center gap-[10px]">
          <h3 className="text-[38px] font-bold my-5">อัลบั้มรูปภาพ</h3>
          <div className="h-[600px] w-[1200px] flex justify-center content-between items-center gap-4 rounded-[20%]">
            <div className="max-w-[1280px] h-[600px] w-full px-4 relative group">
              <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
              ></div>
              {/* Left Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {/* Right Arrow */}
              <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
              <div className="flex top-4 justify-center py-2">
                {slides.map((slide, slideIndex) => (
                  <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
