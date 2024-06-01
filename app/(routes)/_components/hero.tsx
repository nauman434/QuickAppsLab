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
                <div>
                    <p className='text-center text-gray-500 font-bold'>INTEGRATIONS FOR QUICKBOOKS</p>
                    <h2 className="text-center md:text-[80px] text-[48px] font-bold font-syne md:w-[70vw] w-full text-white ">
                        Find an Integration
                    </h2>
                </div>
            </div>
        </Container>
    )
}

export default Hero
