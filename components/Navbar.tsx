import React from 'react'
import Image from 'next/image'

import Logo from '@/public/Logo.svg'
import Menu from '@/public/Menu.svg'
import { poppins } from '@/utils/font'

const Navbar = () => {
  return (
    <nav className='w-[319px] h-[15px] mt-12 flex justify-between items-center mx-auto sm:w-[1122px] sm:mt-10'>
        <Image src={Logo} alt='logo' className='w-[112px] h-[15px] sm:w-[165px] sm:h-5' />
        <Image src={Menu} alt='menu' className='block w-6 h-3 sm:hidden' />
        <button className={`w-[184px] h-12 rounded-[5px] border-2 border-[#17ABFF] bg-transparent ${poppins.className} font-bold text-[13px] text-[#17ABFF] hidden sm:block hover:bg-[#17ABFF] hover:border-0 hover:text-white`}>ENQUIRE NOW</button>
    </nav>
  )
}

export default Navbar