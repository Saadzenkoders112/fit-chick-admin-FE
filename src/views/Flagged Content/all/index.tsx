'use client';

import FlaggedContentTable from '@/components/tables/flagged-content-tables/flagged-content-table';
import Dropdown from '@/components/ui/dropdown';
import SearchBar from '@/components/ui/search-bar';
import {
  DropdownOptions,
  FlaggedChallengesHeaders,
  FlaggedSocialFeedsHeaders,
} from '@/constants/table';
import { usePathname } from 'next/navigation';
import React from 'react';

const FlaggedContentView = () => {
  const pathName = usePathname();

  const socialFeeds = [
    {
      id: 12,
      created_by: 'Sarah Thompson',
      reported_by: 'Sarah Thompson',
      date_reported: 'Dec 8, 2024',
      status: 'pending',
      reason:
        'Grilled Chicken with Quinoa and Veggies is a healthy and balanced dish that combines lean protein from chicken, nutrient-packed quinoa, and a variety of colorful veggies.',
    },
    {
      id: 12,
      created_by: 'Sarah Thompson',
      reported_by: 'Sarah Thompson',
      date_reported: 'Dec 8, 2024',
      status: 'resolved',
      reason:
        'Grilled Chicken with Quinoa and Veggies is a healthy and balanced dish that combines lean protein from chicken, nutrient-packed quinoa, and a variety of colorful veggies.',
    },
    {
      id: 12,
      created_by: 'Sarah Thompson',
      reported_by: 'Sarah Thompson',
      date_reported: 'Dec 8, 2024',
      status: 'pending',
      reason:
        'Grilled Chicken with Quinoa and Veggies is a healthy and balanced dish that combines lean protein from chicken, nutrient-packed quinoa, and a variety of colorful veggies.',
    },
    {
      id: 12,
      created_by: 'Sarah Thompson',
      reported_by: 'Sarah Thompson',
      date_reported: 'Dec 8, 2024',
      status: 'resolved',
      reason:
        'Grilled Chicken with Quinoa and Veggies is a healthy and balanced dish that combines lean protein from chicken, nutrient-packed quinoa, and a variety of colorful veggies.',
    },
  ];

  const challenges = [
    {
      id: 12,
      challenge_name: '3 Days 1000 steps challenge',
      created_by: 'Sarah Thompson',
      reported_by: 'Sarah Thompson',
      date_reported: 'Dec 8, 2024',
      status: 'resolved',
      reason:
        'Grilled Chicken with Quinoa and Veggies is a healthy and balanced dish that combines lean protein from chicken, nutrient-packed quinoa, and a variety of colorful veggies.',
    },
    {
      id: 12,
      challenge_name: '3 Days 1000 steps challenge',
      created_by: 'Sarah Thompson',
      reported_by: 'Sarah Thompson',
      date_reported: 'Dec 8, 2024',
      status: 'pending',
      reason:
        'Grilled Chicken with Quinoa and Veggies is a healthy and balanced dish that combines lean protein from chicken, nutrient-packed quinoa, and a variety of colorful veggies.',
    },
    {
      id: 12,
      challenge_name: '3 Days 1000 steps challenge',
      created_by: 'Sarah Thompson',
      reported_by: 'Sarah Thompson',
      date_reported: 'Dec 8, 2024',
      status: 'resolved',
      reason:
        'Grilled Chicken with Quinoa and Veggies is a healthy and balanced dish that combines lean protein from chicken, nutrient-packed quinoa, and a variety of colorful veggies.',
    },
    {
      id: 12,
      challenge_name: '3 Days 1000 steps challenge',
      created_by: 'Sarah Thompson',
      reported_by: 'Sarah Thompson',
      date_reported: 'Dec 8, 2024',
      status: 'pending',
      reason:
        'Grilled Chicken with Quinoa and Veggies is a healthy and balanced dish that combines lean protein from chicken, nutrient-packed quinoa, and a variety of colorful veggies.',
    },
  ];

  return (
    <div className='rounded-lg border flex flex-col gap-4'>
      {/* Search bar & filters div */}
      <div className='flex justify-between items-center p-4 gap-4 flex-wrap'>
        <SearchBar />
        <Dropdown options={DropdownOptions} />
      </div>
      <FlaggedContentTable
        headers={
          pathName.endsWith('social-feeds')
            ? FlaggedSocialFeedsHeaders
            : FlaggedChallengesHeaders
        }
        data={pathName.endsWith('social-feeds') ? socialFeeds : challenges}
      />
    </div>
  );
};

export default FlaggedContentView;
