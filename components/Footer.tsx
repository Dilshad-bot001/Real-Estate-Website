import React from 'react'

import { poppins } from '@/utils/font'

const Footer = () => {
  return (
    <div className={`w-full h-[78px] bg-[#091D41] mt-[37px] flex justify-center items-center ${poppins.className} font-normal text-sm text-[#FCFCFC] sm:mt-[68px] sm:h-[108px]`}>
      © DAMAC Copyright 2024 All rights reserved.
    </div>
  )
}

export default Footer