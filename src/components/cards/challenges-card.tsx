import Image from 'next/image';
import calendarIcon from '../../../public/assets/images/calendar.svg';
import postImg from '../../../public/assets/images/post-img.svg';

const ChallengesCard = () => {
  return (
    <div className='p-4 flex flex-col gap-4 border rounded-lg'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 items-center text-sm text-gray-500'>
          <Image
            src={calendarIcon}
            alt='calendar-icon'
            height={20}
            width={20}
          />
          <p>25 Nov, 2024 - 28 Nov, 2024</p>
        </div>
        <p className='p-1 px-4 text-sm text-textPrimary rounded-lg bg-tablePink'>
          45 Participant
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <p className='text-2xl font-semibold font-playfair'>
          Three Days 1200 Steps Challenge
        </p>
        <div className='w-full h-auto rounded-lg'>
          <Image
            src={postImg}
            alt='post-img'
            layout='responsive'
            objectFit='contain'
          />
        </div>
        <p className='text-gray-500 text-sm'>
          Ready to kick-start your fitness journey? The 3 Days 1000 Steps
          Challenge is a short and effective way to build momentum and create a
          habit of daily movement. This challenge is perfect for anyone looking
          to increase their physical activity, clear their mind, and feel
          accomplished.
        </p>
        <div className='flex flex-col gap-2'>
          <p className='text-2xl font-semibold font-playfair'>
            Challenge Description
          </p>
          <ol className='text-gray-500 text-sm'>
            <li>
              Daily Goal: Walk at least 1,000 steps each day for three
              consecutive days.
            </li>
            <li>
              Track Your Progress: Use the step tracker to monitor your daily
              achievements.
            </li>
            <li>
              Stay Motivated: Share your progress with others in the community
              for support and encouragement.
            </li>
          </ol>
          <p className='text-sm text-gray-500'>
            Boost your energy and mood with light physical activity. Lay the
            foundation for healthier habits. Inspire your followers by sharing
            your journey.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='text-2xl font-semibold font-playfair'>Daily Goals</p>
          <p className='text-sm'>1000 steps per day</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengesCard;
