import Container from '@/components/Container'
import React from 'react'
import Hero from './_components/hero'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
  }

const testimonials = [
    { image: '/Accelo.png' },
    { image: '/Acuity Scheduling.png' },
    { image: '/ADP.png' },
    { image: '/Airbnb.png' },
    { image: '/Amazon business.png' },
    { image: '/Amazon.png' },
    { image: '/Appfolio.png' },
    { image: '/asana.png' },
    { image: '/Atera.png' },
    { image: '/Authorizenet.png' },
    { image: '/Airtable.png' },
    { image: '/Avalara.png' },
    { image: '/Bamboohr.png' },
    { image: '/Bank of America.png' },
    { image: '/Basecamp.png' },
    { image: '/Bigcommerce.png' },
    { image: '/Bigtime.png' },
    { image: '/billcom.webp' },
  ];
  

const About = () => {
    return (
        <Container className='py-[80px]'>
            <Hero />
            <div className='mt-20'>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </Container>
    )
}

export default About