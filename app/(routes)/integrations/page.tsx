import Container from '@/components/Cotainer'
import React from 'react'
import Hero from '../_components/hero'
import { client, urlFor } from '@/lib/sanity'
import { blogCard } from '@/lib/interface'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

async function getData() {
    const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
        company,
        "currentSlug": slug.current,
        smallDescription,
        image
    }
    `

    const data = await client.fetch(query, {
        next: {
            revalidate: 10
        }
    })

    if (!data) {
        throw new Error("Failed to fetch data");
    }


    return data;

}


const Integrations = async () => {
    const data: blogCard[] = await getData()

    return (
        <Container className='py-[80px]'>
            <Hero />
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
                {
                    data.map((item, index) => (
                        <div key={index} className='rounded-lg flex flex-col gap-5 p-5 bg-[#1F1F1F]  hover:bg-primary-green hover:bg-opacity-50 cursor-default items-start transition-all ease-in-out duration-100'>
                            <div className='p-2 bg-gray-200 rounded-sm'>
                                <Image src={urlFor(item.image).url()} width={200} height={200} alt={item.company} />
                            </div>
                            <h2 className='font-bold font-syne text-2xl text-white'>
                                {item.company}
                            </h2>
                            <p className='text-gray-400 font-syne tracking-wide'>
                                {item.smallDescription}
                            </p>
                            <Button className='text-primary-green underline p-0' variant={'link'}>
                                <Link href={`/integrations/${item.currentSlug}`}>
                                Learn more
                                </Link>
                            </Button>
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}

export default Integrations