import Container from '@/components/Container'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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


const ArticlesPage = async () => {
    const data = await getData();

  return (
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
      </Container>
  )
}

export default ArticlesPage