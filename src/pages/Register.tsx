import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Register = () => {
 

    return (
        <div className='bg-center bg-fixed bg-cover bg-registerBg'>
            <Navbar />
            <div className='flex justify-center'>
                <body className='bg-gradient-to-r from-red-50/50 to-zinc-500/20 container h-5000 w-5000 rounded-[35px] grid justify-items-center'>
                    <header className='box-border h-auto w-auto ml-[20%] mr-[20%] mb-[100px] gap-[10px] text-white flex flex-col items-center m-10'>
                        <h2 className='text-4xl font-bold'>INTRODUCE WEBSITE</h2>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </header>
                    <main className='flex justify-around'>
                        <section className='box-border h-[260px] w-[260px] rounded-[30px] bg-red-50/60 p-10 border-1 m-10 grid grid-cols-1 gap-1 justify-items-center content-end'>
                            <img src='src/assets/img/image-home-prepare.png' className='mb-[80px]' />
                            <div className='grid justify-items-center'>
                                <h3 className='text-3xl font-bold text-[#64748b]'>Prepare</h3>
                                <p className='font-bold text-white'>Ingredients</p>
                            </div>
                        </section>
                        <section className='box-border h-[260px] w-[260px] rounded-[30px] bg-red-50/60 p-10 border-1 m-10 grid grid-cols-1 gap-1 justify-items-center content-end'>
                            <img src='src/assets/img/image home-select.png' className='mb-[70px]' />
                            <div className='grid justify-items-center'>
                                <h3 className='text-3xl font-bold text-[#64748b]'>Select</h3>
                                <p className='font-bold text-white'>Menu</p>
                            </div>
                        </section>
                        <section className='box-border h-[260px] w-[260px] rounded-[30px] bg-red-50/60 p-10 border-1 m-10 grid grid-cols-1 gap-1 justify-items-center content-end'>
                            <img src='src/assets/img/image home-enjoy.png' className='mb-[60px] ml-[90px]' />
                            <div className='grid justify-items-center'>
                                <h3 className='text-3xl font-bold text-[#64748b]'>Enjoy</h3>
                                <p className='font-bold text-white'>Cooking</p>
                            </div>
                        </section>
                    </main>
                    <button type='button' className='box-border h-[50px] w-[150px] text-white text-l hover:text-xl font-bold p-[2px] m-10 rounded-[50px]
                    bg-gradient-to-r from-[#fea622] to-[#d0e03c]  
                    hover:from-[#c1f31f] hover:to-[#4ccf20]'>Get Started</button>
                </body> 
            </div>
            <Footer />
        </div>
    )
}

export default Register