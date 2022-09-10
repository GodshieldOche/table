import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

interface Props {
  value?: string
  options: string[]
  placholder: string
  setItem?: (e: any) => void;
}

const Select: React.FC<Props> = ({ value, options, setItem,placholder }) => {

  return (
    <div className='relative pr-3 py-2'>
      <select
        className='input !pr-3 capitalize'
        value={value}
        onChange={setItem}
      >
          {
          [placholder, ...options].map(option => (
              <option key={option}>{option}</option>
            ))
          }
          </select>
          <div className='absolute top-[27%] left-1'>
              <MdOutlineKeyboardArrowDown className='text-secondaryTwo !font-medium !text-lg' />
          </div>
    </div>
  )
}

export default Select