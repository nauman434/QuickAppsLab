import { client, urlFor } from '@/lib/sanity'
import Link from 'next/link'
import React from 'react'

interface ArticleData {
    title: string;
    currentSlug: string;
    smallDescription: string;
    image: any;
    _createdAt: string;
}

async function getData(): Promise<ArticleData[]> {
    const query = `
      *[_type == 'articles' && trending == true] | order(_createdAt desc) {
          title,
          "currentSlug": slug.current,
          smallDescription,
          image,
          _createdAt
      }
      `;

    const data: ArticleData[] = await client.fetch(query);

    if (!data) {
        throw new Error("Failed to fetch data");
    }

    return data;
}

const Trending = async () => {
    const data = await getData();

    return (
        <Link href={`/blogs/${data[0]?.currentSlug}`} className='pb-[30px]'>
            <div className='relative w-full h-[400px] bg-gray-200 pb-[30px] rounded-[20px]'
                style={{ backgroundImage: `url(${urlFor(data[0]?.image).url()})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='absolute inset-0 bg-secondary-navy bg-opacity-90 rounded-[20px]'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4'>
                    <h2 className='text-2xl font-bold'>{data[0]?.title}</h2>
                    <p className='mt-2'>{data[0]?.smallDescription}</p>
                </div>
            </div>
        </Link>
    )
}

export default Trending