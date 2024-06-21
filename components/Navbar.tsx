import React from 'react'
import Image from 'next/image'

import Logo from '@/public/Logo.svg'
import { poppins } from '@/utils/font'

const Navbar = () => {
  return (
    <nav className='w-[1122px] mt-10 flex justify-between'>
        <Image src={Logo} alt='logo' className='w-[165px] h-5' />
        <button className={`w-[184px] h-12 rounded-[5px] border-2 border-[#17ABFF] bg-transparent ${poppins.className} font-bold text-[13px] text-[#17ABFF]`}>ENQUIRE NOW</button>
    </nav>
  )
}

export default Navbar