import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'

const choose = [
    {
        id: 1,
        title: 'Tailored Solutions',
        detials: 'Every business is unique, and so are its needs. We offer bespoke integration services that fit your specific requirements, ensuring smooth and efficient data flow between QuickBooks and your favorite business applications.'
    },
    {
        id: 2,
        title: 'Save Time and Reduce Errors',
        detials: 'Manual data entry is prone to errors and time-consuming. Our automated integrations help you save time and reduce the risk of costly mistakes, ensuring your financial data is always accurate and up-to-date.'
    },
    {
        id: 3,
        title: 'Expert Team',
        detials: 'Our team of experienced developers and financial experts are dedicated to providing top-notch integration services. We understand the intricacies of QuickBooks and the various third-party apps you use, ensuring a seamless integration process.'
    },
    {
        id: 4,
        title: 'Comprehensive Support',
        detials: 'From initial consultation to ongoing support, we are with you every step of the way. Our commitment to customer satisfaction means you can rely on us for continuous support and updates as your business grows.'
    },
]

const WhyUs = () => {
    return (
        <Container className='w-full'>
            <div className=''>
                <div className='flex flex-col gap-5 w-full'>
                    <p className='font-bold text-primary-parrot'>WHY CHOOSE US?</p>
                    <h2 className='heading_2'>The Reason why you should choose <span className='font-bold text-primary-parrot'>Quickapps Lab</span></h2>
                </div>

                <div className='grid md:grid-cols-12 grid-cols-1 mt-[100px]'>
                    <div className='col-span-5 md:flex hidden'>
                        <Image src={'/choose.png'} width={489} height={612} alt='why-choose-us' className='rounded-[40px] h-full object-fill w-full' />
                    </div>
                    <div className='md:flex hidden' />
                    <div className='col-span-6'>
                        <div className='flex flex-col gap-[40px]'>
                            {
                                choose.map((item) => (
                                    <div key={item.id}>
                                        <h4 className='text-2xl font-bold text-secondary-navy mb-[15px]'>{item.title}</h4>
                                        <p className='text-muted-stone leading-[150%]'>{item.detials}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-span-5 md:hidden flex md:mt-0 mt-10'>
                        <Image src={'/choose.png'} width={489} height={612} alt='why-choose-us' className='rounded-[40px] h-full object-fill w-full' />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default WhyUs