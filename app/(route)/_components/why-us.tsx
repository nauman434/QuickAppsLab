'use client'

import Container from '@/components/Container'
import { SparklesCore } from '@/components/ui/sparkles'
import React from 'react'
import { motion } from 'framer-motion'

const WhyUs = () => {
    return (
        <div>
            <div className="pt-[80px] w-full bg-primary flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h2 className='text-center md:text-[80px] text-[40px] font-bold font-syne md:w-[70vw] w-full text-white'>Why Choose Us?</h2>
                <div className="w-[40rem] h-40 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary-green to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-primary-green to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-200 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-200 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-primary [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>
            <Container className='pb-[80px] flex flex-col justify-start items-center gap-10'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6 w-full'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-6'
                        >

                            <div className='flex flex-col gap-4'>
                                <h4 className='sm:sm:text-[36px] text-2xl  font-syne font-bold text-white'>Tailored Solutions</h4>
                                <p className='font-syne text-gray-400 tracking-wide'>Every business is unique, and so are its needs. We offer bespoke integration services that fit your specific requirements, ensuring smooth and efficient data flow between QuickBooks and your favorite business applications.</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'
                        >


                            <div className='flex flex-col gap-4'>
                                <h4 className='sm:text-[36px] text-2xl font-syne font-bold text-white'>Expert Team</h4>
                                <p className='font-syne text-gray-400 tracking-wide'>Our team of experienced developers and financial experts are dedicated to providing top-notch integration services. We understand the intricacies of QuickBooks and the various third-party apps you use, ensuring a seamless integration process.</p>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col gap-6 '>
                        <div
                            className='flex flex-col gap-6'
                        >
                            <div className='flex flex-col gap-4'>
                                <h4 className='sm:text-[36px] text-2xl font-syne font-bold text-white'>Save Time and Reduce Errors</h4>
                                <p className='font-syne text-gray-400 tracking-wide'>Manual data entry is prone to errors and time-consuming. Our automated integrations help you save time and reduce the risk of costly mistakes, ensuring your financial data is always accurate and up-to-date.</p>
                            </div>
                        </div>
                        <div
                            className='flex flex-col gap-6'
                        >

                            <div className='flex flex-col gap-4'>
                                <h4 className='sm:text-[36px] text-2xl font-syne font-bold text-white'>Comprehensive Support</h4>
                                <p className='font-syne text-gray-400 tracking-wide'>From initial consultation to ongoing support, we are with you every step of the way. Our commitment to customer satisfaction means you can rely on us for continuous support and updates as your business grows.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WhyUs