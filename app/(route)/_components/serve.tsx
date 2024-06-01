'use client'

import Container from '@/components/Cotainer';
import React, { useState } from 'react';
import { motion } from 'framer-motion'

interface ServingItem {
    id: string;
    name: string;
    detail: string;
}

const Serving: ServingItem[] = [
    {
        id: "01",
        name: 'Companies',
        detail: "Streamline your operations and gain better control over your financial data. Whether you’re a small business or a large enterprise, our integrations help you operate more efficiently and make informed decisions."
    },
    {
        id: "02",
        name: 'Accountants',
        detail: "Simplify your workload with automated data transfers, allowing you to focus on providing valuable insights and strategic advice to your clients. Our integrations help you maintain accurate and up-to-date financial records effortlessly."
    },
    {
        id: "03",
        name: 'Finance Teams',
        detail: "Enhance your financial management with real-time data synchronization. Our integrations ensure your financial reports are always current, enabling you to make timely and informed financial decisions."
    },
];

const Serve: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleDetail = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <Container className='py-[80px]'>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center md:gap-6 gap-10'>
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 0.5,
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        className="text-start md:text-[80px] text-[40px] font-bold font-syne text-white"
                    >
                        Who We Serve
                    </motion.h2>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                >
                    <div className='flex flex-col gap-6'>
                        {Serving.map((item, index) => (
                            <div
                                key={index}
                                className={`border p-6 flex flex-col text-white  ${activeIndex === index ? 'bg-primary-green bg-opacity-50 gap-4 ' : 'bg-transparent'}`}
                            >
                                <div
                                    className='flex items-center justify-between cursor-pointer'
                                    onClick={() => toggleDetail(index)}
                                >
                                    <h4 className='sm:text-[36px] text-2xl font-syne font-bold'>{item.name}</h4>
                                    <span className='text-[36px] font-syne font-bold'>{item.id}</span>
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'
                                        }`}
                                >
                                    <p className='text-gray-100 font-syne tracking-wide text-lg'>
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </Container>
    );
};

export default Serve;