import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { data } from '../../pages'
import Button from '../common/Button'
import DateC from '../common/form/Date'
import Search from '../common/form/Search'
import Select from '../common/form/Select'

interface Props {
    filter: string[]
}

const Filter: React.FC<Props> = ({ filter }) => {
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState('')
    const [vendor, setVendor] = useState('')
    const [name, setName] = useState('')
    const [onSale, setOnSale] = useState('')
    const [status, setStatus] = useState('')
    const [stock, setStock] = useState('')


    const router = useRouter()



    const reset = () => {
        setStartDate("")
        setEndDate("")
        setVendor("")
        setName("")
        setOnSale("On Sale")
        setStatus("Product Status")
        setStock("In Stock")
    }


    const handleSubmit = () => {
        // check for any field to apply return if null 
        if (!startDate && !endDate && !vendor && !name && onSale === "On Sale" && status === "Product Status") { 
            return
        }
          
        let fsDate, feDate

        if (startDate && endDate) {
            fsDate = new Date(startDate).toISOString();
            feDate = new Date(endDate).toISOString();
        }

        let query:any = {} 


        if (vendor) {
            query.vendor = vendor
        }
        if (name) {
            query.name = name
        }
        if (onSale) {
            query.onSale = onSale
        }
        // if (status ) {
        //     query.status = status
        // }
        if (fsDate && feDate) {
            query.createdAt = fsDate + "-" + feDate
        }


        // console.log(query)
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                ...query
            },
        })

        reset()
        
    }

    return (
        <div className="w-full flex items-center space-x-[22px] px-3 ">
            <Search placeholder='Product Name or SKU' size={18} value={vendor} setItem={setVendor} />
            <Search placeholder='Vendor Name or Vendor SKU' size={25} value={name} setItem={setName} />
            <Select value={onSale} placholder="On Sale" options={["True", "False"]} setItem={setOnSale} />
            <Select value={status} placholder="Product Status" options={filter} setItem={setStatus} />
            <Select value={stock} placholder="In Stock" options={["no data"]} setItem={setStock} />
            <DateC
                startDate={startDate}
                setEndDate={setEndDate}
                setStartDate={setStartDate}
                endDate={endDate} />
            <Button handleSubmit={handleSubmit} />
        </div>
    )
}

export default Filter