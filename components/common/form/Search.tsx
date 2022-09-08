import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

interface Props {
    placeholder: string;
    size: number;
}

const Search: React.FC<Props> = ({placeholder, size}) => {
  return (
    <div className='relative'>
        <input
            type="text"
            className='input'
            placeholder={placeholder}
            size={size}
        />
        <div className='absolute top-[28%] left-2'>
          <AiOutlineSearch className='text-secondaryTwo text-sm'/>
        </div>
    </div>
  )
}

export default Search 