import React from 'react'
import Image from 'next/image'

import GI1 from '@/public/GI1.png'
import GI2 from '@/public/GI2.png'
import GI3 from '@/public/GI3.png'
import GI4 from '@/public/GI4.png'
import GI5 from '@/public/GI5.png'

const GallerySection = () => {
  return (
    <div>
      <Image src={GI1} alt='image' className='w-[1122px] h-[494px] rounded-[14px] mt-20 mx-auto' />
      <div className='w-[1113px] h-[168px] mx-auto flex gap-[20px] mt-5'>
      <Image src={GI2} alt='image' />
      <Image src={GI3} alt='image' />
      <Image src={GI4} alt='image' />
      <Image src={GI5} alt='image' />
      </div>
    </div>
  )
}

export default GallerySection