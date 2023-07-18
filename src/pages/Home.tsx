import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// link login,logout + register
// bg full image
// 1 container for all main home subject
    // 3 inner containers horizontal : header, details, button

const Home = () => {
    const navigate = useNavigate()

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        return navigate(`${host}/content/`)
    }

// test
// bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30%

    return (
        <div className='bg-center bg-fixed bg-cover bg-homeBg'>
            <Navbar />
            <div className='flex justify-center'>
                <body className='bg-gradient-to-r from-red-50/50 to-zinc-500/20 container h-5000 w-5000 rounded-[35px]'>
                    <header className='box-border h-auto w-auto ml-[20%] mr-[20%] mb-[120px] gap-[10px] text-white flex flex-col items-center m-10'>
                        <h2 className='text-4xl font-bold'>INTRODUCE WEBSITE</h2>
                        <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </header>
                    <main className='flex justify-around'>
                        <section className='box-border h-[300px] w-[300px] rounded-[30px] bg-red-50/60 p-10 border-1 m-10'>
                            <img src='src/assets/img/image-home-prepare.png' className='relative -right-6 -top-40' />
                            <h3 className='text-3xl font-bold'>Prepare</h3>
                            <p>Ingredients</p>
                        </section>
                        <section className='box-border h-[300px] w-[300px] rounded-[30px] bg-red-50/60 p-10 border-1 m-10'>
                            <img src='src/assets/img/image home-select.png' className='relative -right-6 -top-40' />
                            <h3 className='text-3xl font-bold'>Select</h3>
                            <p>Menu</p>
                        </section>
                        <section className='box-border h-[300px] w-[300px] rounded-[30px] bg-red-50/60 p-10 border-1 m-10'>
                            <img src='src/assets/img/image home-enjoy.png' className='relative -right-6 -top-40' />
                            <h3 className='text-3xl font-bold'>Enjoy</h3>
                            <p>Cooking</p>
                        </section>
                    </main>
                    <button type='button' className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 
                    hover:to-yellow-500 m-10 rounded-lg h-70rem w-70rem text-white flex items-center onClick={handleClick}'>Get Started</button>
                </body> 
                </div>
            <Footer />
        </div>
    )
}

export default Home