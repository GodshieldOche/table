import React, { FC } from 'react'
import { FaSort } from 'react-icons/fa';


interface Props {
    name: string
}

const TableSort: FC <Props> = ({name}) => {
  return (
    <div className='flex items-center space-x-[10px] cursor-pointer'>
        <h3 className='text-sm text-primaryTwo font-normal'>{name}</h3>
        <FaSort className='!text-secondaryTwo !text-sm' />
    </div>
  )
}

export default TableSort