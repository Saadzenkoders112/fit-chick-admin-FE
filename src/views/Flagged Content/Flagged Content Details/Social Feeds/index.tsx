'use client';

import SocialFeedCard from '@/components/cards/social-feed-card';
import FlaggedContentDetailsTable from '@/components/tables/flagged-content-tables/flagged-content-details-table';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import trashIcon from '../../../../../public/assets/images/trash.svg';
import userIcon from '../../../../../public/assets/images/usericon.png';

const SocialFeedDetailsView = () => {
  return (
    <>
      {/* Post div */}
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <p className='text-2xl font-semibold font-playfair'>Created By</p>
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
        {/* Post card */}
        <SocialFeedCard />
      </div>
      <div className='flex justify-end'>
        <Button className='bg-gray-100 hover:bg-gray-100 hover:opacity-85 flex gap-2 items-center w-max'>
          <Image
            src={trashIcon}
            alt='trash-icon'
            height={15}
            width={15}
          />
          Delete Post
        </Button>
      </div>
    </>
  );
};

export default SocialFeedDetailsView;
