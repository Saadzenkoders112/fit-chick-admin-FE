'use client';

import UserTable from '@/components/tables/user-tables/user-table';
import Dropdown from '@/components/ui/dropdown';
import AppHeader from '@/components/ui/header';
import SearchBar from '@/components/ui/search-bar';
import { DropdownOptions } from '@/constants/table';

const UsersView = () => {
  return (
    <div className='flex flex-col items-start h-full w-full'>
      <AppHeader name='' />
      <div className='h-full w-full lg:mt-20 mt-0 p-4 flex flex-col gap-4'>
        <p className='sm:text-3xl text-xl font-semibold font-playfair'>
          User Listings
        </p>
        <div className='rounded-lg border flex flex-col gap-4'>
          {/* Search bar & filters div */}
          <div className='flex justify-between items-center p-4 gap-4 flex-wrap'>
            <SearchBar />
            <Dropdown options={DropdownOptions} />
          </div>
          {/* Table Div */}
          <UserTable />
        </div>
      </div>
    </div>
  );
};

export default UsersView;
