import { SheetContent } from '@/components/ui/sheet';

import { sidebarItems } from '@/constants/sidebar';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import sideBarLogo from '../../../public/assets/images/fit-food-faith-logo.svg';
import { usePathname, useRouter } from 'next/navigation';

const MenuSidebar = () => {
  const [active, setActive] = useState<string>('');
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const pathname = pathName.split('/')[1];
    setActive(pathname);
  }, []);
  return (
    <SheetContent className='bg-white transition-all duration-300 ease-in-out w-[300px] flex flex-col justify-between pt-12'>
      <div className='w-full  flex flex-col gap-4 h-full'>
        <div className='flex justify-center'>
          <Image
            src={sideBarLogo}
            alt=''
            height={120}
            width={120}
          />
        </div>
        <ul className='w-full flex flex-col gap-1'>
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`p-2 flex gap-2 cursor-pointer items-center rounded-lg ${active === item.name.toLowerCase() ? 'bg-primary text-white' : 'text-primary'}`}
              onClick={() => {
                setActive(item.name);
                router.push(item.path);
              }}
            >
              <Image
                src={`/assets/images/${active === item.name.toLowerCase() ? item.icon : `${item.icon}-dark`}.svg`}
                alt=''
                height={16}
                width={16}
              />
              {item.name}
            </button>
          ))}
        </ul>
      </div>
      <div className='flex gap-2 items-center text-primary cursor-pointer pb-4 p-2'>
        <Image
          src='/assets/images/logout.svg'
          alt=''
          height={16}
          width={16}
        />
        Logout
      </div>
    </SheetContent>
  );
};

export default MenuSidebar;
