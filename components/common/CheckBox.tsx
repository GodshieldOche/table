import React from 'react'
import { BsCheck } from 'react-icons/bs';
import { TbMinus } from 'react-icons/tb';


interface Props {
  id: string;
  onClick: (id: string) => void;
  inArray: (id: string) => string | undefined
  notEmpty?: boolean
  isFull?: boolean
}




const CheckBox: React.FC<Props> = ({ id, onClick, inArray, isFull, notEmpty }) => {

  

  return (
    <div
      onClick={() => onClick(id)}
      className={`${inArray(id) || notEmpty ? "bg-primaryOne border-primaryOne" : "bg-white border-secondaryTwo"} py-[0.5px] px-[0.5x] border  rounded-[2px] cursor-pointer  `}>
        {
          notEmpty && id === "0"
          ? <TbMinus className='!text-white !text-sm ' />
          : <BsCheck className='!text-white !text-sm ' />
        }
        
      </div>
  )
}

export default CheckBox