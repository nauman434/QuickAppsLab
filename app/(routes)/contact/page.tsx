
import Container from '@/components/Container'
import Form from '@/components/Form'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact',
}

const Contact = () => {
  return (
    <Container className='py-24 flex flex-col justify-center items-center'>
      <div className='grid md:grid-cols-2 grid-cols-1 w-full items-center gap-6'>
        <div>
          <h2
            className="font-bold text-start text-[40px] md:text-[84px] text-primary md:w-[40vw] w-full font-syne"
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