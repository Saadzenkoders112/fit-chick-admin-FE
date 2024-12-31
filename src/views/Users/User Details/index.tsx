'use client';

import Image from 'next/image';
import React from 'react';
import arrowLeft from '../../../../public/assets/images/arrow-left.svg';
import userIcon from '../../../../public/assets/images/usericon.png';
import UserDetailsTable from '@/components/tables/user-tables/user-details-table';
import Link from 'next/link';
import SearchBar from '@/components/ui/search-bar';
import Dropdown from '@/components/ui/dropdown';
import ReferralUserTable from '@/components/tables/user-tables/referral-user-tables';
import AppHeader from '@/components/ui/header';
import { DropdownOptions } from '@/constants/table';

const UserDetailsView = () => {
  return (
    <div className='lg:mt-20 mt-0'>
      <AppHeader name='' />
      <div className=' flex flex-col gap-6 p-4'>
        <div className='flex items-center gap-4'>
          <Link
            href='/users'
            className='rounded-full p-1 border w-max h-max'
          >
            <Image
              src={arrowLeft}
              alt='arrow-left'
              height={18}
              width={18}
            />
          </Link>
          <p className='sm:text-3xl text-xl font-semibold font-playfair'>
            User Detail Page
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <Image
            src={userIcon}
            alt='user-icon'
            height={50}
            width={50}
          />
          <div className='border rounded-lg'>
            <UserDetailsTable />
          </div>
        </div>
        <div className='h-full w-full p-4 flex flex-col gap-4'>
          <p className='text-3xl font-semibold font-playfair'>Referral Users</p>
          <div className='rounded-lg border flex flex-col gap-4'>
            {/* Search bar & filters div */}
            <div className='flex justify-between items-center p-4 gap-4 flex-wrap'>
              <SearchBar />
              <Dropdown options={DropdownOptions} />
            </div>
            {/* Table Div */}
            <ReferralUserTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsView;
