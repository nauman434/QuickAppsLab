'use client'
import { FullBlog } from '@/lib/interface';
import { PlusCircle } from 'lucide-react';
import React, { useState } from 'react';

const FAQs: React.FC<{ data: FullBlog }> = ({ data }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const handleToggle1 = () => {
    setIsOpen1(!isOpen1);
  };
  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleToggle3 = () => {
    setIsOpen3(!isOpen3);
  };
  const handleToggle4 = () => {
    setIsOpen4(!isOpen4);
  };
  const handleToggle5 = () => {
    setIsOpen5(!isOpen5);
  };

  return (
    <div className="my-[100px]">
      <div className="p-5 bg-gray-100 rounded-[20px]">
        {data.faqs.slice(0,1).map((item) => (
          <div key={item.id} >
            <div
              className="flex items-center justify-between gap-4 cursor-pointer mb-4 group"
              onClick={handleToggle1}
            >
              <h4
                className={`text-[36px] transition duration-300 ${isOpen1 ? 'text-primary-parrot' : ''
                  } group-hover:text-primary-parrot`}
              >
                {item.heading}
              </h4>
              <PlusCircle
                className={`icon transition duration-300 ${isOpen1 ? 'text-primary-parrot' : ''
                  } group-hover:text-primary-parrot`}
              />
            </div>
            {isOpen1 && (
              <p className="text-gray-500 transition duration-300 slideDown">
                {item.description}
              </p>
            )}
            <div className="w-full h-[1px] bg-gray-200 my-6 transition duration-300" />
          </div>
        ))}
        {data.faqs.slice(1,2).map((item) => (
          <div key={item.id} >
            <div
              className="flex items-center justify-between gap-4 cursor-pointer mb-4 group"
              onClick={handleToggle2}
            >
              <h4
                className={`text-[36px] transition duration-300 ${isOpen2 ? 'text-primary-parrot' : ''
                  } group-hover:text-primary-parrot`}
              >
                {item.heading}
              </h4>
              <PlusCircle
                className={`icon transition duration-300 ${isOpen2 ? 'text-primary-parrot' : ''
                  } group-hover:text-primary-parrot`}
              />
            </div>
            {isOpen2 && (
              <p className="text-gray-500 transition duration-300 slideDown">
                {item.description}
              </p>
            )}
            <div className="w-full h-[1px] bg-gray-200 my-6 transition duration-300" />
          </div>
        ))}
        {data.faqs.slice(2,3).map((item) => (
          <div key={item.id} >
            <div
              className="flex items-center justify-between gap-4 cursor-pointer mb-4 group"
              onClick={handleToggle3}
            >
              <h4
                className={`text-[36px] transition duration-300 ${isOpen3 ? 'text-primary-parrot' : ''
                  } group-hover:text-primary-parrot`}
              >
                {item.heading}
              </h4>
              <PlusCircle
                className={`icon transition duration-300 ${isOpen3 ? 'text-primary-parrot' : ''
                  } group-hover:text-primary-parrot`}
              />
            </div>
            {isOpen3 && (
              <p className="text-gray-500 transition duration-300 slideDown">
                {item.description}
              </p>
            )}
            <div className="w-full h-[1px] bg-gray-200 my-6 transition duration-300" />
          </div>
        ))}
        {data.faqs.slice(3,4).map((item) => (
          <div key={item.id} >
            <div
              className="flex items-center justify-between gap-4 cursor-pointer mb-4 group"
              onClick={handleToggle4}
            >
              <h4
                className={`text-[36px] transition duration-300 ${isOpen4 ? 'text-primary-parrot' : ''
                  } group-hover:text-primary-parrot`}
              >
                {item.heading}
              </h4>
              <PlusCircle
                className={`icon transition duration-300 ${isOpen4 ? 'text-primary-parrot' : ''
                  } group-hover:text-primary-parrot`}
              />
            </div>
            {isOpen4 && (
              <p className="text-gray-500 transition duration-300 slideDown">
                {item.description}
              </p>
            )}
            <div className="w-full h-[1px] bg-gray-200 my-6 transition duration-300" />
          </div>
        ))}
        {data.faqs.slice(4,5).map((item) => (
          <div key={item.id} >
            <div
              className="flex items-center justify-between gap-4 cursor-pointer mb-4 group"
              onClick={handleToggle5}
            >
              <h4
                className={`text-[36px] transition duration-300 ${isOpen5 ? 'text-primary-parrot' : ''
                  } group-hover:text-primary-parrot`}
              >
                {item.heading}
              </h4>
              <PlusCircle
                className={`icon transition duration-300 ${isOpen5 ? 'text-primary-parrot' : ''
                  } group-hover:text-primary-parrot`}
              />
            </div>
            {isOpen5 && (
              <p className="text-gray-500 transition duration-300 slideDown">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;