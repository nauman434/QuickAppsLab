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
    <main className='sm:my-[100px] my-[36px]  flex flex-col w-full gap-[100px]'>
      <Hero />
      <AboutSec />
      <WhyUs />
      <Serve />
      <div className='bg-secondary-navy py-[65px]'>
        <HowWorks />
      </div>
      <BlogSec/>
      <Contact />
    </main>
  )
}

export const revalidate = 10;

export default Home

