'use client'
import React, { useState } from 'react';
import Container from './Container';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Separator } from './ui/separator';

//create array of objects with name and link
const navLinks = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Integrations',
        link: '/integrations'
    },
    {
        name: 'About Us',
        link: '/about'
    },
];
const navMobLinks = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Integrations',
        link: '/integrations'
    },
    {
        name: 'About Us',
        link: '/about'
    },
    {
        name: 'Contact',
        link: '/contact'
    },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Container className="">
            <nav className="grid md:grid-cols-3 grid-cols-2 py-[22px] items-center">
                <div className="flex justify-start items-center">
                    <Logo />
                </div>
                <div className="md:flex hidden justify-center">
                    <ul className="flex gap-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.link} className="font-syne font-medium text-primary">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:flex hidden justify-end items-center gap-4">
                    <Button variant={'outline'} className="rounded-full text-[16px] h-[55px] w-[137px] hover:transition-all hover:scale-105 ease-out duration-300 hover:border-primary-green text-primary">
                        <Link href={'/contact'}>
                            Contact
                        </Link>
                    </Button>
                    <Button className="rounded-full text-[16px] h-[55px] w-[137px] hover:transition-all hover:scale-105 ease-out duration-300 bg-primary-green hover:bg-primary-green text-primary">
                        <Link href={'https://cal.com/quickappslab/intro'}>
                            Let&apos;s talk
                        </Link>
                    </Button>
                </div>
                <div className="md:hidden flex justify-end">
                    {menuOpen ? (
                        <X className="text-primary cursor-pointer transition-transform transform rotate-0 duration-300" onClick={toggleMenu} />
                    ) : (
                        <Menu className="text-primary cursor-pointer transition-transform transform rotate-180 duration-300" onClick={toggleMenu} />
                    )}
                </div>
            </nav>
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center py-6 text-primary transition-all duration-300 ease-in-out">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        {navMobLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.link} className="font-syne font-medium text-primary" onClick={toggleMenu}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Button className="rounded-full text-[16px] h-[55px] w-[137px] hover:transition-all hover:scale-105 ease-out duration-300 bg-primary-green hover:bg-primary-green text-primary mt-4">
                        Let&apos;s talk
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default Navbar;
