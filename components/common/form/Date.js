import React from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from 'react-icons/ai';



const Date = ({startDate, endDate, setStartDate, setEndDate}) => {
 
  
  return (
    <div className='relative pr-3 py-2'>
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
      <div className='absolute top-[28%] left-2'>
        <AiOutlineCalendar className='!text-secondaryTwo !font-semibold !text-sm' />
      </div>
    </div>
  )
}

export default Date