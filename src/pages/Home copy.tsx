import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css'
import { Carousel, initTE } from 'tw-elements'

initTE({ Carousel })

const HomeTest = () => {
  const navigate = useNavigate()

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
          <h3 className="text-[38px] font-bold my-5">GALLERY</h3>
          <div className="bg-[#fff5d6]/20 h-[650px] w-[1200px] flex justify-center content-between items-center gap-4 rounded-[20%]">
            <div id="carouselExampleSlidesOnly" className="relative" data-te-carousel-init data-te-ride="carousel">
              <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {/* First item */}
                <div
                  className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                  data-te-carousel-active
                >
                  <img
                    // src="https://img.freepik.com/free-photo/basil-minced-pork-with-rice-fried-egg_1150-27369.jpg?w=996&t=st=1690793007~exp=1690793607~hmac=c7dd71fbac22f781cfa97b12816035d41ef290717ba97f097f575758a45fce60"
                    src="/assets/img/pop1.jpg"
                    className="block w-full rounded-[20%] h-[600px]"
                    alt="ไก่ทอด"
                  />
                </div>
                {/* Second item */}
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <img
                    // src="https://img.freepik.com/free-photo/flat-lay-noodles-meal-arrangement_23-2148803834.jpg?w=996&t=st=1690793074~exp=1690793674~hmac=c9e928b79186411e577d9c31812786346a7dccbd7ef21cc6a26108ac32eaf653"
                    src="/assets/img/pop2.jpg"
                    className="block w-full rounded-[20%] h-[600px]"
                    alt="ข้าวกะเพราไข่ดาว"
                  />
                </div>
                {/* Third item */}
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <img
                    // src="https://img.freepik.com/free-photo/pieces-chicken-fillet-with-mushrooms-stewed-tomato-sauce-with-boiled-broccoli-rice-proper-nutrition-healthy-lifestyle-dietetic-menu-top-view_2829-20015.jpg?w=996&t=st=1690793158~exp=1690793758~hmac=bc0bb84fa3eb0f89c922a81e16bde9f5e1c83815091ae5be686b0d7f5903d4f0g"
                    src="/assets/img/pop3.jpg"
                    className="block w-full rounded-[20%] h-[600px]"
                    alt="ข้าวเนื้อผัดซอส"
                  />
                </div>
                {/* Fourth item */}
                <div
                  className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                  data-te-carousel-item
                >
                  <img
                    // src="https://img.freepik.com/free-photo/baked-chicken-wings-with-teriyaki-sauce_2829-19754.jpg?w=996&t=st=1690793175~exp=1690793775~hmac=c78543fc937e836f8e1f623555f16d3c864065a252a18d720cef86696cc85714"
                    src="/assets/img/pop6.jpg"
                    className="block w-full rounded-[20%] h-[600px]"
                    alt="แซลมอนครีมซอส"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeTest