// components/SearchBar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { blogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { Search } from 'lucide-react';
import Link from 'next/link';

async function searchBlogs(title: string) {
  const query = `
    *[_type == "blog" && title match '${title}*'] {
        "currentSlug": slug.current,
        title,
        image
    }
  `;

  const data = await client.fetch(query);

  return data;
}

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<blogCard[]>([]);

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
    <div className="flex flex-col items-center py-6 relative">
      <div className='flex items-center justify-between px-4 border-gray-100 border-[1px] rounded-full md:w-[50vw] w-full'>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Integrations"
          className="w-full outline-none h-[60px]"
        />
        <Search />
      </div>
      {searchResults.length > 0 && (
        <div className="absolute bg-white p-6 top-[90%] md:w-[50vw] w-full rounded-[30px] border flex flex-col gap-6 shadow-lg">
          {searchResults.map((result, index) => (
            <div
              key={result.currentSlug}
              className={`flex items-center pb-4 ${index < searchResults.length - 1 ? 'border-b' : 'pb-0'}`}
            >
              <Image
                src={urlFor(result.image).url()}
                width={50}
                height={50}
                alt={result.title}
                className="mr-4"
              />
              <Link href={`/integrations/${result.currentSlug}`} className="text-primary-parrot hover:underline transition-all ease-in-out duration-300">
                {result.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const revalidate = 10;

export default SearchBar;
