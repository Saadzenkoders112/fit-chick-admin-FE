'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import Menu from '../../../public/assets/images/menu.svg';
import { Button } from './button';
import MenuSidebar from './menu-bar';
import { Sheet, SheetTrigger } from './sheet';

interface HeaderProps {
  name: string;
}

const AppHeader: React.FC<HeaderProps> = ({ name }) => {
  const pathname = usePathname();
  return (
    <div
      className={`flex ${pathname === '/dashboard' ? 'justify-end' : 'justify-between'} items-center w-full p-4 lg:hidden sticky top-0 bg-white shadow-md`}
    >
      <p
        className={`text-3xl font-playfair ${pathname === '/dashboard' ? 'hidden' : ''}`}
      >
        {name}
      </p>
      <Sheet>
        <SheetTrigger
          asChild
          className='lg:hidden block'
        >
          <Button className='bg-white hover:bg-white'>
            <Image
              src={Menu}
              alt='hamburger'
              height={20}
              width={20}
            />
          </Button>
        </SheetTrigger>
        <MenuSidebar />
      </Sheet>
    </div>
  );
};

export default AppHeader;
