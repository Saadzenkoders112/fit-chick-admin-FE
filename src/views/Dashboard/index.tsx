import DashboardCard from '@/components/cards/dashboard-card';
import React from 'react';

const DashboardView = () => {
  return (
    <div className='flex flex-col justify-center h-full'>
      <div className='h-4/5 p-4'>
        <div className='grid grid-cols-3 gap-4'>
          {Array.from({ length: 6 }).map((_, index) => (
            <DashboardCard key={index} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DashboardView;
