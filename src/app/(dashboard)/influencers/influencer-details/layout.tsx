'use client';

import Image from 'next/image';
import Link from 'next/link';
import arrowLeft from '../../../../../public/assets/images/arrow-left.svg';
import AppHeader from '@/components/ui/header';
import { usePathname } from 'next/navigation';

const InfluencerDetailsLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathName = usePathname();
  const pathsArray = pathName.split('/');
  const currentPath = pathsArray[pathsArray.length - 1];

  return (
    <div className='w-full h-full lg:mt-10 mt-0 flex flex-col gap-4 p-4 pb-40'>
      <AppHeader name='' />
      <Link
        className='rounded-full p-1 h-max w-max border'
        href={`/influencers/all/${currentPath}`}
      >
        <Image
          src={arrowLeft}
          alt='arrow-left'
          height={18}
          width={18}
        />
      </Link>
      <p className='text-3xl font-semibold font-playfair'>
        Influencer Detail Page
      </p>
      {children}
    </div>
  );
};

export default InfluencerDetailsLayout;
