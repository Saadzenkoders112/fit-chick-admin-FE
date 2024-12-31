'use client';

import Image from 'next/image';
import React from 'react';
import recipeImg from '../../../public/assets/images/recipe.svg';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const RecipeCard = () => {
  const router = useRouter();
  return (
    <div className='w-[350px] h-auto p-2 flex flex-col gap-2 rounded-lg border'>
      <div className='w-full h-auto'>
        <Image
          src={recipeImg}
          alt='recipe-img'
          layout='responsive'
          objectFit='contain'
        />
      </div>
      <p className='p-1 px-2 text-sm rounded-lg bg-recipeCardPink w-max'>
        High Protein Power
      </p>
      <p className='text-lg font-playfair font-semibold'>Oatmeal Energy Bowl</p>
      <p className='text-gray-400'>
        Grilled Chicken with Quinoa and Veggies is a healthy and balanced dish
        that combines lean protein from chicken, nutrient-packed quinoa, and a
        variety of colorful veggies.
      </p>
      <Button
        onClick={() => router.push('/recipes/recipe-details')}
        className='bg-white hover:bg-white border border-primary text-primary'
      >
        View Recipe
      </Button>
    </div>
  );
};

export default RecipeCard;
