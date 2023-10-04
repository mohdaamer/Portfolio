import React from 'react'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <div className='max-w-[1240px] flex items-center justify-between p-4 md:m-auto md:mt-4 m-3'>
      <div className="logo">
        <h1 className='md:text-2xl uppercase font-bold cursor-pointer'>Aamer.portfolio</h1>
      </div>
      <div className="links md:block hidden">
        <ul className='md:flex md:gap-8 font-semibold'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>my works</li>
            <li>experience</li>
        </ul>
      </div>

      {/* Responsive  */}
      <div className={`bg-[#2C3333] md:hidden fixed top-[60px] left-[-100%] ${toggle ? 'left-[0]' : 'left-[-100%]' } p-9 w-full text-center duration-300`}>
        <ul className='font-semibold'>
            <li className='p-3 text-[#F6F1F1]'>Home</li>
            <li className='p-3 text-[#F6F1F1]'>About</li>
            <li className='p-3 text-[#F6F1F1]'>Contact</li>
            <li className='p-3 text-[#F6F1F1]'>my works</li>
            <li className='p-3 text-[#F6F1F1]'>experience</li>
        </ul>
      </div>

      {toggle ? <AiOutlineClose className='text-2xl md:hidden' onClick={()=>(setToggle(!toggle))} /> : <AiOutlineMenu className='text-2xl md:hidden' onClick={()=>setToggle((!toggle))} /> }
    </div>
  )
}

export default Navbar
