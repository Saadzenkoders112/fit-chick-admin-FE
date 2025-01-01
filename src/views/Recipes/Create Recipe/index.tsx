'use client';

import AppHeader from '@/components/ui/header';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import arrowLeft from '../../../../public/assets/images/arrow-left.svg';
import Input from '@/components/ui/input-field';

import * as yup from 'yup';
import { useFormik } from 'formik';
import SelectInput from '@/components/ui/select-input';
import TextArea from '@/components/ui/text-area-input';
import FileInput from '@/components/ui/file-input';

import fileUploadIcon from '../../../../public/assets/images/file-upload.svg';
import videoUploadIcon from '../../../../public/assets/images/video-upload.svg';
import imgUploadIcon from '../../../../public/assets/images/img-upload.svg';
import { Button } from '@/components/ui/button';

const CreateRecipeView = () => {
  const initialValues = {
    name: '',
    category: '',
    about: '',
    protein: 0,
    carbs: 0,
    fats: 0,
    calories: 0,
    description: '',
    video: '',
    file: '',
    img: '',
  };

  const createRecipeSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    category: yup.string().required('Category is required'),
    about: yup.string().required('About recipe is required'),
    protein: yup
      .number()
      .min(1, 'Value should be greater than 0')
      .required('Protein is required'),
    carbs: yup
      .number()
      .min(1, 'Value should be greater than 0')
      .required('Carbs is required'),
    fats: yup
      .number()
      .min(1, 'Value should be greater than 0')
      .required('Fats is required'),
    calories: yup.number().required('Calories is required'),
    img: yup
      .mixed()
      .required('An image is required')
      .test('fileSize', 'File size is too large', value => {
        return value && (value as File).size <= 5 * 1024 * 1024;
      })
      .test('fileType', 'Unsupported file format', value => {
        return (
          value &&
          ['image/jpg', 'image/jpeg', 'image/png'].includes(
            (value as File).type,
          )
        );
      }),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: createRecipeSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  const options = [
    {
      label: 'High Protein Power',
      value: 'high_protein_power',
    },
  ];

  return (
    <div className='w-full h-full'>
      <AppHeader name='' />
      <div className='flex flex-col p-4 w-full gap-4 lg:mt-10 mt-0'>
        <Link href='/recipes'>
          <Image
            src={arrowLeft}
            alt='arrow-left'
            height={18}
            width={18}
          />
        </Link>
        <div className='flex flex-col gap-4'>
          <p className='text-3xl font-semibold font-playfair'>Create Recipe</p>
          <form
            onSubmit={formik.handleSubmit}
            className='flex flex-col gap-4 p-2 pb-20'
          >
            <div className='grid grid-cols-2 gap-2 w-full'>
              <Input
                label='Recipe Name'
                placeholder='eg. Grilled Chicken'
                name='name'
                type='text'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required={true}
                className='text-sm'
              />
              <SelectInput
                options={options}
                label='Select category'
                required={true}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className='cursor-pointer text-sm'
              />
            </div>
            <TextArea
              label='About Recipe'
              placeholder='Enter ingredient and making process of recipes ....'
              name='about'
              value={formik.values.about}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required={true}
              className='text-sm h-[250px]'
            />
            <div className='grid grid-cols-3 gap-2 w-full'>
              <Input
                label='Protein'
                placeholder='eg. 170 gram per serve'
                name='protein'
                type='number'
                value={formik.values.protein}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required={true}
                className='text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
              />
              <Input
                label='Carbs'
                placeholder='eg. 170 gram per serve'
                name='carbs'
                type='number'
                value={formik.values.carbs}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required={true}
                className='text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
              />
              <Input
                label='Fats'
                placeholder='eg. 170 gram per serve'
                name='fats'
                type='number'
                value={formik.values.fats}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required={true}
                className='text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
              />
            </div>
            <Input
              label='Calories'
              placeholder='eg. 400 calories'
              name='calories'
              type='number'
              value={formik.values.calories}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required={true}
              className='text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            />
            <TextArea
              label='Recipe Description'
              placeholder='Enter ingredient and making process of recipes ....'
              name='description'
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required={true}
              className='text-sm h-[250px]'
            />
            <FileInput
              label='Recipe Video'
              text='Click here to upload videos'
              img={videoUploadIcon}
              value={formik.values.video}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              format='The video format must be a mp4 format. (Max. File size: 25 MB)'
              className='bg-white'
              required={true}
            />
            <FileInput
              label='Upload File'
              text='Click here to upload PDF videos'
              img={fileUploadIcon}
              value={formik.values.file}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              format='Maximum File Size: 5 MB per file'
              className='bg-white'
              required={true}
            />
            <FileInput
              label='Recipe Image'
              text='Add image here'
              img={imgUploadIcon}
              value={formik.values.file}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              format='The format must be a png/jpg format. (Max. File size: 5 MB)'
              className='bg-white'
              required={true}
            />
            <div className='flex justify-end'>
              <Button className='text-white w-max'>Create Recipe</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRecipeView;
