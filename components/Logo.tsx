import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'}>
      <div className='h-[40px] flex items-center sm:justify-start justify-center  gap-6'>
        <Image src={'/logo_black.svg'} width={150} height={150} alt='logo' className='hover:transition-all ease-in hover:scale-110 duration-300 cursor-pointer' />
      </div>
    </Link>
  )
}

export default Logo