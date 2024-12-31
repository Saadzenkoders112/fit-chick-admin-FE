import AppHeader from '@/components/ui/header';
import React from 'react';
import arrowLeft from '../../../../public/assets/images/arrow-left.svg';
import recipeImg from '../../../../public/assets/images/recipe.svg';
import Image from 'next/image';
import Link from 'next/link';
import RecipeNutritionChart from '@/components/charts/recipe-nutritions-chart';

const RecipeDetailsView = () => {
  return (
    <div className='w-full h-full'>
      <AppHeader name='' />
      <div className='px-10 p-4 flex flex-col gap-4 lg:mt-20 mt-0'>
        <Link href='/recipes'>
          <Image
            src={arrowLeft}
            alt='arrow-left'
            height={18}
            width={18}
          />
        </Link>
        <div className='border rounded-lg w-[900px] p-2 flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <p className='p-1 px-2 text-sm rounded-lg bg-recipeCardPink w-max'>
              High Protein Power
            </p>
            <p className='text-2xl font-semibold font-playfair'>
              Grilled Chicken with Quinoa
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='w-[830px] h-auto'>
              <Image
                src={recipeImg}
                alt='recipe-img'
                layout='responsive'
                objectFit='contain'
              />
            </div>
            <p className='text-gray-400 text-sm'>
              {' '}
              Grilled Chicken with Quinoa and Veggies is a simple yet flavorful
              meal crafted for wholesome eating. The grilled chicken brings in
              protein to support muscle health, while quinoa offers a complete
              plant-based protein rich in magnesium and iron. The assortment of
              roasted or sautéed vegetables provides essential nutrients, making
              this dish a balanced, colorful option for your daily diet.
            </p>
            <div>
              <p className='text-2xl font-playfair'>Nutritions Per Serving</p>
            </div>
            <div>
              <RecipeNutritionChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsView;
