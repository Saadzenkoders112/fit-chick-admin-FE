import Image from 'next/image';
import React from 'react';

const DashboardCard = () => {
  return (
    <div className='flex gap-2 p-2 rounded-lg bg-containerBgColor w-[320px]'>
      <Image
        src='/assets/images/dashboard-user.svg'
        alt=''
        height={50}
        width={50}
      />
      <div className='flex flex-col gap-1'>
        <p className='font-playfair text-sm'>Total Users</p>
        <p className='text-xl text-primary'>2,362</p>
      </div>
    </div>
  );
};

export default DashboardCard;
