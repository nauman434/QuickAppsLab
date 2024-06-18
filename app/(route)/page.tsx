import React from 'react'
import Hero from './_components/hero'
import AboutSec from './_components/about-sec'
import WhyUs from './_components/why-us'
import { Separator } from '@/components/ui/separator'
import Serve from './_components/serve'
import HowWorks from './_components/how-works'
import Contact from './_components/contact'
import Container from '@/components/Container'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BlogSec from './_components/blog-sec'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

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


const Home = async () => {
  return (
    <main className='sm:my-[100px] my-[36px]  flex flex-col w-full gap-[100px]'>
      <Hero />
      <Container className=''>
        <div className=''>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </Container>
      <AboutSec />
      <WhyUs />
      <Serve />
      <div className='bg-secondary-navy py-[65px]'>
        <HowWorks />
      </div>
      <BlogSec />
      <Contact />
    </main>
  )
}

export default Home

