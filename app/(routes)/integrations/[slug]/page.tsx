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

    console.log(data)

    return (
        <Container className="py-[80px]">
            <div className="mt-8">
                <h1 className="text-white">
                    <span className="block text-base text-center  font-semibold tracking-wide uppercase">
                        Jan Marshal - Blog
                    </span>
                    <span className="text-white">
                        {data.title}
                    </span>
                </h1>
\

                <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-white">
                    <PortableText value={data.content} />
                </div>
            </div>
        </Container>
    )
}

export default Article