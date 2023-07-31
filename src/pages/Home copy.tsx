import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const HomeTest = () => {
  const navigate = useNavigate()
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
    <div>
      <div className="bg-top bg-scroll bg-cover bg-testH1 h-[600px] max-w-[1440px] min-w-full">
        <div className="h-[600px] w-auto grid justify-items-end content-center py-[15%] px-[12%]">
          <header className="grid grid-cols-1 py-[14%] ">
            <h3 className="text-[34px] font-bold">เลือกเมนูตามใจคุณกับ EazyEat</h3>
            <h3 className="text-[22px]">จากวัตถุดิบในครัว สู่อาหารจานพิเศษที่คัดสรรมาเพื่อคุณ</h3>
            <button
              type="button"
              onClick={handleClick}
              className="box-border h-[50px] w-[150px] text-white text-[16px] font-bold p-[2px] my-5 rounded-[50px]
                bg-[#FF9642] hover:bg-[#7dac59] shadow-2xl drop-shadow-2xl"
            >
              เริ่มกันเลย!!
            </button>
          </header>
        </div>
      </div>
      <section>
        <main className="bg-[#f0f0f0]/30 h-[600px] min-w-full">
          <div className="h-[600px] w-auto p-[2%] gap-[5%] flex flex-row-reverse items-center justify-center content-between">
            <img src="assets\img\pexels-steve-3789885.jpg" className="h-[450px] w-auto drop-shadow-2xl" />
            <div className="h-[400px] w-[60] grid content-around">
              <h1 className="text-[34px] font-bold text-[#000000]">เกี่ยวกับเรา</h1>
              <span className="flex flex-inline text-[#000000] text-[18px] items-center">
                <p>
                  <h5 className="text-[24px] font-bold">ยินดีต้อนรับเข้าสู่ EazyEat!!</h5>
                  <br />
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
              </span>
            </div>
          </div>
        </main>
      </section>
      <main className="bg-center bg-scroll bg-cover bg-testH2 h-[600px] min-w-full grid justify-items-end px-[4%]">
        <div className="grid grid-cols-3 justify-items-end items-center content-between mx-[1.5%] my-[4%] gap-10">
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
      <main className="h-[600px] min-w-full grid justify-items-center p-[2%]">
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
      </main>
      <div className="bg-center bg-scroll bg-cover bg-testH3 h-[800px] min-w-full p-5">
        <div className="grid justify-items-center">
          <h3 className="text-[38px] font-bold my-5">อัลบั้มรูปภาพ</h3>
          <div className="h-[600px] w-[1200px] flex justify-center content-between items-center gap-4 rounded-[20%]">
            <div className="max-w-[1400px] h-[600px] w-full px-4 relative group">
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

export default HomeTest
