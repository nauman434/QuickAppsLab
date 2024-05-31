import Container from '@/components/Cotainer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <Container className='py-24 flex flex-col justify-center items-center'>
            <div>
                <h1 className='text-center md:text-[80px] text-[48px] font-bold font-syne md:w-[70vw] w-full'>
                    Streamline Your Business Operations with Seamless Data Integration
                </h1>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 w-full mt-20'>
                <div>
                    <Image src={'/team.png'} width={200} height={100} alt='img' />
                    <p className='text-normal mt-4 text-gray-600 font-syne font-bold'>Our Happy Customers</p>
                </div>
                <div className='md:flex hidden '/>
                <div className='flex flex-col gap-6'>
                    <p className='tracking-wide leading-[150%] text-gray-500 text-xl font-syne'>For more than a decade, merchants on Shopify have trusted Bold apps to help grow their ecommerce stores.</p>
                    <Button className='rounded-full text-[16px] h-[55px] w-[137px] hover:transition-all hover:scale-105 ease-out duration-300'>
                        Let's talk
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Hero