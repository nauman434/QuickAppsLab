import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'

const Logo = () => {
  return (
    <div className='h-[40px] flex gap-6'>
      <Image src={'/logo.svg'} width={120} height={120} alt='logo' className='hover:transition-all ease-in hover:scale-110 duration-300 cursor-pointer' />

      <Separator orientation='vertical' />
    </div>
  )
}

export default Logo