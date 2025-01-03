import Image from 'next/image';
import React from 'react';
import postImg from '../../../public/assets/images/post-img.svg';

const SocialFeedCard = () => {
  return (
    <div className='p-4 border rounded-lg flex flex-col gap-4'>
      <div className='w-full h-auto rounded-lg'>
        <Image
          src={postImg}
          alt='post-img'
          layout='responsive'
          objectFit='contain'
        />
      </div>
      <p className='text-gray-500 text-sm'>
        Just finished a 30-minute HIIT workout and feeling amazing! 💪🔥
        Remember, ladies, it&apos;s not about perfection—it&apos;s about
        progress! Let&apos;s tostay strong, fit, and faithful. 🙏
      </p>
    </div>
  );
};

export default SocialFeedCard;
