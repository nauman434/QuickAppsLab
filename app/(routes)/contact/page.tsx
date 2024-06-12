
import Container from '@/components/Container'
import Form from '@/components/Form'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact',
}

const Contact = () => {
  return (
    <Container className='sm:my-[100px] my-[36px]'>
      <div className='grid md:grid-cols-2 grid-cols-1 w-full items-start gap-6'>
        <div>
          <h2
            className="heading_2"
          >
            Let's Create <span className='font-bold text-primary-parrot'>Progress</span> Together
          </h2>
          <p className='md:text-[24px] text-[16px] text-muted-stone mt-6 leading-[150%]'>
            Contact us today for a free consultation and discover how we can help your business thrive.
          </p>
        </div>
        <Form />
      </div>
    </Container>
  )
}

export default Contact