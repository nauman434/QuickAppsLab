'use client'

import Container from '@/components/Cotainer'
import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <Container className='py-[80px]'>
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
                        className="text-start md:text-[54px] text-[36px] font-bold font-syne text-white"
                    >
                        We Build Custom Integrations for Into Quickbooks
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
                        We value privacy and confidentiality so only transfer your data between apps, store nothing
                    </motion.p>
                </div>
            </div>
        </Container>
  )
}

export default About