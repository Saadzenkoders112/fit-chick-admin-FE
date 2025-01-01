'use client';

import RecipeCard from '@/components/cards/recipe-card';
import { Button } from '@/components/ui/button';
import AppHeader from '@/components/ui/header';
import { useRouter } from 'next/navigation';
import React from 'react';

const RecipesView = () => {
  const router = useRouter();
  return (
    <div className='w-full h-full'>
      <AppHeader name='' />
      <div className='flex flex-col gap-6 p-4 lg:mt-20 mt-0'>
        <div className='flex justify-between items-center'>
          <p className='text-3xl font-playfair font-semibold'>Your Recipes</p>
          <Button
            onClick={() => router.push('/recipes/create-recipe')}
            className='text-white'
          >
            Create Recipe
          </Button>
        </div>
        <div className='flex gap-4 flex-wrap'>
          {Array.from({ length: 6 }).map((_, index) => (
            <RecipeCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesView;
