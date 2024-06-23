import React from 'react'
import Image from 'next/image'

import GI1 from '@/public/GI1.png'
import GI2 from '@/public/GI2.png'
import GI3 from '@/public/GI3.png'
import GI4 from '@/public/GI4.png'
import GI5 from '@/public/GI5.png'
import { poppins } from '@/utils/font'

const GallerySection = () => {
  return (
    <div className='flex flex-col items-center mx-auto mt-12 sm:w-[1122px]'>
      <div className='flex gap-[11px] mb-[15px] sm:mb-7 sm:self-end'>
          <button className={`w-[153px] h-[48px] rounded-[5px] bg-[#00357B] ${poppins.className} font-bold text-[13px] text-[#FCFCFC] flex justify-center items-center`}>EXTERIORS</button>
          <button className={`w-[153px] h-[48px] rounded-[5px] border-[1px] border-[#00357B] bg-transparent ${poppins.className} font-bold text-[13px] text-[#00357B] flex justify-center items-center`}>INTERIORS</button>
        </div>
      <Image src={GI1} alt='image' className='w-[361px] h-[222px] rounded-[14px] sm:w-[1122px] sm:h-[494px]' />
      <div className='w-[360px] h-[55px] mt-[5px] flex gap-[5px] sm:gap-5 sm:mt-5 sm:w-[1113px] sm:h-[168px]'>
        <Image src={GI2} alt='image' className='img-size' />
        <Image src={GI3} alt='image' className='img-size' />
        <Image src={GI4} alt='image' className='img-size' />
        <Image src={GI5} alt='image' className='img-size' />
      </div>
    </div>
  )
}

export default GallerySection