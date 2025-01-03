import { SubscriptionCardProps } from '@/types/Interfaces/common/subscription-plan-card-interface';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import checkIcon from '../../../public/assets/images/check.svg';
import editIcon from '../../../public/assets/images/editPrimary.svg';
import subscriptionIcon from '../../../public/assets/images/subscription-icon.svg';
import trashIcon from '../../../public/assets/images/trash.svg';
import DeleteSubscriptionModal from '../modals/delete-subscription-modal';
import { Button } from '../ui/button';
import { Dialog, DialogTrigger } from '../ui/dialog';

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ plan }) => {
  const router = useRouter();
  return (
    <div className='rounded-lg border flex flex-col gap-8 max-w-[320px] w-auto'>
      <div className='grid grid-rows-2 p-2'>
        <div className='flex flex-col gap-2 p-4'>
          <Image
            src={subscriptionIcon}
            alt='subscription-icon'
            height={20}
            width={20}
          />
          <div className='flex flex-col gap-1'>
            <div className='flex gap-2 items-center'>
              <p className='text-2xl font-semibold font-playfair'>
                ${plan.amount}
              </p>
              <p className='text-xs text-gray-500'>/ {plan.duration}</p>
            </div>
            <p className='text-sm'>{plan.type}</p>
            <p className='text-xs text-gray-500 mt-4'>{plan.description}</p>
          </div>
        </div>
        <div className='border-t p-4 flex flex-col justify-between'>
          <ul>
            {plan.features.map((feature, index) => (
              <li
                key={index}
                className='flex gap-4 items-center text-sm text-textPrimary'
              >
                <Image
                  src={checkIcon}
                  alt='check-icon'
                  height={16}
                  width={16}
                />
                {feature}
              </li>
            ))}
          </ul>
          <div className='flex gap-2'>
            <Dialog>
              <DialogTrigger asChild>
                <Button className='bg-gray-100 hover:bg-gray-100 hover:opacity-85 flex gap-2 items-center w-full'>
                  <Image
                    src={trashIcon}
                    alt='trash-icon'
                    height={15}
                    width={15}
                  />
                  Delete
                </Button>
              </DialogTrigger>
              <DeleteSubscriptionModal />
            </Dialog>
            <Button
              onClick={() => router.push('/subscriptions/edit-subscription')}
              className='flex gap-2 items-center border border-primary bg-white hover:bg-white text-primary w-full'
            >
              <Image
                src={editIcon}
                alt='edit-icon'
                height={15}
                width={15}
              />
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
