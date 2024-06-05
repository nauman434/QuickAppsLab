'use client'

import Container from '@/components/Container'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import React from 'react'
import { motion } from 'framer-motion'



const HowWorks = () => {
    return (
        <Container className='py-[80px]'>
            <div>
                <h2
                    className="font-bold text-start text-[40px] md:text-[64px] text-primary w-full font-syne"
                >
                    How It Works?
                </h2>
            </div>
            <div
            >
                <HoverEffect items={projects} />
            </div>
        </Container>
    )
}

export default HowWorks

export const projects = [
    {
        title: "Consultation",
        description:
            "We start with a detailed consultation to understand your business needs and the apps you use.",
        link: "/",
    },
    {
        title: "Custom Integration Plan",
        description:
            "Our experts design a tailored integration plan that fits your specific requirements.",
        link: "/",
    },
    {
        title: "Development & Implementation",
        description:
            "We develop and implement the integration, ensuring a smooth and efficient data transfer process.",
        link: "/",
    },
    {
        title: "Ongoing Support",
        description:
            "We provide continuous support and updates to ensure your integration remains efficient and up-to-date.",
        link: "/",
    },
];