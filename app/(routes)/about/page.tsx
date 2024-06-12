import Container from '@/components/Container'
import React from 'react'
import Hero from './_components/hero'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About',
  }

  const testimonials = [
    { image: '/Accelo.png', name: 'Accelo' },
    { image: '/Acuity Scheduling.png', name: 'Acuity Scheduling' },
    { image: '/ADP.png', name: 'ADP' },
    { image: '/Airbnb.png', name: 'Airbnb' },
    // { image: '/Amazon business.png', name: 'Amazon business' },
    { image: '/Amazon.png', name: 'Amazon' },
    { image: '/Appfolio.png', name: 'Appfolio' },
    { image: '/asana.png', name: 'Asana' },
    { image: '/Atera.png', name: 'Atera' },
    // { image: '/Authorizenet.png', name: 'Authorize.net' },
    { image: '/Airtable.png', name: 'Airtable' },
    { image: '/Avalara.png', name: 'Avalara' },
    { image: '/Bamboohr.png', name: 'Bamboohr' },
    { image: '/Bank of America.png', name: 'Bank of America' },
    { image: '/Basecamp.png', name: 'Basecamp' },
    { image: '/Bigcommerce.png', name: 'Bigcommerce' },
    { image: '/Bigtime.png', name: 'Bigtime' },
    { image: '/billcom.webp', name: 'Bill.com' },
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