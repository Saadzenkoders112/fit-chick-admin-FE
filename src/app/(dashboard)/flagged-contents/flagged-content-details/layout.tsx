'use client';

import FlaggedContentDetailsTable from '@/components/tables/flagged-content-tables/flagged-content-details-table';
import AppHeader from '@/components/ui/header';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import arrowLeft from '../../../../../public/assets/images/arrow-left.svg';
import userIcon from '../../../../../public/assets/images/usericon.png';
import { usePathname } from 'next/navigation';

const FlaggedContentDetailsLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathName = usePathname();
  const pathsArray = pathName.split('/');
  const currentPath = pathsArray[pathsArray.length - 1];
  return (
    <div className='w-full h-full'>
      <AppHeader name='' />
      <div className='flex justify-center'>
        <div className='sm:w-11/12 w-full h-full lg:mt-20 mt-0 flex flex-col gap-4 p-4 pb-20'>
          <Link
            className='rounded-full p-1 h-max w-max border'
            href={`/flagged-contents/all/${currentPath}`}
          >
            <Image
              src={arrowLeft}
              alt='arrow-left'
              height={18}
              width={18}
            />
          </Link>
          {/* User details div */}
          <div className='flex flex-col gap-2'>
            <p className='text-3xl font-semibold font-playfair'>Reported By</p>
            <div className='flex gap-4 sm:flex-row flex-col items-center clear-start p-2 border rounded-lg'>
              <div className='max-w-32 w-auto flex items-center justify-center'>
                <Image
                  src={userIcon}
                  alt='user-icon'
                  height={100}
                  width={100}
                />
              </div>
              <FlaggedContentDetailsTable />
            </div>
          </div>
          {/* Reason div */}
          <div className='flex flex-col gap-2'>
            <p className='text-2xl font-semibold font-playfair'>Reason</p>
            <div className='p-2 text-sm rounded-lg border w-full min-h-52 h-auto text-gray-500'>
              This challenge contains misleading or inappropriate content that
              might not be suitable for all users.
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FlaggedContentDetailsLayout;
