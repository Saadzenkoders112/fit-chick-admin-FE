'use client';

import React from 'react';
import userIcon from '../../../../../public/assets/images/usericon.png';
import InfluencerDetailsTable from '@/components/tables/influencers-tables/influencer-details-table';
import Image from 'next/image';
import SocialProfiles from '@/components/ui/social-profiles';
import SearchBar from '@/components/ui/search-bar';
import Dropdown from '@/components/ui/dropdown';
import ReferralUserTable from '@/components/tables/user-tables/referral-user-tables';
import { DropdownOptions } from '@/constants/table';

const InfluencerDetailsApprovedView = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <Image
          src={userIcon}
          alt='user-icon'
          height={50}
          width={50}
        />
        <div className='border rounded-lg'>
          <InfluencerDetailsTable />
        </div>
      </div>
      {/* Social profile links div */}
      <SocialProfiles />
      {/* Referral users table div */}
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
  );
};

export default InfluencerDetailsApprovedView;
