import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { HealthyConcern } from '../providers/AuthProviders';
import { useAuth } from '../providers/AuthProviders';


/* 

interface IUser extends Document {
  id: ObjectId;
  username: string;
  password: string;
  display_name: string;
  healthy_concern: Enumerator;
  food_allergen: string;
}

*/

const Register = () => {

  const navigate = useNavigate()
  const { register } = useAuth()
  const [usernameInput, setUsernameInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [displayNameInput, setDisplayNameInput] = useState<string>('');
  const [foodAllergenInput, setFoodAllergenInput] = useState<string>('');
  const [healthyCcFilter, setHealthyCcInput] = useState<string>('All')

  // click to submit, then go to login page
  // user data must match with backend request
  // need useState, useEffect

    const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        try {

          await register(usernameInput,passwordInput,displayNameInput,foodAllergenInput,healthyCcFilter)

          navigate('/')

        } catch (err) {

          console.log(`${err}.message`)

        } 
    }
      
    return (
        <div className='bg-center bg-cover bg-registerBg'>
            <Navbar />
            <div className='flex justify-center'>
                    <div className='bg-gradient-to-r from-red-50/50 to-zinc-500/20 container h-auto w-[800px] rounded-[35px] grid justify-items-center'>
                      <header className='grid justify-items-center p-[20px]'>
                        <h2 className='text-[30px] font-bold p-[15px]'>Register</h2>
                        <img src='src/assets/img/avartar.jpg' className='h-[200px] my-[15px]' />
                      </header>
                      <form className='grid justify-items-center grid-cols-1 gap-[18px]'>
                        <div>
                          <label>
                            <p>Display name</p>
                            <input type="text" onChange={(e) => setDisplayNameInput(e.target.value)} className='h-[32px] w-[400px] rounded-[50px] p-[10px]'/></label>
                        </div>
                        <div>
                          <label>
                            <p>Username</p>
                            <input type='text' onChange={(e) => setUsernameInput(e.target.value)} className='h-[32px] w-[400px] rounded-[50px] p-[10px]' required /></label>
                        </div>
                        <div>
                          <label>
                            <p>Password</p>
                            <input type='password' onChange={(e) => setPasswordInput(e.target.value)} className='h-[32px] w-[400px] rounded-[50px] p-[10px]' required/></label>
                        </div>
                        <div>
                            {/* must be dropdown for user to choose */}
                            <p>Healthy concern</p>
                            <label htmlFor="underline_select" className="sr-only"></label>
                              <select id="underline_select" value={healthyCcFilter} onChange={(e) => setHealthyCcInput(e.target.value)} className="block h-[40px] w-[400px] rounded-[50px] p-[10px] text-black bg-white appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option value="All">ไม่มี</option>
                                <option value={HealthyConcern.Diabetes}>เบาหวาน</option>
                                <option value={HealthyConcern.Pressure}>ความดัน</option>
                                <option value={HealthyConcern.Heart}>หัวใจ</option>
                                <option value={HealthyConcern.Kidney}>ไต</option>
                                <option value={HealthyConcern.WeightLoss}>ลดน้ำหนัก</option>
                                <option value={HealthyConcern.Fat}>อ้วน</option>
                              </select>  
                        </div>
                        <div>  
                          <label>
                            <p>Food allergen</p>
                            <input type='text' onChange={(e) => setFoodAllergenInput(e.target.value)} className='h-[32px] w-[400px] rounded-[50px] p-[10px]' /></label>
                        </div>
                        <button type='button' value='submit' onClick={(e) => handleSubmit(e)} className='box-border h-[50px] w-[150px] text-white text-l hover:text-xl font-bold p-[2px] m-10 rounded-[50px]
                          bg-gradient-to-r from-[#fea622] to-[#d0e03c]  
                        hover:from-[#c1f31f] hover:to-[#4ccf20]'>Register</button>
                        <div className='grid justify-items-center mb-[55px]'>
                          <div className='inline-flex gap-[15px]'>
                            <p>Already have an account?</p> 
                            <button className='text-[#382b98] italic'>Login</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    </div>
            <Footer />
        </div>
    )
}

export default Register
