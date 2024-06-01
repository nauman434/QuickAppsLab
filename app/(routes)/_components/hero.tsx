'use client'

import Container from '@/components/Cotainer'
import { Button } from '@/components/ui/button'
import { LampContainer } from '@/components/ui/lamp'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <Container className='py-24 flex flex-col justify-center items-center'>

            <div>
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                        ease: "easeInOut",
                    }}

                >
                    <p className='text-center text-gray-500 font-bold'>INTEGRATIONS FOR QUICKBOOKS</p>
                    <h2 className="text-center md:text-[80px] text-[48px] font-bold font-syne md:w-[70vw] w-full text-white ">
                        Find an Integration
                    </h2>
                </motion.div>
            </div>
        </Container>
    )
}

export default Hero
