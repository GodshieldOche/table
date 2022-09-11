import React from 'react'
import { RiCloseFill } from 'react-icons/ri';
import { format } from "date-fns"

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

        if (text.trim() === "createdAt") {
            // let [from, to] = value.split(';')
            return <h3 className='text-primaryOne tracking-wide capitalize'>{` From: ${format(new Date(value.substring(0, 11)), 'do MMM yyyy')} To:  ${format(new Date(value.substring(11, 21)), 'do MMM yyyy')}  `}</h3>
        }
    }

  return (
    <button className='py-[5px] mr-[12px] mb-[12px] flex items-center space-x-1  px-[6px] bg-secondaryOne rounded-[6px]  '>
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