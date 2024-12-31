import Link from 'next/link';
import React from 'react';

const SocialProfiles = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-3xl font-semibold font-playfair'>
        Social Profile Links
      </p>
      <div className='p-2 rounded-lg border text-sm'>
        <div className='flex justify-between items-center p-1 pb-2 border-b'>
          <p className='text-gray-400 font-playfair'>Instagram</p>
          <Link href='/'>www.instagram.com</Link>
        </div>
        <div className='flex justify-between items-center p-1 pb-2 border-b'>
          <p className='text-gray-400 font-playfair'>Facebook</p>
          <Link href='/'>www.facebook.com</Link>
        </div>
        <div className='flex justify-between items-center p-1 pb-2 border-b'>
          <p className='text-gray-400 font-playfair'>Twitter</p>
          <Link href='/'>www.twitter.com</Link>
        </div>
        <div className='flex justify-between items-center p-1 pb-2 border-b'>
          <p className='text-gray-400 font-playfair'>Tiktok</p>
          <Link href='/'>www.tiktok.com</Link>
        </div>
      </div>
    </div>
  );
};

export default SocialProfiles;
