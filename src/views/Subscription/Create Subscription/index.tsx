'use client';

import AppHeader from '@/components/ui/header';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import arrowLeft from '../../../../public/assets/images/arrow-left.svg';
import esteric from '../../../../public/assets/images/esteric.svg';
import add from '../../../../public/assets/images/add.svg';
import minus from '../../../../public/assets/images/minus.svg';
import { useFormik } from 'formik';
import { subscriptionSchema } from '@/schema/create-subscription.schema';
import Input from '@/components/ui/input-field';
import TextArea from '@/components/ui/text-area-input';
import { Button } from '@/components/ui/button';

const CreateSubscriptionView = () => {
  const initialValues = {
    name: '',
    price: 0,
    description: '',
    features: [''],
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: subscriptionSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  const addFeature = () => {
    formik.setFieldValue('features', [...formik.values.features, '']);
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = formik.values.features.filter(
      (_, i) => i !== index,
    );
    formik.setFieldValue('features', updatedFeatures);
  };

  console.log(formik.errors);

  return (
    <div className='w-full h-full'>
      <AppHeader name='' />
      <div className='w-full h-full lg:mt-20 mt-0 flex flex-col gap-4 p-4 pb-20'>
        <Link
          className='rounded-full p-1 h-max w-max border'
          href='/subscriptions'
        >
          <Image
            src={arrowLeft}
            alt='arrow-left'
            height={18}
            width={18}
          />
        </Link>
        <div className='flex flex-col gap-4'>
          <p className='text-3xl font-semibold font-playfair'>
            Create Your Subscription Plan
          </p>
          <form
            className='flex flex-col gap-4'
            onSubmit={formik.handleSubmit}
          >
            <div className='grid grid-cols-2 gap-2 w-full'>
              <div className='flex flex-col gap-1'>
                <Input
                  label='Subscription Name'
                  placeholder='eg. Monthly Subscription Plan'
                  name='name'
                  type='text'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required={true}
                  className='text-sm'
                />
                {formik.touched.name && formik.errors.name && (
                  <p className='text-red-500 text-sm'>{formik.errors.name}</p>
                )}
              </div>
              <div className='flex flex-col gap-1'>
                <Input
                  label='Price'
                  placeholder='eg. $ 12.99'
                  name='price'
                  type='number'
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required={true}
                  className='text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                />
                {formik.touched.price && formik.errors.price && (
                  <p className='text-red-500 text-sm'>{formik.errors.price}</p>
                )}
              </div>
            </div>
            <TextArea
              label='Description'
              placeholder='Enter short description about your plan ....'
              name='description'
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required={true}
              className='text-sm h-[250px]'
            />
            {formik.touched.description && formik.errors.description && (
              <p className='text-red-500 text-sm'>
                {formik.errors.description}
              </p>
            )}
            <div>
              <div className='flex justify-between items-center'>
                <div className='flex gap-1'>
                  <label
                    className='text-sm'
                    htmlFor='features'
                  >
                    Features
                  </label>
                  <Image
                    src={esteric}
                    alt=''
                    height={6}
                    width={6}
                  />
                </div>
                <Button
                  onClick={addFeature}
                  className='bg-gray-100 hover:bg-gray-100 text-xs gap-2 text-primary'
                >
                  <Image
                    src={add}
                    alt='add'
                    height={15}
                    width={15}
                  />
                  Add New Feature
                </Button>
              </div>
              <div className='flex flex-col gap-4'>
                {formik.values.features.map((feature, index) => (
                  <div key={index}>
                    <div className='flex gap-2 items-center'>
                      <div className='flex-1'>
                        <Input
                          placeholder='eg: Access all features'
                          name={`features[${index}]`}
                          value={feature}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className='text-sm'
                        />
                      </div>
                      <Button
                        className='bg-white hover:bg-white border border-black p-4'
                        type='button'
                        onClick={() => removeFeature(index)}
                      >
                        <Image
                          src={minus}
                          alt='minus'
                          height={18}
                          width={18}
                        />
                      </Button>
                    </div>
                    {formik.touched.features && formik.errors.features && (
                      <p className='text-red-500 text-sm'>
                        {formik.errors.features[index]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {formik.values.features.length === 0 &&
              formik.touched.features &&
              formik.errors.features && (
                <p className='text-red-500 text-sm'>{formik.errors.features}</p>
              )}
            <div className='flex justify-end'>
              <Button
                type='submit'
                className='text-white'
              >
                Create Subscription
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateSubscriptionView;
