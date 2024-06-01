'use client'

import Container from '@/components/Cotainer'
import { Button } from '@/components/ui/button'
import { LampContainer } from '@/components/ui/lamp'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <Container className='pb-24 flex flex-col justify-center items-center'>

            <div>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    className="text-center md:text-[80px] text-[48px] font-bold font-syne md:w-[70vw] w-full text-white mt-10"
                >
                    Streamline Your Business Operations with Seamless Data Integration
                </motion.h1>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 w-full mt-20'>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <Image src={'/team.png'} width={200} height={100} alt='img' />
                    <p className='text-normal mt-4 text-gray-600 font-syne font-bold'>Our Happy Customers</p>
                </motion.div>
                <div className='md:flex hidden ' />
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    className='flex flex-col gap-6'
                >
                    <p className='tracking-wide leading-[150%] text-gray-400 text-xl font-syne'>For more than a decade, merchants on Shopify have trusted Bold apps to help grow their ecommerce stores.</p>
                    <Button className='rounded-full text-[16px] h-[55px] w-[137px] hover:transition-all hover:scale-105 ease-out duration-300 bg-primary-green hover:bg-primary-green text-primary'>
                        Let&apos;s talk
                    </Button>
                </motion.div>
                
                    
            </div>
        </Container>
    )
}

export default Hero
