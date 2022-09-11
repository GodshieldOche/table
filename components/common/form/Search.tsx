import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

interface Props {
  placeholder: string;
  size: number;
  value: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<Props> = ({placeholder, size, value, setItem}) => {
  return (
    <div className='w-full md:w-fit md:pr-3 md:py-2'>
      <div className='relative'>
        <input
          type="text"
          className='input'
          placeholder={placeholder}
          value={value}
          onChange={(e) => { setItem(e.target.value) }}
          size={size}
        />
        <div className='absolute h-full top-0 bottom-0 my-auto left-2 flex flex-col justify-center'>
          <AiOutlineSearch className='text-secondaryTwo text-sm' />
        </div>
      </div>
    </div>
    
  )
}

export default Search 