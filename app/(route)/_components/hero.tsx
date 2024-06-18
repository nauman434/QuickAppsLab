import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <Container>
            <div className='grid md:grid-cols-12 grid-cols-1'>
                
                <div className='col-span-5'>
                    <h1 className='sm:text-[72px] text-[48px] leading-[150%]'>
                        Seamless Data Integration for Business
                    </h1>
                    <div className='mt-5'>
                        <p className='mb-5 text-muted-stone'>QuickApps Lab delivers cutting-edge solutions for effortless data integration, allowing you to focus on growing your business.</p>
                        <Button className="btn">
                            <Link href={'https://cal.com/quickappslab/intro'}>
                                Let&apos;s talk
                            </Link>
                        </Button>
                    </div>

                </div>
                <div className='md:col-span-2 col-span-1 flex items-center justify-center md:mt-0 mt-8'>
                    <Image src="/stars.svg" width={119} height={131} alt='stars' className='md:w-[119px] w-[72px] md:h-[131px] h-[79px]'/>
                </div>
                <div className='col-span-1'></div>
                <div className='col-span-4 md:flex hidden'>
                    <Image src="/hero_img.png" width={380} height={432} alt='hero-image' className='rounded-[40px] h-full object-cover object-center' />
                </div>
            </div>
        </Container>
    )
}

export default Hero