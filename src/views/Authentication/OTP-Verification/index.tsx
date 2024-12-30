'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import arrowLeft from '../../../../public/assets/images/arrow-left.svg';

// Input OTP import
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

import * as yup from 'yup';
import { useFormik } from 'formik';

const OTPVerificationView = () => {
  const [value, setValue] = useState<string>('');
  const router = useRouter();

  const initialValues = {
    otp: '',
  };

  const resetPassSchema = yup.object().shape({
    otp: yup
      .string()
      .matches(/^\d{6}$/, 'OTP must be a 6-digit number')
      .required('OTP is required'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: resetPassSchema,
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div className='w-4/5 flex flex-col gap-10'>
      <Link
        href='/auth/forgot-password'
        className='rounded-full p-1 border w-max h-max'
      >
        <Image
          src={arrowLeft}
          alt=''
          height={18}
          width={18}
        />
      </Link>
      <form
        onSubmit={formik.handleSubmit}
        className='w-4/5 flex flex-col gap-4'
      >
        <div className='flex flex-col gap-1'>
          <p className='font-playfair text-3xl font-semibold'>
            Verification Code
          </p>
          <p className='text-sm text-gray-500'>
            Enter 6 digit verification code sent to your email address.
          </p>
        </div>
        <InputOTP
          maxLength={6}
          value={value}
          onChange={value => setValue(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className='text-sm flex items-center ml-16 text-center gap-2 w-full'>
          <p className='text-gray-500'>Can&apos;t receive code?</p>
          <Button className='text-secondary bg-white rounded-none p-0 hover:bg-white hover:underline'>
            Resend Code
          </Button>
        </div>
        <Button
          type='submit'
          onClick={() => router.push('/auth/reset-password')}
          className='text-white'
        >
          Verify
        </Button>
      </form>
    </div>
  );
};

export default OTPVerificationView;
