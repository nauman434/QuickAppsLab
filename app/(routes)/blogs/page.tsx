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
          data.map((item, index) => (
            <Link key={index} href={`/blogs/${item.currentSlug}`} className=''>
              <div className='flex flex-col gap-[25px]'>
                <Image src={urlFor(item.image).url()} width={380} height={394} alt={item.title} className='rounded-[50px] w-full h-[394px] object-cover ' />
                <h4 className='text-2xl font-bold text-secondary-navy'>{item.title}</h4>
              </div>
            </Link>
          ))
        }
      </div>
    </Container>
  )
}

export default ArticlesPage