import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

interface Props {
  value?: string
  options: string[]
  placholder: string
  inTable?: boolean;
  setItem?: (e: any) => void;
}

const Select: React.FC<Props> = ({ value, options, setItem, placholder, inTable }) => {

  return (
    <div className={`${inTable ? "" : "w-full md:w-fit md:pr-3"}  `}>
      <div className='relative'>
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
            <div className='absolute h-full top-0 bottom-0 my-auto left-1 flex flex-col justify-center'>
                <MdOutlineKeyboardArrowDown className='text-secondaryTwo !font-medium !text-lg' />
            </div>
      </div>
    </div>
  )
}

export default Select