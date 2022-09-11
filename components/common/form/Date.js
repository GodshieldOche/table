import React from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from 'react-icons/ai';



const Date = ({startDate, endDate, setStartDate, setEndDate}) => {
 
  
  return (
    <div className='pr-3 w-full md:w-fit md:py-2'>
      <div className='relative'>
        <DatePicker
          selectsRange={true}
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          className="input pr-2"
          placeholderText="mm/dd/yy - mm/dd/yy"
          onChange={(dates) => {
            const [startDate, endDate] = dates
            setStartDate(startDate)
            setEndDate(endDate)
          }}
        />
        <div className='absolute h-full top-0 bottom-0 my-auto left-2 flex flex-col justify-center'>
          <AiOutlineCalendar className='!text-secondaryTwo !font-semibold !text-sm' />
        </div>
      </div>
    </div>
  )
}

export default Date