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

interface ArticleData {
  title: string;
  currentSlug: string;
  smallDescription: string;
  image: any;
}

async function getData(): Promise<ArticleData[]> {
  const query = `
  *[_type == 'articles'] | order(_createdAt desc) {
      title,
      "currentSlug": slug.current,
      smallDescription,
      image
  }
  `;

  const data: ArticleData[] = await client.fetch(query);


  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}


const Home = async () => {
  const data = await getData();



  return (
    <main>
      <Hero />
      <AboutSec />
      <Separator className='bg-gray-800' />


      <WhyUs />
      <Separator className='bg-gray-800' />
      <Serve />
      <HowWorks />
      <Separator className='bg-gray-800' />
      <Container className='py-[80px] flex flex-col gap-10 items-center justify-center'>
        <div className='grid md:grid-cols-3 grid-cols-1'>
          {
            data.map((item) => (
              <div key={item.currentSlug} >
                <Link href={`/articles/${item.currentSlug}`} className='flex flex-col gap-6'>
                  <Image src={urlFor(item.image).url()} width={400} height={400} alt={item.title} className='w-full' />
                  <div>
                    <h2 className='font-bold font-syne text-2xl text-primary mb-2'>
                      {item.title}
                    </h2>
                    <p className='text-gray-400 font-syne tracking-wide'>
                      {item.smallDescription}
                    </p>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
        <div>
          <Button className="rounded-full text-[16px] h-[55px] w-[137px] hover:transition-all hover:scale-105 ease-out duration-300 bg-primary-green hover:bg-primary-green text-primary">
            <Link href='/articles'>
            All articles
            </Link>
          </Button>
        </div>
      </Container>
      <div className='bg-primary '>
        <Contact />
      </div>



    </main>
  )
}

export const revalidate = 10;

export default Home

