import Hero from '@/app/(route)/_components/hero'
import Container from '@/components/Cotainer'
import Form from '@/components/Form'
import React from 'react'

const Contact = () => {
  return (
    <Container className='py-24 flex flex-col justify-center items-center'>
      <Hero />
      <div className='grid md:grid-cols-2 grid-cols-1 w-full items-center'>
        <div>
          <h2
            className="font-bold text-start text-[40px] md:text-[84px] text-white md:w-[40vw] w-full font-syne"
          >
            Contact Us Now
          </h2>
        </div>
        <Form />
      </div>
    </Container>
  )
}

export default Contact