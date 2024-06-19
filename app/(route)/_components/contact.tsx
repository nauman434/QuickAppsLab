import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
    return (
        <Container className='w-full '>
            <div className='bg-secondary-navy sm:py-[95px] py-[55px] sm:px-[65px] px-[35px] rounded-[50px]'>
                <div className='mb-10'>
                    <h2 className='heading text-muted-sky'>
                        Ready to transform your financial management with seamless QuickBooks integrations?
                    </h2>
                </div>
                <div className='flex md:flex-row flex-col gap-8 md:items-center items-start justify-between'>
                    <div>
                        <Image src="/stars_dark.svg" width={119} height={131} alt='stars' className='md:w-[119px] w-[72px] md:h-[131px] h-[79px]' />
                    </div>
                    <div className='md:w-[631px] w-full flex flex-col gap-[30px]'>
                        <p className='md:text-[20px] text-[16px] text-muted-sky '>
                            Contact us today for a free consultation and discover how we can help your business thrive.
                        </p>
                        <Button className="btn">
                            <Link href={'https://cal.com/QuickAppsLabs/intro'} target='_blank'>
                                Let&apos;s talk
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contact