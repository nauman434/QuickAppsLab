import Container from '@/components/Container'
import React from 'react'

const works = [
    {
        id: 1,
        title: "Consultation",
        description:
            "We start with a detailed consultation to understand your business needs and the apps you use.",
        link: "/",
    },
    {
        id: 2,
        title: "Custom Integration Plan",
        description:
            "Our experts design a tailored integration plan that fits your specific requirements.",
        link: "/",
    },
    {
        id: 3,
        title: "Development & Implementation",
        description:
            "We develop and implement the integration, ensuring a smooth and efficient data transfer process.",
        link: "/",
    },
    {
        id: 4,
        title: "Ongoing Support",
        description:
            "We provide continuous support and updates to ensure your integration remains efficient and up-to-date.",
        link: "/",
    },
];

const HowWorks = () => {
    return (
        <Container>
            <div className='flex flex-col w-full gap-[50px]'>
                <h2 className='heading_2 text-muted-sky text-center'>
                    How it Works?
                </h2>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-[30px]'>
                    {
                        works.map((item) => (
                            <div key={item.id} className='group p-[30px] rounded-[30px] bg-[#0F3541] hover:bg-primary-parrot transition-all ease-in-out h-[177px] flex flex-col justify-center gap-[15px]'>
                                <h4 className='text-2xl text-white'>{item.title}</h4>
                                <p className='text-muted-stone  group-hover:text-white'>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    )
}

export default HowWorks