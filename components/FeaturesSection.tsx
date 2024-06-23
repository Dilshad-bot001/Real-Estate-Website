import React from 'react'
import Image from 'next/image'

import Booking from '@/public/Booking.svg'
import { poppins, oswald } from '@/utils/font'
import { features } from '@/utils/constants'

type Props = {
  icon: string,
  title: string,
  subtitle: string
}

const Feature = ({ icon, title, subtitle }: Props) => {
  return (    
      <div className='w-[150px] h-full flex flex-col items-center text-[#00357B]'>
        <Image src={icon} alt='icon' className='w-[47px] h-[48px] sm:w-[50px]' />
        <h4 className={`mt-[10px] mb-1 ${poppins.className} font-normal text-xs sm:text-[16px] sm:mt-[14px]`}>{title}</h4>
        <h1 className={`${oswald.className} text-[25px] font-medium sm:text-3xl`}>{subtitle}</h1>
        <div className='w-[73px] h-[5px] mt-[9px] rounded-[13px] opacity-[12%] bg-[#00357B] sm:mt-3'></div>
      </div>
  )
}

const FeaturesSection = () => {
  return (
    <section className='w-full h-[163px] bg-[#F4F9FF] flex items-center sm:h-[177px] overflow-hidden'>
      <div className='w-[303px] h-[127px] mx-auto grid grid-cols-2 gap-[25px] sm:w-[1021px] sm:h-[145px] sm:grid-cols-4 sm:gap-[160px]'>
        {features.map((feature, index) => (
          <Feature key={index} icon={feature.icon} title={feature.title} subtitle={feature.subtitle} />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection