'use client';

import { Button } from '@/components/ui/button';
import { influencersHeader } from '@/constants/influencers-header';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const InfluencersAllLayout = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState<string>('');
  const router = useRouter();
  const pathName = usePathname();
  const paths = pathName.split('/');
  const currentPath = paths[paths.length - 1];

  useEffect(() => {
    setActive(currentPath);
  }, []);

  return (
    <div className='w-full h-full lg:mt-20 mt-0 flex flex-col gap-4 p-4'>
      <div className='flex flex-col gap-4'>
        <p className='text-3xl font-playfair font-semibold'>
          Influencers Listing
        </p>
        <div className='flex gap-6'>
          {influencersHeader.map((header, index) => (
            <Button
              className={`pb-2 px-0 bg-white rounded-none hover:bg-white duration-200 ${active === header.value ? 'border-b border-primary text-primary' : 'text-gray-400'}`}
              key={index}
              onClick={() => {
                setActive(header.value);
                router.push(header.value);
              }}
            >
              {header.label}
            </Button>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default InfluencersAllLayout;
