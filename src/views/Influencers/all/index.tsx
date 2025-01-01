'use client';

import InfluencersTable from '@/components/tables/influencers-tables/influencers-table';
import Dropdown from '@/components/ui/dropdown';
import SearchBar from '@/components/ui/search-bar';
import {
  DropdownOptions,
  InfluencerTableApprovedHeaders,
  InfluencerTablePendingHeaders,
} from '@/constants/table';
import { usePathname } from 'next/navigation';
import React from 'react';

const InfluencersView = () => {
  const pathName = usePathname();

  const data = [
    {
      name: 'Sarah Thompson',
      email: 'saarah.t@example.com',
      ph_no: '123456789',
      age: 32,
    },
    {
      name: 'Sarah Thompson',
      email: 'saarah.t@example.com',
      ph_no: '123456789',
      age: 32,
    },
    {
      name: 'Sarah Thompson',
      email: 'saarah.t@example.com',
      ph_no: '123456789',
      age: 32,
    },
    {
      name: 'Sarah Thompson',
      email: 'saarah.t@example.com',
      ph_no: '123456789',
      age: 32,
    },
  ];

  const approvedData = [
    {
      name: 'Sarah Thompson',
      email: 'saarah.t@example.com',
      ph_no: '123456789',
      age: 32,
      status: 'InActive',
    },
    {
      name: 'Sarah Thompson',
      email: 'saarah.t@example.com',
      ph_no: '123456789',
      age: 32,
      status: 'Active',
    },
    {
      name: 'Sarah Thompson',
      email: 'saarah.t@example.com',
      ph_no: '123456789',
      age: 32,
      status: 'InActive',
    },
    {
      name: 'Sarah Thompson',
      email: 'saarah.t@example.com',
      ph_no: '123456789',
      age: 32,
      status: 'Active',
    },
  ];

  return (
    <div className='rounded-lg border flex flex-col gap-4'>
      {/* Search bar & filters div */}
      <div className='flex justify-between items-center p-4 gap-4 flex-wrap'>
        <SearchBar />
        <Dropdown options={DropdownOptions} />
      </div>
      <InfluencersTable
        headers={
          pathName.endsWith('pending') || pathName.endsWith('rejected')
            ? InfluencerTablePendingHeaders
            : InfluencerTableApprovedHeaders
        }
        data={
          pathName.endsWith('pending') || pathName.endsWith('rejected')
            ? data
            : approvedData
        }
      />
    </div>
  );
};

export default InfluencersView;
