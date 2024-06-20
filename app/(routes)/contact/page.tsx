
import Container from '@/components/Container'
import Form from '@/components/Form'
import React from 'react'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
}

const Contact = () => {
  return (
    <Container className='sm:my-[100px] my-[36px]'>
      <div className='grid md:grid-cols-2 grid-cols-1 w-full items-start gap-8'>
        <div>
          <h2
            className="heading_2"
          >
            Let&apos;s <span className='font-bold text-primary-parrot'>connect!</span>
          </h2>
          <p className='md:text-[20px] text-[16px] text-muted-stone mt-6 leading-[150%]'>
            Contact us today for a free consultation to learn how we can help you save time and money, integrating your data directly into QuickBooks
          </p>
        </div>
        <Form />
      </div>
    </Container>
  )
}

export default Contact