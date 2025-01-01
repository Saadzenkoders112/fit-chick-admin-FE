'use client';

import AppHeader from '@/components/ui/header';
import React from 'react';
import arrowLeft from '../../../../public/assets/images/arrow-left.svg';
import recipeImg from '../../../../public/assets/images/recipe.svg';
import trashIcon from '../../../../public/assets/images/trash.svg';
import editIcon from '../../../../public/assets/images/edit.svg';
import Image from 'next/image';
import Link from 'next/link';
import RecipeNutritionChart from '@/components/charts/recipe-nutritions-chart';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const RecipeDetailsView = () => {
  const router = useRouter();
  return (
    <div className='w-full h-full'>
      <AppHeader name='' />
      <div className='flex justify-center border-2'>
        <div className='px-10 p-4 lg:w-11/12 w-full flex flex-col gap-4 lg:mt-20 mt-0 pb-20'>
          <Link href='/recipes'>
            <Image
              src={arrowLeft}
              alt='arrow-left'
              height={18}
              width={18}
            />
          </Link>
          <div className='border rounded-lg max-w-[900px] w-auto p-4 flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <p className='p-1 px-2 text-sm rounded-lg bg-recipeCardPink w-max'>
                High Protein Power
              </p>
              <p className='text-2xl font-semibold font-playfair'>
                Grilled Chicken with Quinoa
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='max-w-[830px] w-auto h-auto'>
                <Image
                  src={recipeImg}
                  alt='recipe-img'
                  layout='responsive'
                  objectFit='contain'
                />
              </div>
              <p className='text-gray-400 text-sm'>
                Grilled Chicken with Quinoa and Veggies is a simple yet
                flavorful meal crafted for wholesome eating. The grilled chicken
                brings in protein to support muscle health, while quinoa offers
                a complete plant-based protein rich in magnesium and iron. The
                assortment of roasted or sautéed vegetables provides essential
                nutrients, making this dish a balanced, colorful option for your
                daily diet.
              </p>
              <div className='flex flex-col gap-2'>
                <p className='text-2xl font-playfair'>Nutritions Per Serving</p>
                <RecipeNutritionChart />
              </div>

              <div className='flex flex-col gap-2'>
                <p className='text-2xl font-playfair'>Ingredients</p>
                <ul className='text-sm list-disc ml-4'>
                  <li>1 grilled chicken breast</li>
                  <li>1/2 cup cooked quinoa</li>
                  <li>1/2 cup roasted vegetables (zucchini, bell peppers)</li>
                  <li>1 tbsp olive oil</li>
                  <li>Salt and pepper to taste</li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-2xl font-playfair'>How You Make</p>
                <ul className='text-sm list-disc ml-4'>
                  <li>
                    Prepare the chicken: Season your chicken breast with salt
                    and pepper. Heat a grill or skillet on medium heat and cook
                    the chicken for about 6-7 minutes on each side, or until
                    fully cooked.
                  </li>
                  <li>
                    Cook quinoa: Rinse quinoa and cook it according to package
                    instructions (about 15 minutes)
                  </li>
                  <li>
                    Roast the veggies: Toss zucchini and bell peppers with olive
                    oil, salt, and pepper. Roast in the oven at 400°F (200°C)
                    for 20 minutes.
                  </li>
                  <li>
                    Assemble: Serve the grilled chicken over quinoa, with
                    roasted vegetables on the side.
                  </li>
                </ul>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-2xl font-playfair'>Video</p>
                {/* <video
                  className='w-full'
                  controls
                >
                  <source
                    src='/docs/videos/flowbite.mp4'
                    type='video/mp4'
                  ></source>
                  Your browser does not support the video tag.
                </video> */}
              </div>
            </div>
          </div>
          <div className='flex justify-end gap-2 items-center'>
            <Button className='bg-gray-100 hover:bg-white flex gap-2 items-center w-24'>
              <Image
                src={trashIcon}
                alt='trash-icon'
                height={15}
                width={15}
              />
              Delete
            </Button>
            <Button
              onClick={() => router.push('/recipes/recipe-details/edit-recipe')}
              className=' flex gap-2 items-center text-white w-24'
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

export default RecipeDetailsView;
