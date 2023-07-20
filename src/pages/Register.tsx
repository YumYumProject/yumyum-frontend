import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Register = () => {

    // const handleSubmit = async (e:MouseEvent) => {
    //     e.preventDefault()

    //     try {
              
         
    //     } catch (err) {
    //       console.log(err)
    //     }
    //   } 

    return (
        <div className='bg-center bg-fixed bg-cover bg-homeBg'>
            <Navbar />
                    <div>
                      <header>
                        <h2>Register</h2>
                        <img>Avatar</img>
                      </header>
                      <form>
                        <label></label>
                        <label></label>
                        <label></label>
                        <label></label>
                        <label></label>
                        <button type='button' value='submit' className='box-border h-[50px] w-[150px] text-white text-l hover:text-xl font-bold p-[2px] m-10 rounded-[50px]
                        bg-gradient-to-r from-[#fea622] to-[#d0e03c]  
                      hover:from-[#c1f31f] hover:to-[#4ccf20]'>Register</button>
                      <p>Already have an account? Login</p>
                    </form>
                    </div>
            <Footer />
        </div>
    )
}

export default Register