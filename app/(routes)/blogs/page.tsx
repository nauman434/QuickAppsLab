import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { client, urlFor } from '@/lib/sanity';
import { Calendar, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import moment from 'moment'; // Import Moment.js
import Categories from './_components/categories';
import Trending from './_components/trending';

interface ArticleData {
  title: string;
  currentSlug: string;
  smallDescription: string;
  image: any;
  _createdAt: string;
  smallImage: any;
}

const categories = [
  {
    name: 'All',
  },
  {
    name: 'Trending',
  },
  {
    name: 'Integrations',
  },
  {
    name: 'Latest',
  },
];

async function getData(): Promise<ArticleData[]> {
  const query = `
    *[_type == 'articles'] | order(_createdAt desc) {
        title,
        "currentSlug": slug.current,
        smallDescription,
        image,
        _createdAt,
        smallImage
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
    <Container className='py-[80px] flex flex-col gap-10'>
      <div className='py-[30px]  flex flex-col gap-10 items-center 
       '>
        <div className='flex flex-col items-center'>
          <h2 className='text-center md:text-[64px] text-[28px] font-bold font-syne md:w-[70vw] w-full text-primary mb-8 text-secondary-navy'>Discover Nice Articles</h2>
          <p className='md:text-[20px] text-[16px] text-muted-stone md:w-[631px] w-full text-center'>All the articles and contents of the site have been updated today and you can find your articles and contests quickly without any problems</p>
        </div>
        <div className='flex md:flex-row flex-col md:items-center items-start w-full gap-10'>
          <Categories />
        </div>
      </div>
      <div className='flex gap-6 items-center justify-center'>
        <div className='w-full h-[1px] bg-muted-stone' />
        <h4 className='font-bold uppercase'>Trending</h4>
        <div className='w-full h-[1px] bg-muted-stone' />
      </div>
      <div>
        <Trending />
        <div className='flex gap-6 items-center justify-center pt-[50px]'>
          <div className='w-full h-[1px] bg-muted-stone' />
          <h4 className='font-bold uppercase'>Popular</h4>
          <div className='w-full h-[1px] bg-muted-stone' />
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 py-[50px] gap-6'>
          {
            data.map((item, index) => (
              <div key={index} className=''>
                <div className='flex flex-col gap-[25px] cursor-pointer'>
                  <Image src={urlFor(item.smallImage).url()} width={380} height={270} alt={item.title} className='rounded-[20px] w-full h-[270px] object-fit ' />
                  <div className='flex gap-2 flex-col border-b pb-4'>
                    <h4 className='text-xl h-[60px] font-bold text-secondary-navy'>{item.title}</h4>
                    <p>{item.smallDescription}</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='flex'>
                      <Calendar />
                      <p className='ml-2'>{moment(item._createdAt).format('MMMM Do YYYY')}</p> {/* Format date using Moment.js */}
                    </div>
                    <Button className='btn'>
                      <Link href={`/blogs/${item.currentSlug}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </Container>
  );
}

export const revalidate = 10;

export default ArticlesPage;
