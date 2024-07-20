import Container from "@/components/Container";
import FAQs from "@/components/FAQs";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/comments-card";
import { FullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { MessageCircleDashed } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

interface BlogData {
  company: string;
  currentSlug: string;
  smallDescription: string;
  metatitle: string;
  image: any;
}

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        metatitle,
metadescription,
        content,
        smallDescription,
        image,
        keyBenefits,
        offer,
        steps,
        chooseUs,
        faqs,
        testimonial
    }[0]
    `

  const data = await client.fetch(query)

  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

async function getAllData(): Promise<BlogData[]> {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
      company,
      "currentSlug": slug.current,
      smallDescription,
      image
  }
  `;

  const data: BlogData[] = await client.fetch(query);

  if (!data) {
    throw new Error("Failed to fetch data");
  }

  return data;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data: FullBlog = await getData(slug)


  return {
    title: data?.metatitle,
    description: data?.metadescription,
    alternates: {
      canonical: `/blogs/${params.slug}`,
      languages: {
        "en-US": `/blogs/${params.slug}`,
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





const Article = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const data: FullBlog = await getData(slug)
  const allData: BlogData[] = await getAllData()

  const shuffleArray = (array: BlogData[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle the allData array
  const shuffledData = shuffleArray([...allData]);



  return (
    <div>
      <Container className="py-[80px]">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="col-span-1 md:hidden flex justify-start">
            <Image src={urlFor(data.image).url()} width={200} height={200} alt={data.title} style={{ objectFit: 'contain', height: '100%' }} />
          </div>
          <div className="col-span-2">
            <h2 className="text-start md:text-[48px] text-[36px] font-bold font-syne w-full text-primary ">{data.title}</h2>
            <div className="mt-16 prose prose-blue dark:prose-invert prose-lg prose-headings:text-primary text-gray-500 prose-li:marker:text-white prose-a:text-blue-700">
              <PortableText value={data.content} />
            </div>
          </div>
          <div className="col-span-1 md:flex hidden justify-end">
            <Image src={urlFor(data.image).url()} width={200} height={200} alt={data.title} style={{ objectFit: 'contain', height: '100%' }} />
          </div>
        </div>
        <div className='flex flex-col w-full items-center gap-[50px] bg-secondary-navy sm:py-[95px] py-[55px] sm:px-[65px] px-[35px] rounded-[50px] mt-[100px]'>
          <div className="flex items-center justify-center gap6">
            <h2 className='heading_2 text-muted-sky text-center'>
              Key Benefits
            </h2>
            <Image src="/stars_dark.svg" width={119} height={131} alt='stars' className='md:w-[119px] w-[72px] md:h-[131px] h-[79px]' />
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-[30px]'>
            {
              data.keyBenefits.map((item) => (
                <div key={item.id} className='group p-[30px] rounded-[30px] bg-[#0F3541] hover:bg-primary-parrot transition-all ease-in-out h-[177px] flex flex-col justify-center gap-[15px]'>
                  <h4 className='text-2xl text-white h-[100px]'>{item.heading}</h4>
                  <p className='text-muted-stone  group-hover:text-white'>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='mt-[100px]'>


          <div className='grid md:grid-cols-12 grid-cols-1 mt-[100px] gap-6'>
            <div className='flex flex-col gap-5 w-full col-span-5'>
              <p className='font-bold text-primary-parrot'>WHAT WE OFFER?</p>
              <h2 className='heading_2'>We offer a wide variety of different services</h2>
            </div>
            <div className='md:flex hidden' />
            <div className='col-span-6'>
              <div className='flex flex-col gap-[40px]'>
                {
                  data.offer.map((item) => (
                    <div key={item.id}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-[10px] h-[10px] bg-secondary-navy flex items-center justify-center rounded-full">

                        </div>
                        <h4 className='text-2xl font-bold text-secondary-navy '>{item.heading}</h4>
                      </div>
                      <p className='text-muted-stone leading-[150%] ml-8'>{item.description}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full gap-[50px] mt-[100px]'>
          <h2 className='heading_2 text-secondary-navy text-start'>
            How it works?
          </h2>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-[30px]'>
            {
              data.steps.map((item) => (
                <div key={item.id} className='group p-[30px] rounded-[30px] bg-[#0F3541] hover:bg-primary-parrot transition-all ease-in-out h-[177px] flex flex-col justify-center gap-[15px]'>
                  <h4 className='text-2xl text-white'>{item.heading}</h4>
                  <p className='text-muted-stone  group-hover:text-white'>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>

        <div className='mt-[100px]'>
          <div className='flex flex-col gap-5 w-full'>
            <p className='font-bold text-primary-parrot'>WHY CHOOSE US?</p>
            <h2 className='heading_2'>The Reason why you should choose <span className='font-bold text-primary-parrot'>Quickapps Lab</span></h2>
          </div>

          <div className='grid md:grid-cols-12 grid-cols-1 mt-[100px]'>
            <div className='col-span-5 md:flex hidden'>
              <Image src={'/choose.png'} width={489} height={612} alt='why-choose-us' className='rounded-[40px] h-full object-fill w-full' />
            </div>
            <div className='md:flex hidden' />
            <div className='col-span-6'>
              <div className='flex flex-col gap-[40px]'>
                {
                  data.chooseUs.map((item) => (
                    <div key={item.id}>
                      <h4 className='text-2xl font-bold text-secondary-navy mb-[15px]'>{item.heading}</h4>
                      <p className='text-muted-stone leading-[150%]'>{item.description}</p>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className='col-span-5 md:hidden flex md:mt-0 mt-10'>
              <Image src={'/choose.png'} width={489} height={612} alt='why-choose-us' className='rounded-[40px] h-full object-fill w-full' />
            </div>
          </div>
        </div>
      </Container>
      <div className="">
        <div className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <Container>
            <div className='flex flex-col gap-5 w-full items-center'>
              <div className="flex items-center gap-2 bg-secondary-navy px-4 py-2 rounded-tl-full rounded-r-full">
                <MessageCircleDashed className="text-muted-sky w-5 h-5" />
                <p className='text-muted-sky text-sm'>Testimonial</p>
              </div>
              <h2 className='heading_2 text-center mb-[50px]'>What Clients Our Says?</h2>
            </div>
          </Container>
          <div className="banner-container">
            <div className="banner-content">
              {data.testimonial.map((item, index) => (
                <div className="w-[400px] bg-secondary-navy p-6 rounded-3xl flex flex-col gap-8" key={index}>
                  <p className="text-muted-sky"><span className="font-bold text-4xl text-primary-parrot">&quot;</span>{" "}{item.quote}</p>
                  <div>
                    <p className="font-bold text-primary-parrot">
                      {item.name}
                    </p>
                    <p className="text-sm text-muted-sky">
                      {item.occupation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Container className="mt-[100px]">
        <h2 className="heading_2 mb-[50px]">Similar Integrations</h2>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
          {shuffledData.slice(0, 3).map((item, index) => (
            <div key={index} className='rounded-lg flex flex-col gap-5 p-5 border hover:border-primary-parrot hover:bg-opacity-50 cursor-default items-start transition-all ease-in-out duration-100'>
              <div className='p-2 h-[100px] rounded-sm flex justify-start items-start'>
                <Image src={urlFor(item.image).url()} width={200} height={200} alt={item.company} style={{ objectFit: 'contain', height: '100%' }} />
              </div>

              <h2 className='font-bold font-syne text-2xl text-primary'>
                {item.company}
              </h2>
              <p className='text-gray-400 font-syne tracking-wide'>
                {item.smallDescription}
              </p>
              <Button className='text-primary-parrot underline p-0' variant={'link'}>
                <Link href={`/integrations/${item.currentSlug}`}>
                  Learn more
                </Link>
              </Button>
            </div>
          ))}
        </div>
        <div className='bg-secondary-navy sm:py-[95px] py-[55px] sm:px-[65px] px-[35px] rounded-[50px] mt-[100px]'>
          <div className='mb-10'>
            <h2 className='heading text-muted-sky'>
              Get Started with <span className="text-primary-parrot">{data.title}</span>
            </h2>
          </div>
          <div className='flex md:flex-row flex-col gap-8 md:items-center items-start justify-between'>
            <div>
              <Image src="/stars_dark.svg" width={119} height={131} alt='stars' className='md:w-[119px] w-[72px] md:h-[131px] h-[79px]' />
            </div>
            <div className='md:w-[631px] w-full flex flex-col gap-[30px]'>
              <p className='md:text-[20px] text-[16px] text-muted-sky '>
                Contact us today for a free consultation and discover how we can help your business thrive.
              </p>
              <Button className="btn">
                <Link href={'https://cal.com/QuickAppsLab/intro'} target='_blank'>
                  Let&apos;s talk
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <FAQs data={data} />
      </Container>
    </div>
  )
}

export const revalidate = 10;

export default Article
