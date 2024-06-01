import Container from "@/components/Cotainer";
import { blogCard, fullBlog } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
    const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        content,
    }[0]
    `

    const data = await client.fetch(query)

    if (!data) {
        throw new Error("Failed to fetch data");
    }

    return data;
}

const Article = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    const data: fullBlog = await getData(slug)


    return (
        <Container className="py-[80px]">
            <div className="mt-8">
                <h1 className="text-start md:text-[64px] text-[48px] font-bold font-syne w-full text-white ">
                    {data.title}
                </h1>


                <div className="mt-16 prose prose-gray dark:prose-invert prose-lg prose-headings:text-white text-gray-300 prose-li:marker:text-white prose-a:text-blue-700">
                    <PortableText value={data.content} />
                </div>
            </div>
        </Container>
    )
}

export default Article