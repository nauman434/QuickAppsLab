import Container from '@/components/Cotainer'
import { Button } from '@/components/ui/button'
import React from 'react'

const Contact = () => {
  return (
    <Container className='py-[80px] flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-10 items-center justify-center'>
            <div className='md:w-[70vw] w-full'>
                <h2 className='text-center md:text-[50px] text-[40px] font-bold font-syne text-white'>Ready to transform your financial management with seamless QuickBooks integrations?</h2>
                <p className='font-syne text-center mt-4 text-gray-500'>Contact us today for a free consultation and discover how we can help your business thrive.</p>
            </div>
            <div>
                <Button className='rounded-full text-[16px] h-[55px] w-[137px] hover:transition-all hover:scale-105 ease-out duration-300 bg-white text-black hover:bg-white font-syne'>
                    Let's talk
                </Button>
            </div>
        </div>
    </Container>
  )
}

export default Contact