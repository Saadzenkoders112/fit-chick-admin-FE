import DashboardCard from '@/components/cards/dashboard-card';
import DashboardChart from '@/components/ui/dashboard-chart';
import AppHeader from '@/components/ui/header';
import React from 'react';

const DashboardView = () => {
  return (
    <div className='flex flex-col justify-center h-full w-full'>
      <AppHeader name='Dashboard' />
      <div className='h-full w-full lg:mt-20 mt-0 p-4 flex flex-col items-center gap-4'>
        <div className='sm:flex grid grid-cols-2  flex-wrap gap-4 w-full'>
          {Array.from({ length: 6 }).map((_, index) => (
            <DashboardCard key={index} />
          ))}
        </div>
        <div className='flex justify-center w-full'>
          <DashboardChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
