'use client'

import Container from '@/components/Cotainer'
import React from 'react'
import { motion } from 'framer-motion'

const AboutSec = () => {
    return (
        <Container className='pb-[80px]'>
            <div>
                <div>
                    <motion.h2
                        initial={{ opacity: 0.5, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        className="text-start md:text-[54px] text-[38px] font-bold font-syne text-white"
                    >
                        Are you tired of manual data entry and fragmented financial records?
                    </motion.h2>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 md:mt-10 mt-4'>
                    <div />
                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        className="leading-[150%] text-gray-400 font-syne md:text-2xl text-lg col-span-2"
                    >
                        At QuickAppsLab, we specialize in creating custom integrations that effortlessly connect your business apps with QuickBooks. Our mission is to simplify your financial management, giving you more time to focus on what really matters—growing your business.
                    </motion.p>
                </div>
            </div>
        </Container>
    )
}

export default AboutSec