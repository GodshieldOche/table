import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { data } from '../../pages'
import CheckBox from '../common/CheckBox'
import Select from '../common/form/Select'
import Status from '../common/Status'
import TableSort from '../common/TableSort'

interface Props {
    data: data
}

const tablesorts = [
    { name: "Product Name", key: "name", type: "string" },
    { name: "Status", key: "status", type: "string" },
    { name: "Qty", key: "quantity", type: "number" },
    { name: "Category", key: "category", type: "string" },
    { name: "On Sale", key: "onSale", type: "boolean" },
    { name: "Vendor", key: "vendor", type: "string" },
]

const Table: React.FC<Props> = ({ data }) => {

    const [selected, setSelected] = useState<string[]>([])
    const [sortData, setSortData] = useState<data>(data)

    useEffect(() => {
        setSortData(data)
    }, data)

    const stringSort = (key: any, isAscending: boolean) => {
        if (isAscending) {
            setSortData([...data.sort((a, b) => b[key as keyof typeof b].localeCompare(a[key as keyof typeof a]))])
            console.log(sortData)
        } else {
            setSortData([...data.sort((a, b) => a[key as keyof typeof a].localeCompare(b[key as keyof typeof b]))])
            console.log(sortData)
        }
    }

    const booleanSort = (key: any, isAscending: boolean) => {
        if (isAscending) {
            setSortData([...data.sort((a, b) => Number(b[key as keyof typeof b]) - Number(a[key as keyof typeof a]))])
        } else {
            setSortData([...data.sort((a, b) => Number(a[key as keyof typeof a]) - Number(b[key as keyof typeof b]))])
        }
    }

    const numberSort = (key: any, isAscending: boolean) => {
        if (isAscending) {
            setSortData([...data.sort((a, b) => b[key as keyof typeof b] - a[key as keyof typeof a])])
        } else {
            setSortData([...data.sort((a, b) => a[key as keyof typeof a] - b[key as keyof typeof b])])
        }
    }


    
    const inArray = (id: string) => {
        return selected.find((item) => {
            return item === id
        })
    }

    const allSelected = selected.length === sortData.length

    const notEmpty = selected.length !== 0

    const addToArray = (id: string) => {

        if (id === "0" && allSelected) {
            return setSelected([])
        }

        if (id === '0') {
            return setSelected(data.map(item => {
                return item.id
            }))
        }

        let inArray = selected.find((item) => {
            return item === id
        } )

        if (inArray) {
            setSelected((prev) => {
                return prev.filter((item) => {
                    return item !== id
                })
            })
        } else {
            setSelected((prev) => [...prev, id])
        }

    }


  return (
      <div>
          <div className='w-full overflow-x-auto '>
              <table className="w-full relative ">
                  <thead className={` ${selected.length ? "opacity-5" : ""} bg-secondaryOne text-primaryTwo`}>
                      <tr className="">
                          <th scope="col" className="px-3 py-4 w-[20px] text-left justify-start">
                              <CheckBox onClick={addToArray} inArray={inArray} id="0" />
                          </th>
                          <th scope="col" className="text-sm font-normal w-[75px] px-3 py-4 text-left">

                          </th>
                          {
                              tablesorts.map(item => (
                                  <th key={item.key} scope="col" className="px-3 py-4 whitespace-nowrap">
                                      <TableSort
                                          name={item.name}
                                          value={item.key}
                                          type={item.type}
                                          stringSort={stringSort}
                                          booleanSort={booleanSort}
                                          numberSort={numberSort}
                                      />
                                  </th>
                              ))
                          }
                      </tr>
                  </thead>
                  <div className={` ${selected.length ? "absolute top-0" : "hidden"} w-full flex items-center py-2 px-3 bg-secondaryOne space-x-6 text-primaryTwo `}>
                      <CheckBox onClick={addToArray} inArray={inArray} id={'0'} notEmpty={notEmpty} isFull={allSelected} />
                      <h3>
                          {`${selected.length === data.length ? "All Items Selected" : selected.length + (selected.length === 1 ? " Item Selected" : " Items Selected")}`}
                      </h3>
                      <Select options={[]} placholder="Select Action" inTable={true} />
                  </div>
                  <tbody className="bg-white">
                      {
                          sortData.map(item => (
                              <tr key={item.id} className="">
                                  <td className="px-3 py-4 whitespace-nowrap text-sm  ">
                                      <CheckBox onClick={addToArray} inArray={inArray} id={item.id} />
                                  </td>
                                  <td className="px-3 py-4 whitespace-nowrap  text-sm  ">
                                      <div className='relative w-[75px] h-[75px] border border-secondaryTwo rounded-[5px] '>
                                          <Image
                                              src={item.images}
                                              layout="fill"
                                              objectFit='cover'
                                              className='w-full h-full rounded-[5px]'
                                          />
                                      </div>
                                  </td>
                                  <td className="px-3 py-4 whitespace-nowrap text-sm  ">
                                      <div className='space-y-2 max-w-[200px] whitespace-normal font-normal'>
                                          <h3 className=''>{item.name}</h3>
                                          <h3 className='text-secondaryTwo'>SKU 46442353</h3>
                                      </div>
                                  </td>
                                  <td className={`px-3 py-4 whitespace-nowrap text-sm capitalize  `}>
                                      <Status status={item.status}/>
                                  </td>
                                  <td className="px-3 py-4 whitespace-nowrap text-sm  ">
                                      {item.quantity}
                                  </td>
                                  <td className="px-3 py-4 whitespace-nowrap text-sm capitalize  ">
                                      {item.category}
                                  </td>
                                  <td className="px-3 py-4 whitespace-nowrap text-sm  ">
                                      {item.onSale ? "Yes" : "No"}
                                  </td>
                                  <td className="px-3 py-4 whitespace-nowrap text-sm text-primaryOne ">
                                      {item.vendor}
                                  </td>
                              </tr>
                          ))
                      }
                  </tbody>
              </table>  
          </div>
          
    </div>
  )
}

export default Table