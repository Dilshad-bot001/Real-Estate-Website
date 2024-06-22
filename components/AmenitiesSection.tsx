import React from 'react'
import Image, { StaticImageData } from 'next/image'

import HarbourLights from '@/public/HarbourLights.png'
import { oswald, poppins } from '@/utils/font'
import { amenities } from '@/utils/constants'
import path from 'path'

type Props = {
  image: StaticImageData,
  title: string
}

const Amenitie = ({ image, title } : Props) => {
  return (
    <div className='w-[227px] h-[271px] flex flex-col justify-between items-center relative'>
      <Image src={image} alt='image' />
      <div className='w-full h-[157px] rounded-[20px] bg-[#FCFCFC] shadow-[0_14px_34px_-10px_rgba(126,126,126,0.35)] absolute top-1/2 -z-10 flex justify-center items-end pb-[19px]'>
        <h2 className={`w-[123px] ${poppins.className} font-semibold text-sm text-[#00357B] text-center`}>{title}</h2>
      </div>
    </div>
  )
}

const AmenitiesSection = () => {
  return (
    <section className='w-[1118px] h-[608px] mx-auto mt-[57px] flex flex-col items-center'>
        <Image src={HarbourLights} alt='harbour-lights' />
        <h1 className={`${oswald.className} font-medium text-4xl text-[#00357B] mt-[25px] mb-[11px]`}>Features & Amenities</h1>
        <p className={`w-[777px] ${poppins.className} font-normal text-[16px] text-[#343434] text-center`}>Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</p>
        <div className='mt-[25px] mb-9 flex gap-[70px]'>
          {
            amenities.map((amenitie, index) => (
              <Amenitie key={index} image={amenitie.image} title={amenitie.title} />
            ))
          }
        </div>
        <p className={`${poppins.className} font-light text-[10px] text-[#686868] self-end`}>*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</p>
        <div className='flex gap-[11px] self-end mt-10 mb-5'>
          <button className={`w-[153px] h-[48px] rounded-[5px] bg-[#00357B] ${poppins.className} font-bold text-[13px] text-[#FCFCFC] flex justify-center items-center`}>EXTERIORS</button>
          <button className={`w-[153px] h-[48px] rounded-[5px] border-[1px] border-[#00357B] bg-transparent ${poppins.className} font-bold text-[13px] text-[#00357B] flex justify-center items-center`}>INTERIORS</button>
        </div>
    </section>
  )
}

export default AmenitiesSection