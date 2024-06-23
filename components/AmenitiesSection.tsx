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
    <div className='w-[145px] h-[171px] flex flex-col justify-between items-center relative sm:w-[227px] sm:h-[271px] hover:scale-105 hover:transition-all'>
      <Image src={image} alt='image' className='w-[124px] h-[120px] sm:w-[206px] sm:h-[200px]' />
      <div className='w-full h-[102px] rounded-[20px] bg-[#FCFCFC] shadow-[0_14px_34px_-10px_rgba(126,126,126,0.35)] absolute top-1/2 -z-10 flex justify-center items-end pb-[19px] sm:h-[157px]'>
        <h2 className={`w-[116px] ${poppins.className} font-semibold text-xs text-[#00357B] text-center sm:w-[123px] sm:text-sm`}>{title}</h2>
      </div>
    </div>
  )
}

const AmenitiesSection = () => {
  return (
    <section className='w-[347px] h-[758px] mx-auto mt-[43px] flex flex-col items-center sm:w-[1118px] sm:h-[608px] sm:mt-[57px]'>
        <Image src={HarbourLights} alt='harbour-lights' />
        <h1 className={`${oswald.className} font-medium text-3xl text-[#00357B] mt-[25px] mb-4 sm:mb-[11px] sm:text-4xl`}>Features & Amenities</h1>
        <p className={`w-[301px] ${poppins.className} font-normal text-[16px] text-[#343434] text-center sm:w-[777px]`}>Harbour Lights beautifully honours maritime voyages while embracing an opulent seafront lifestyle. Its maritime-inspired amenities provide an unmatched seaside experience, offering a life of tranquility and bliss.</p>
        <div className='mt-[25px] mb-9 grid grid-cols-2 gap-[25px] sm:gap-[70px] sm:grid-cols-4'>
          {
            amenities.map((amenitie, index) => (
              <Amenitie key={index} image={amenitie.image} title={amenitie.title} />
            ))
          }
        </div>
        <p className={`w-[240px] ${poppins.className} font-light text-[10px] text-[#686868] text-center sm:text-right sm:w-full`}>*T&Cs apply | ** Based on similar branded projects in the last 2 years. Source 1 | Source 2</p>        
    </section>
  )
}

export default AmenitiesSection