import React, { FC, useState } from 'react'
import { FaSort } from 'react-icons/fa';


interface Props {
  name: string;
  value: string;
  type: string;
  stringSort: (key: any, isAscending: boolean) => void;
  booleanSort: (key: any, isAscending: boolean) => void;
  numberSort: (key: any, isAscending: boolean) => void;
}

const TableSort: FC<Props> = ({ name, value, type, stringSort, booleanSort, numberSort}) => {

  const [isAscending, setIsAscending] = useState(false)

  const handleSort = () => {
    setIsAscending(!isAscending)

    if (type === "string") {
      return stringSort(value, isAscending)
    }

    if (type === "boolean") {
      return booleanSort(value, isAscending)
    }

    if (type === "number") {
      return numberSort(value, isAscending)
    }

  }

  return (
    <div
      onClick={handleSort}
      className='flex items-center space-x-[10px] cursor-pointer'>
        <h3 className='text-sm text-primaryTwo font-normal'>{name}</h3>
        <FaSort className='!text-secondaryTwo !text-sm' />
    </div>
  )
}

export default TableSort