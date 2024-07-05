'use client'
import { Input } from '@/components/ui/input'
import { BlogCard } from '@/lib/interface';
import { client, urlFor } from '@/lib/sanity';
import { Search } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

async function searchBlogs(title: string) {
    const query = `
      *[_type == "articles" && title match '${title}*'] {
          "currentSlug": slug.current,
          title,
          image
      }
    `;

    const data = await client.fetch(query);

    return data;
}

const Categories: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<BlogCard[]>([]);

    const handleSearch = async () => {
        if (searchTerm.trim() === "") {
            setSearchResults([]);
            return;
        }
        const results = await searchBlogs(searchTerm);
        console.log('Fetched results:', results);  // Debug log
        setSearchResults(results);
    };

    useEffect(() => {
        handleSearch();
    }, [searchTerm]);


    return (
        <div className='relative w-full flex justify-center'>
            <div className='flex items-center gap-2 bg-gray-100 border-secondary-navy border px-4 rounded-full md:w-[50%] w-full'>
                <Search className='text-secondary-navy' />
                <Input
                    className='bg-transparent border-none outline-none text-secondary-navy h-[50px]'
                    placeholder='Search...'
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {
                searchResults.length > 0 && (
                    <div className="absolute bg-white p-6 top-[120%] md:w-[50%] w-full rounded-[30px] border flex flex-col gap-6 shadow-lg z-50">
                        {searchResults.map((result, index) => (
                            <div
                                key={result.currentSlug}
                                className={`flex items-center  ${index < searchResults.length - 1 ? 'border-b pb-4' : 'pb-0'}`}
                            >
                                <Image
                                    src={urlFor(result.image).url()}
                                    width={50}
                                    height={50}
                                    alt={result.title}
                                    className="mr-4"
                                />
                                <Link href={`/blogs/${result.currentSlug}`} className="text-primary-parrot hover:underline transition-all ease-in-out duration-300">
                                    {result.title}
                                </Link>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Categories