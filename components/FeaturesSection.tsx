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
        <Image src={icon} alt='icon' className='w-[50px] h-[48px]' />
        <h4 className={`mt-[14px] mb-1 ${poppins.className} font-normal text-[16px]`}>{title}</h4>
        <h1 className={`${oswald.className} font-medium text-3xl`}>{subtitle}</h1>
        <div className='w-[73px] h-[5px] mt-3 rounded-[13px] opacity-[12%] bg-[#00357B]'></div>
      </div>
      
    
  )
}

const FeaturesSection = () => {
  return (
    <section className='w-full h-[177px] bg-[#F4F9FF] flex justify-center items-center'>
      <div className='w-[1021px] h-[145px] flex justify-between'>
        {features.map((feature, index) => (
          <Feature key={index} icon={feature.icon} title={feature.title} subtitle={feature.subtitle} />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection