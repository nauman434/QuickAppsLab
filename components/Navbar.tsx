import React from 'react'
import Container from './Cotainer'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import Logo from './Logo'
import { Separator } from './ui/separator'

//create array of objects with name and link
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

const Navbar = () => {
    return (
        <Container className=''>
            <nav className='grid md:grid-cols-3 grid-cols-2 py-[22px] items-center'>
                <div className='flex justify-start items-center'>
                    <Logo />
                </div>
                <div className='md:flex hidden justify-center'>
                    <ul className='flex gap-8'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.link} className='font-syne font-medium text-white'>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='sm:flex hidden justify-end'>
                    <Button className='rounded-full text-[16px] h-[55px] w-[137px] hover:transition-all hover:scale-105 ease-out duration-300 bg-primary-green hover:bg-primary-green text-primray'>Let&apos;s talk</Button>
                </div>
            </nav >
        </Container>
    )
}

export default Navbar
