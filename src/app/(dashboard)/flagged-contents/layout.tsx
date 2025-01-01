'use client';

import { Button } from '@/components/ui/button';
import AppHeader from '@/components/ui/header';
import { flaggedContentHeader } from '@/constants/flagged-content-header';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const FlaggedContentAllLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [active, setActive] = useState<string>('');
  const router = useRouter();
  const pathName = usePathname();
  const paths = pathName.split('/');
  const currentPath = paths[paths.length - 1];

  useEffect(() => {
    setActive(currentPath);
  }, []);

  return (
    <div className='w-full h-full'>
      <AppHeader name='' />
      <div className='w-full h-full lg:mt-20 mt-0 flex flex-col gap-4 p-4'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <p className='text-3xl font-playfair font-semibold'>
              Manage Reported Feeds and Challenges
            </p>
            <p className='text-gray-500 text-sm'>
              Review and take action on content reported by users to ensure a
              safe and positive community.
            </p>
          </div>
          <div className='flex gap-6'>
            {flaggedContentHeader.map((header, index) => (
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
    </div>
  );
};

export default FlaggedContentAllLayout;
