import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Button from '../common/Button'
import FilterButton from '../common/FilterButton'
import DateC from '../common/form/Date'
import Search from '../common/form/Search'
import Select from '../common/form/Select'
import { IoFilterSharp } from 'react-icons/io5';


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
    const [filters, setFilters] = useState<string[]>([])
    const [toggleFilter, setToggleFilter] = useState<boolean>(false)


    const router = useRouter()


    const removeFilter = (item: any) => {
        const key = item.split(":")[0].trim()

        delete router.query[key]

        router.push({
            pathname: router.pathname,
            query: {
                page: 1,
                ...router.query
            }
        })
    }

    


    useEffect(() => {
        setFilters([])
        for (const item in router.query) {
            if (item !== "page") {
                setFilters(prev => [...prev, `${item} : ${router.query[item]}` ])
            }
        }
    }, [router.query])


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
        if (onSale && onSale !== "On Sale") {
            query.onSale = onSale
        }
        if (status && status !== "Product Status" ) {
            query.status = status
        }
        if (fsDate && feDate) {
            query.createdAt = fsDate + "-" + feDate
        }


        if (toggleFilter) {
            setToggleFilter(false)
        }

        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                page: 1,
                ...query
            },
        })

        reset()
        
    }

    return (
        <div className='space-y-4 '>
            {/* Conditional Toggle Filter Button */}
            <div
                onClick={() => setToggleFilter(!toggleFilter)}
                className=' md:hidden cursor-pointer w-fit rounded-[5px] py-[5px] px-3 mx-3 flex items-center space-x-2 bg-white border border-secondaryFive '>
                <IoFilterSharp className='!text-primaryTwo ' />
                <h3 className='text-primaryTwo'>Filter</h3>
            </div>
            {/* Main filter Element */}
            <div className={` ${toggleFilter ? "flex" : "hidden md:flex"}  w-full transition-all ease-in duration-1000 flex-col space-y-2 md:space-y-0 md:flex-row !flex-wrap items-center px-3 `}>
                <Search placeholder='Product Name or SKU' size={18} value={name} setItem={setName} />
                <Search placeholder='Vendor Name or Vendor SKU' size={25} value={vendor} setItem={setVendor} />
                <Select
                    value={onSale}
                    placholder="On Sale"
                    options={["True", "False"]}
                    setItem={(e) => {
                        e.preventDefault()
                        setOnSale(e.target.value)
                    }} />
                <Select
                    value={status}
                    placholder="Product Status"
                    options={filter}
                    setItem={(e) => {
                        e.preventDefault()
                        setStatus(e.target.value)
                    }} />
                <Select
                    value={stock}
                    placholder="In Stock"
                    options={["no data"]}
                    setItem={(e) => {
                        e.preventDefault()
                        setStock(e.target.value)
                    }} />
                <DateC
                    startDate={startDate}
                    setEndDate={setEndDate}
                    setStartDate={setStartDate}
                    endDate={endDate} />
                <Button handleSubmit={handleSubmit} />
            </div>
            {/* Conditional Clear filter Element */}
            {
                filters.length >= 1 &&
                <div className='px-3 space-y-2 md:space-y-4'>
                    <div className='flex items-center flex-wrap'>
                        {
                            filters && filters.map((filter, index) => {
                                return <FilterButton item={filter} key={index} removeFilter={removeFilter} />
                            })
                        }
                    </div>
                    <div>
                            <h3
                                onClick={() => {
                                    router.push({
                                        pathname: router.pathname,
                                        query: {}
                                    })
                                }}
                                className='text-primaryOne cursor-pointer hover:bg-primaryOne hover:text-white border w-fit capitalize border-primaryOne rounded-[5px] py-[5px] px-3 '>
                            Clear all filters
                        </h3>   
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Filter