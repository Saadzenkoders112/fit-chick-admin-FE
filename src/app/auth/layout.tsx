import AuthImage from '@/components/ui/auth-img-component';
import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full grid lg:grid-cols-2 grid-cols-1 h-full max-h-screen'>
      <AuthImage />
      <div className='flex max-h-screen items-center h-full justify-center'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
