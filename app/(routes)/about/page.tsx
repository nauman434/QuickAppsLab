import Container from '@/components/Container'
import React from 'react'
import Hero from './_components/hero'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { Metadata } from 'next'
import { client, urlFor } from '@/lib/sanity'

export const metadata: Metadata = {
    title: 'About',
}

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

const About = async () => {
    const data = await getData();

  const transformedItems = data.map(article => ({
    image: urlFor(article.image).url(),
    name: article.title,
  })).slice(0, 15); 

    return (
        <Container className='py-[80px] flex flex-col items-center'>
            <Hero />
            <div className='mt-20 flex flex-col items-center'>
                <h4 className='font-bold text-muted-stone text-xl'>Software we integrate to QuickBooks</h4>
                <InfiniteMovingCards
                    items={transformedItems}
                    direction="right"
                    speed="slow"
                />
            </div>
        </Container>
    )
}

export default About