import React from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from 'react-icons/ai';



const Date = ({startDate, endDate}) => {
 
  
  return (
    <div className='relative'>
      <DatePicker
        selectsRange={true}
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        className="input"
        placeholderText="mm/dd/yy - mm/dd/yy"
        // onChange={(dates) => {
        //   const [startDate, endDate] = dates
        //   setStartDate(startDate)
        //   setEndDate(endDate)
        //   setArr(['select day'])
        //   setDays(0)
        //   if (startDate && endDate) {
        //     const diff = endDate.getTime() - startDate.getTime()
        //     const days = Math.round(diff / (1000 * 60 * 60 * 24))
        //     setDays(days + 1)
        //   }
        // }}
        isClearable={true}
      />
      <div className='absolute top-[28%] left-2'>
        <AiOutlineCalendar className='!text-secondaryTwo !font-semibold !text-sm' />
      </div>
    </div>
  )
}

export default Date