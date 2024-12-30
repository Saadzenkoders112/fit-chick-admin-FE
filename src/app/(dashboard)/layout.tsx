import AppSideBar from '@/components/ui/side-bar';
import React from 'react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-auto min-h-full flex'>
      <AppSideBar />
      <div className='h-full w-full'>{children}</div>
    </div>
  );
};

export default AppLayout;
