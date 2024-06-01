'use client'
import Container from '@/components/Cotainer'
import { Button } from '@/components/ui/button'
import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <Container className='py-[80px] flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-10 items-center justify-center'>
                <div className='md:w-[70vw] w-full'>
                    <motion.h2
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        className="text-center md:text-[50px] text-[26px] font-bold font-syne text-white"
                    >
                        Ready to transform your financial management with seamless QuickBooks integrations?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        className="font-syne text-center mt-4 text-gray-400"
                    >
                        Contact us today for a free consultation and discover how we can help your business thrive.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <Button className='rounded-full text-[16px] h-[55px] w-[137px] hover:transition-all hover:scale-105 ease-out duration-300 bg-white text-black hover:bg-white font-syne'>
                    Let&apos;s talk
                </Button>
                </motion.div>
                
            </div>
        </Container>
    )
}

export default Contact
