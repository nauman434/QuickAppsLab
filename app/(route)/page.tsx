import React from 'react'
import Hero from './_components/hero'
import AboutSec from './_components/about-sec'
import WhyUs from './_components/why-us'
import Serve from './_components/serve'
import HowWorks from './_components/how-works'
import Contact from './_components/contact'
import Container from '@/components/Container'
import { client, urlFor } from '@/lib/sanity'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

interface ArticleData {
  title: string;
  currentSlug: string;
  smallDescription: string;
  image: any;
}

async function getData(): Promise<ArticleData[]> {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
        company,
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

  const transformedItems = data.map(article => ({
    image: urlFor(article.image).url(),
    name: article.title,
  })).slice(0, 15); 

  return (
    <main className='sm:my-[100px] my-[36px]  flex flex-col w-full gap-[100px]'>
      <Hero />
      <Container className=''>
        <div className='flex flex-col items-center'>
          <h4 className='font-bold text-muted-stone text-xl'>Software we integrate to QuickBooks</h4>
          <div className=''>
            <InfiniteMovingCards
              items={transformedItems}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </Container>
      <AboutSec />
      <WhyUs />
      <Serve />
      <div className='bg-secondary-navy py-[65px]'>
        <HowWorks />
      </div>
      <Contact />
    </main>
  )
}

export const revalidate = 10;

export default Home
