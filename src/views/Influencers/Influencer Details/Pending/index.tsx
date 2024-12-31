import React from 'react';
import userIcon from '../../../../../public/assets/images/usericon.png';
import InfluencerDetailsTable from '@/components/tables/influencers-tables/influencer-details-table';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import SocialProfiles from '@/components/ui/social-profiles';

const InfluencerDetailsPendingView = () => {
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
      <div className='flex flex-col gap-4'>
        <SocialProfiles />
        <div className='flex justify-end'>
          <div className='flex gap-4'>
            <Button className='bg-white border border-primary hover:bg-white'>
              Decline
            </Button>
            <Button className='text-white'>Approve</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerDetailsPendingView;
