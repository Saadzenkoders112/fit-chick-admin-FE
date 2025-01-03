'use client';

import SubscriptionCard from '@/components/cards/subscription-card';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/ui/header';
import { SubscriptionPlanData } from '@/constants/subscription-plan-data';
import { useRouter } from 'next/navigation';
import React from 'react';

const SubscriptionView = () => {
  const router = useRouter();
  return (
    <div className='w-full h-full'>
      <AppHeader name='' />
      <div className='w-full h-full lg:mt-20 mt-0 flex flex-col gap-4 p-4'>
        <div className='flex sm:items-center justify-between sm:flex-row flex-col items-start gap-4'>
          <p className='text-3xl font-semibold font-playfair'>Subscription</p>
          <Button
            onClick={() => router.push('/subscriptions/create-subscription')}
            className='text-white'
          >
            Add Subscription
          </Button>
        </div>
        <div className='flex flex-wrap gap-4'>
          {SubscriptionPlanData?.map((plan, index) => (
            <SubscriptionCard
              key={index}
              plan={plan}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionView;
