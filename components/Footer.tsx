import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const social = [
    {
        id: 1,
        img: '/facebook.svg',
        name: 'facebook'
    },
    {
        id: 2,
        img: '/linkedin.svg',
        name: 'linkedin'
    },
    {
        id: 3,
        img: '/x.svg',
        name: 'x'
    },
    {
        id: 4,
        img: '/insta.svg',
        name: 'insta'
    }
]

const explore = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'About',
        link: '/about'
    },
    {
        id: 3,
        name: 'Integrations',
        link: '/integrations'
    },
    {
        id: 4,
        name: 'Blogs',
        link: '/blogs'
    },

]

const company = [
    {
        id: 1,
        name: 'FAQ',
        link: '/faq'
    },
    {
        id: 2,
        name: 'Help',
        link: '/help'
    },
]

const Footer = () => {
    return (
        <Container className='pb-[100px] flex md:flex-row flex-col justify-between gap-[30px]'>
            <div className='md:w-[380px] w-full flex flex-col gap-[40px] 
             sm:items-start items-center'>
                <div className='flex flex-col gap-[20px] '>
                    <Logo />
                    <p className='text-muted-stone leading-[150%] sm:text-start text-center'>Simplify your workload with automated data transfers, allowing you to focus on providing valuable insights and strategic advice to your clients. Our integrations help you maintain accurate and up-to-date financial records effortlessly.</p>
                </div>
                <div className='flex items-center gap-[30px]'>
                    {
                        social.map((item) => (
                            <Image
                                src={item.img}
                                width={24}
                                height={24}
                                alt={item.name}
                                key={item.id}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='flex sm:items-start items-center sm:flex-row flex-col gap-[60px] sm:text-start text-center'>
                <div className='flex flex-col gap-[15px]'>
                    <p className='font-bold text-secondary-navy'>Explore</p>
                    {
                        explore.map((item) => (
                            <Link key={item.id} href={item.link}>
                                <p className='text-muted-stone mt-[10px] leading-[150%] cursor-pointer hover:text-secondary-navy'>{item.name}</p>
                            </Link>
                        ))
                    }
                </div>
                <div className='flex flex-col sm:items-start items-center gap-[15px]'>
                    <p className='font-bold text-secondary-navy'>Contact</p>

                    <p className='text-muted-stone mt-[10px] leading-[150%] cursor-pointer hover:text-secondary-navy'>
                        <Link href={'/contact'}>
                        Contact Us
                        </Link>
                    </p>
                    <Button className="btn">
                            <Link href={'https://cal.com/QuickAppsLabs/intro'} target='_blank'>
                                Let&apos;s talk
                            </Link>
                        </Button>
                </div>
            </div>
        </Container>
    )
}

export default Footer