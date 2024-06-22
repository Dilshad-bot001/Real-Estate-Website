import React from 'react'

import { poppins } from '@/utils/font'

const Footer = () => {
  return (
    <div className={`w-full h-[108px] bg-[#091D41] mt-[68px] flex justify-center items-center ${poppins.className} font-normal text-sm text-[#FCFCFC]`}>
      © DAMAC Copyright 2024 All rights reserved.
    </div>
  )
}

export default Footer