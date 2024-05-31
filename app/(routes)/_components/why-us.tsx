import Container from '@/components/Cotainer'
import React from 'react'

const WhyUs = () => {
    return (
        <Container className='py-[80px] flex flex-col justify-start items-center gap-10'>
            <h2 className='text-center md:text-[80px] text-[48px] font-bold font-syne md:w-[70vw] w-full'>Why Choose Us?</h2>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6 w-full'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full h-[250px] bg-gray-400'>

                        </div>
                        <h4 className='text-[36px] font-syne font-bold'>Tailored Solutions</h4>
                        <p className='font-syne text-gray-500 tracking-wide'>Every business is unique, and so are its needs. We offer bespoke integration services that fit your specific requirements, ensuring smooth and efficient data flow between QuickBooks and your favorite business applications.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full h-[250px] bg-gray-400'>

                        </div>
                        <h4 className='text-[36px] font-syne font-bold'>Expert Team</h4>
                        <p className='font-syne text-gray-500 tracking-wide'>Our team of experienced developers and financial experts are dedicated to providing top-notch integration services. We understand the intricacies of QuickBooks and the various third-party apps you use, ensuring a seamless integration process.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6 md:mt-10 mt-0'>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full h-[250px] bg-gray-400'>

                        </div>
                        <h4 className='text-[36px] font-syne font-bold'>Save Time and Reduce Errors</h4>
                        <p className='font-syne text-gray-500 tracking-wide'>Manual data entry is prone to errors and time-consuming. Our automated integrations help you save time and reduce the risk of costly mistakes, ensuring your financial data is always accurate and up-to-date.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='w-full h-[250px] bg-gray-400'>

                        </div>
                        <h4 className='text-[36px] font-syne font-bold'>Comprehensive Support</h4>
                        <p className='font-syne text-gray-500 tracking-wide'>From initial consultation to ongoing support, we are with you every step of the way. Our commitment to customer satisfaction means you can rely on us for continuous support and updates as your business grows.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default WhyUs