import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'

const AboutSec = () => {
    return (
        <Container className='w-full '>
            <div className='bg-secondary-navy sm:py-[95px] py-[55px] sm:px-[65px] px-[35px] rounded-[50px]'>
                <div className='mb-10'>
                    <h2 className='heading text-muted-sky'>
                        Are you tired of manual data entry and fragmented financial records?
                    </h2>
                </div>
                <div className='flex md:flex-row flex-col gap-8 md:items-center items-start justify-between'>
                    <div>
                        <Image src="/stars_dark.svg" width={119} height={131} alt='stars' className='md:w-[119px] w-[72px] md:h-[131px] h-[79px]' />
                    </div>
                    <p className='md:text-[20px] text-[16px] text-muted-sky md:w-[631px] w-full'>
                        At Quickapps Lab, we specialize in creating custom integrations that effortlessly connect your business apps with Quickapps Lab. Our mission is to simplify your financial management, giving you more time to focus on what really matters—growing your business.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default AboutSec