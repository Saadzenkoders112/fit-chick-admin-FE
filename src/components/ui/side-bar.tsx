'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import sideBarLogo from '../../../public/assets/images/fit-food-faith-logo.svg';
import { sidebarItems } from '@/constants/sidebar';

const AppSideBar = () => {
  const [active, setActive] = useState<string>('dashboard');
  return (
    <div className='w-[250px] h-full flex flex-col justify-between p-4 bg-containerBgColor'>
      <div className='flex flex-col gap-6 items-center'>
        <Image
          src={sideBarLogo}
          alt=''
          height={120}
          width={120}
        />
        <ul className='w-full flex flex-col gap-1'>
          {sidebarItems.map((item, index) => (
            <li
              key={index}
              className={`p-2 flex gap-2 cursor-pointer items-center rounded-lg ${active === item.name ? 'bg-primary text-white' : 'text-primary'}`}
            >
              <button onClick={() => setActive(item.name)}>
                <Image
                  src={`/assets/images/${active === item.name ? item.icon : `${item.icon}-dark`}.svg`}
                  alt=''
                  height={16}
                  width={16}
                />
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex gap-2 items-center text-primary cursor-pointer pb-4'>
        <Image
          src='/assets/images/logout.svg'
          alt=''
          height={16}
          width={16}
        />
        Logout
      </div>
    </div>
  );
};

export default AppSideBar;
