import Image from 'next/image';
import React from 'react';
import searchIcon from '../../../public/assets/images/search.svg';

const SearchBar = () => {
  return (
    <div className='flex items-center gap-2 rounded-lg p-2 group flex-1 border focus-within:border-primary'>
      <Image
        src={searchIcon}
        alt='search-icon'
        height={20}
        width={20}
      />
      <input
        type='text'
        placeholder='john doe'
        className='focus:outline-none w-full'
      />
    </div>
  );
};

export default SearchBar;
