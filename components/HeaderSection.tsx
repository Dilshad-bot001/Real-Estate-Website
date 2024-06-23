import React from 'react'
import Image from "next/image";

import Navbar from './Navbar'
import HeroImage from '@/public/HeroImage.png'
import { poppins, oswald } from '@/utils/font'

const HeaderSection = () => {
  return (
    <section className="w-full h-[717px] relative flex flex-col mx-auto sm:h-[658px]">
      <Image src={HeroImage} alt='hero-image' className='w-full h-full absolute top-0 -z-10' />
      <Navbar />
      <div className='w-[319px] mt-[35px] text-[#FCFCFC] flex flex-col mx-auto sm:w-[1131px] sm:flex-row sm:mt-[114px] sm:justify-between'>
        <div>
          <h1 className={`${oswald.className} w-full  font-medium text-[37px] leading-[48px] sm:text-5xl sm:w-[488px]`}>HARBOUR LIGHTS <br />
            DE <span className='text-[#17ABFF]'>GRESOGONO</span></h1>
          <h3 className={`w-full ${poppins.className} font-bold text-sm mt-[8px] mb-[14px] leading-[22px] sm:w-[498px] sm:text-[25px] sm:mb-[45px] sm:mt-[19px] sm:leading-[33px]`}>1, 2 & 3 Bedrooms Seaside Apartments in Dubai Maritime City</h3>
          <div className={`w-[304px] h-[37px] py-[11px] pl-[15px] bg-[#00000042] border-l-[3px] border-[#17ABFF] ${poppins.className} font-normal text-sm text-[#E7EBEF]`}>Rental Returns of <span className='font-semibold text-[16px]'>UPTO 11%**</span></div>
          <div className={`w-[304px] h-[37px] mt-[9px] py-[11px] pl-[18px] bg-[#00000042] border-l-[3px] border-[#17ABFF] ${poppins.className} font-normal text-sm text-[#E7EBEF]`}>Capital Appreciation of <span className='font-semibold text-[16px]'>UPTO 32%**</span></div>
        </div>
        <div className='w-[303px] h-[321px] mt-7 pl-[27px] pt-[33px] rounded-[14px] bg-[#5790BE1F] backdrop-blur-md text-[#FCFCFC] sm:mt-0'>
          <h4 className={`${poppins.className} font-normal text-[13px]`}>PRICING STARTS FROM</h4>
          <h1 className={`mt-3 mb-5 ${oswald.className} font-medium text-5xl`}>$ 425,000</h1>
          <h3 className={`${oswald.className} font-medium text-2xl`}>AED 1.3 Million</h3>
          <button className={`w-[248px] h-[48px] mt-[25px] mb-[30px] rounded-[5px] py-3 px-10 bg-[#17ABFF] ${poppins.className} font-bold text-[13px] text-white hover:bg-transparent hover:border-2 hover:border-[#17ABFF]`}>GET A REPRESENTATION</button>
          <div className={`w-[303px] py-3 pl-[25px] -ml-[27px] bg-[#5790BE1F] border-t-[1px] border-[#0000004D] ${poppins.className} font-normal text-[13px] text-[#98C5E8] leading-[17px]`}>
            <p className='w-[268px]'>Get an Expert’s Presentation of Real Estate in Dubai for Life and investment</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderSection