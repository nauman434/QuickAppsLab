'use client'
import React, { useState } from 'react';
import Container from './Container';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

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
        name: 'About',
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
            <nav className="grid grid-cols-2 py-[22px] items-center">
                <div className="flex justify-start items-center">
                    <Logo />
                </div>
                <div className='flex items-center justify-end gap-[30px]'>
                    <div className="md:flex hidden justify-center">
                        <ul className="flex gap-[30px]">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.link} className="text-secondary-navy">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:flex hidden justify-end items-center gap-4">
                        <Button className="btn">
                            <Link href={'https://cal.com/quickappslab/intro'}>
                                Let&apos;s talk
                            </Link>
                        </Button>
                    </div>
                    <div className="md:hidden flex justify-end">
                        {menuOpen ? (
                            <X className="text-secondary-navy cursor-pointer transition-transform transform rotate-0 duration-300" onClick={toggleMenu} />
                        ) : (
                            <Menu className="text-secondary-navy cursor-pointer transition-transform transform rotate-180 duration-300" onClick={toggleMenu} />
                        )}
                    </div>
                </div>

            </nav>
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center py-6 text-primary transition-all duration-300 ease-in-out">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.link} className="text-secondary-navy" onClick={toggleMenu}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Container>
    );
};

export default Navbar;
