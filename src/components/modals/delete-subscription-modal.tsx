import React from 'react';
import { DialogContent, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';

const DeleteSubscriptionModal = () => {
  return (
    <DialogContent className='bg-white p-6 flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <p className='text-xl font-semibold font-playfair'>
          Delete Subscription
        </p>
        <p className='text-gray-500 text-xs'>
          Deleting this subscription plan will permanently remove it from the
          system, and users currently subscribed to this plan may be affected.
          Ensure that you have reviewed the impact on active subscriptions
          before proceeding.
        </p>
      </div>
      <div className='flex justify-end'>
        <div className='flex gap-4'>
          <DialogTrigger>
            <Button className='bg-white border text-primary border-primary hover:bg-white w-40'>
              Cancel
            </Button>
          </DialogTrigger>
          <Button className='bg-red-500 text-white hover:bg-red-500 w-40'>
            Delete Subscription
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

export default DeleteSubscriptionModal;
