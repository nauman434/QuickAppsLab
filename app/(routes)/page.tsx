import React from 'react'
import Hero from './_components/hero'
import AboutSec from './_components/about-sec'
import WhyUs from './_components/why-us'
import { Separator } from '@/components/ui/separator'
import Serve from './_components/serve'
import HowWorks from './_components/how-works'
import Contact from './_components/contact'
import { SparklesCore } from '@/components/ui/sparkles'

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSec />
      <Separator className='bg-gray-800' />
      
        
      <WhyUs />
      <Separator className='bg-gray-800' />
      <Serve />
      <div className='bg-primary '>
        <HowWorks />
        <Separator className='bg-gray-800' />
        <Contact />
      </div>
    </main>
  )
}

export default Home