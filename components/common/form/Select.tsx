import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

interface Props {
  value?: string
  options: string[]
  placholder: string
  setItem?: React.Dispatch<React.SetStateAction<string>>
}

const Select: React.FC<Props> = ({ value, options, setItem,placholder }) => {

  return (
    <div className='relative'>
      <select
        className='input !pr-3 capitalize'
        value={value}
        onChange={(e) => {setItem!(e.target.value)}}
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