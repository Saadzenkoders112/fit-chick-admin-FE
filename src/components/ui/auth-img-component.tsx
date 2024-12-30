'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import loginBg from '../../../public/assets/images/login-bg.svg';

const AuthImage = () => {
  const pathname = usePathname();
  const pathName = pathname.split('/');

  return (
    <div className='relative lg:block hidden'>
      <Image
        alt='login-bg'
        src={loginBg}
      />
      <div className='flex justify-center absolute top-1/4 left-0 w-full'>
        <Image
          alt='login-img'
          src={`/assets/images/${pathName[pathName.length - 1]}.svg`}
          height={400}
          width={400}
        />
      </div>
    </div>
  );
};

export default AuthImage;
