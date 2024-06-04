'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div>
                <div>
                    <h2
                        className="text-start md:text-[54px] text-[36px] font-bold font-syne text-white"
                    >
                        We Build Custom Integrations for Into Quickbooks
                    </h2>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 md:mt-10 mt-4'>
                    <div />
                    <p
                        className="leading-[150%] text-gray-400 font-syne md:text-2xl text-lg col-span-2"
                    >
                        We value privacy and confidentiality so only transfer your data between apps, store nothing
                    </p>
                </div>
            </div>
  )
}

export default Hero