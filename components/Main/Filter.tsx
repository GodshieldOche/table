import React from 'react'
import Button from '../common/Button'
import Date from '../common/form/Date'
import Search from '../common/form/Search'
import Select from '../common/form/Select'

const Filter = () => {
    const [startDate, setStartDate] = React.useState()
    const [endDate, setEndDate] = React.useState()


    return (
        <div className="w-full flex items-center space-x-[22px] px-3 ">
            <Search placeholder='Product Name or SKU' size={18} />
            <Search placeholder='Vendor Name or Vendor SKU' size={25} />
            <Select value='On Sale' />
            <Select value='Stock Status' />
            <Select value='Product Status' />
            <Date startDate={startDate} endDate={endDate} />
            <Button />
        </div>
    )
}

export default Filter