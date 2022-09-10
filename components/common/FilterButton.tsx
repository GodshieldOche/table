import React from 'react'
import { RiCloseFill } from 'react-icons/ri';

interface Props {
    item: string;
    removeFilter: (item: any) => void
}

const FilterButton: React.FC<Props> = ({item, removeFilter}) => {

    const textFormatter = () => {
        const [text, value] = item.split(":")

        if (text.trim() == "onSale") {
            return (<h3 className='text-primaryOne tracking-wide capitalize'>{`On Sale: ${value} `}</h3>)
        }

        if (text.trim() === "status") {
            return <h3 className='text-primaryOne tracking-wide capitalize'>{` Product Status: ${value} `}</h3>
        }

        if (text.trim() === "name") {
            return <h3 className='text-primaryOne tracking-wide capitalize'>{` Product Name: ${value} `}</h3>
        }

        if (text.trim() === "vendor") {
            return <h3 className='text-primaryOne tracking-wide capitalize'>{` Product Vendor: ${value} `}</h3>
        }
    }

  return (
    <button className='py-[5px] flex items-center space-x-1  px-[6px] bg-secondaryOne rounded-[6px]  '>
          {
              textFormatter()
          }
          <RiCloseFill
              onClick={() => { removeFilter(item)}}
              className='!text-primaryOne !text-lg' />
    </button>
  )
}

export default FilterButton