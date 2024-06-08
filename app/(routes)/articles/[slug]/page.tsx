import Container from '@/components/Container'
import { client, urlFor } from '@/lib/sanity'
import { PortableText } from 'next-sanity'
import Image from 'next/image';
import React from 'react'

export interface fullBlog {
    currentSlug: string;
    title: string;
    content: any;
    smallDescription: string;
    image: any,
}

async function getData(slug: string) {
    const query = `
    *[_type == "articles" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        content,
        image
    }[0]
    `

    const data = await client.fetch(query)

    if (!data) {
        throw new Error("Failed to fetch data");
    }

    return data;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const data: fullBlog = await getData(slug)

    return {
        title: data?.title,
        description: data?.smallDescription,
        alternates: {
            canonical: `/articles/${params.slug}`,
            languages: {
                "en-US": `/articles/${params.slug}`,
            }
        },
        twitter: {
            card: "summary_large_image",
            title: data?.title,
            description: data?.smallDescription,
            images: [urlFor(data?.image).url()],
            siteId: "0000328462",
            creator: "@nauman",
            creatorId: "328462"
        }
    };
}

const ArticleBlog = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const data: fullBlog = await getData(slug)

    return (
        <Container className="py-[80px]">
            <div className="mt-8 flex flex-col items-center justify-center">
                <h1 className="text-start md:text-[64px] text-[48px] font-bold font-syne w-full text-primary mb-8">
                    {data.title}
                </h1>
                <Image src={urlFor(data.image).url()} width={400} height={400} alt={data.title} className='w-full rounded-lg' />

                <div className="mt-16 prose prose-blue dark:prose-invert prose-lg prose-headings:text-primary text-gray-500 prose-li:marker:text-primary prose-a:text-blue-700">
                    <PortableText value={data.content} />
                </div>
            </div>
        </Container>
    )
}

export default ArticleBlog