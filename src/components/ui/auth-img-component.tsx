'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../../../public/assets/images/fit-chick-logo.svg';
import { usePathname } from 'next/navigation';

const AuthImage = () => {
  const pathname = usePathname();
  const pathName = pathname.split('/');
  console.log(pathName[pathName.length - 1]);
  return (
    <div className='bg-light_brown w-full h-full flex justify-center items-end p-4'>
      <div className='absolute top-10 left-10'>
        <Image
          src={logo}
          alt=''
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default AuthImage;
