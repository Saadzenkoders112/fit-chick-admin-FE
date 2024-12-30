import AuthImage from '@/components/ui/auth-img-component';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full h-full flex'>
      <div className='w-1/2'>
        <AuthImage />
      </div>
      <div className='w-1/2'>
        <div className='w-full h-full flex flex-col justify-center items-center p-4'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
