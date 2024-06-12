import Container from '@/components/Container'
import { Button } from '@/components/ui/button'
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

const BlogSec = async () => {
    const data = await getData();

    return (
        <Container className='w-full flex flex-col gap-[60px]'>
            <div className='flex justify-between flex-wrap items-start gap-5'>
                <div className='md:w-[593px] w-full'>
                    <h2 className='heading_2'>
                        Latest Insights from <span className='font-bold text-primary-parrot'>Quickapps Lab</span>
                    </h2>
                    <p className='text-muted-stone leading-[150%] mt-[25px]'>
                        Stay updated with our expert insights, industry trends, and practical tips to enhance your business efficiency.
                    </p>
                </div>
                <div>
                    <Button className="btn">
                        <Link href={'/blogs'}>
                            More blogs
                        </Link>
                    </Button>
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-[30px]'>
                {
                    data.map((item, index) => (
                        <Link key={index} href={`/articles/${item.currentSlug}`} className=''>
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

export const revalidate = 10;

export default BlogSec