import React from 'react'
import Container from './Cotainer'
import Logo from './Logo'
import Link from 'next/link'

const navLinks = [
    {
        name: "Home",
        link: '/'
    },
    {
        name: "Integrations",
        link: '/integrations'
    },
    {
        name: "About Us",
        link: '/about'
    },
    {
        name: "Contact",
        link: '/contact'
    },
]

const Footer = () => {
    return (
        <Container className='py-[80px]'>
            <div className='grid md:grid-cols-2 grid-cols-1 items-center justify-center gap-8'>
                <div className='flex md:justify-start justify-center'>
                    <Logo />
                </div>
                <div className='flex md:justify-end justify-center'>
                    <div className='flex justify-center'>
                        <ul className='flex sm:flex-row flex-col items-center gap-8'>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.link} className='font-syne font-medium text-white text-center'>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer