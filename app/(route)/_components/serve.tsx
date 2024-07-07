import Container from '@/components/Container'
import React from 'react'

const serve = [
    {
        id: 1,
        title: 'Companies',
        details: "Streamline your operations and gain better control over your financial data. Whether you're a small business or a large enterprise, our integrations help you operate more efficiently and make informed decisions."
    },
    {
        id: 2,
        title: 'Accountants',
        details: 'Simplify your workload with automated data transfers, allowing you to focus on providing valuable insights and strategic advice to your clients. Our integrations help you maintain accurate and up-to-date financial records effortlessly.'
    },
    {
        id: 3,
        title: 'Finance Teams',
        details: 'Enhance your financial management with real-time data synchronization. Our integrations ensure your financial reports are always current, enabling you to make timely and informed financial decisions.'
    },
]

const Serve = () => {
    return (
        <Container className='w-full'>
            <div className='md:w-[585px] w-full'>
                <h2 className='heading_2 text-secondary-navy'>
                    Who We Serve
                </h2>
                <p className='text-muted-stone leading-[150%] mt-[25px]'>
                    Our tailored services cater to a diverse range of clients, ensuring seamless integration and efficient solutions to meet unique business needs.
                </p>
            </div>
            <div className='w-full flex flex-col sm:gap-[80px] gap-6 mt-[100px]'>
                {
                    serve.map((item) => (
                        <div key={item.id} className='flex flex-wrap items-center justify-between'>
                            <div className='flex  items-center md:gap-[70px] gap-3 sm:text-[48px] text-[24px] font-bold'>
                                <div className='w-[40px]'>
                                    <p className='text-primary-parrot '>{item.id}.</p>
                                </div>
                                <h2 className='text-secondary-navy'>{item.title}</h2>
                            </div>
                            <p className='md:w-[585px] w-full leading-[150%] text-muted-stone'>{item.details}</p>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}

export default Serve