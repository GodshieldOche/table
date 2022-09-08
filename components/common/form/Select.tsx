import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

interface Props {
    value: string
}

const Select: React.FC<Props> = ({value}) => {
  return (
    <div className='relative'>
        <select className='input !pr-3' defaultValue={value}>
            <option>{ value }</option>
            <option>True</option>
            <option>False</option>
          </select>
          <div className='absolute top-[27%] left-1'>
              <MdOutlineKeyboardArrowDown className='text-secondaryTwo !font-medium !text-lg' />
          </div>
    </div>
  )
}

export default Select