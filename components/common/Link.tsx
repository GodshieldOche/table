import React from 'react'

interface Props {
    text: string;
    active: boolean;
}

const Link: React.FC<Props> = ({active, text}) => {
  return (
    <div className='relative'>
          <h2 className={`${active ? "text-primaryTwo" : "text-secondaryTwo"} cursor-pointer `}>
              {text}
          </h2>
          <div className={` ${active ? "h-[2px]" : "h-0"} w-full  rounded-sm bg-primaryTwo absolute -bottom-[11px]  `}></div>
    </div>
  )
}

export default Link