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
    <div className='relative pr-3 py-2'>
        <input
            type="text"
            className='input'
            placeholder={placeholder}
            value={value}
            onChange={(e) => {setItem(e.target.value)}}
            size={size}
        />
        <div className='absolute top-[28%] left-2'>
          <AiOutlineSearch className='text-secondaryTwo text-sm'/>
        </div>
    </div>
  )
}

export default Search 