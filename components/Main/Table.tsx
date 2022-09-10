import Image from 'next/image'
import React, { useState } from 'react'
import { data } from '../../pages'
import CheckBox from '../common/CheckBox'
import Select from '../common/form/Select'
import Status from '../common/Status'
import TableSort from '../common/TableSort'

interface Props {
    data: data
}

const Table: React.FC<Props> = ({ data }) => {

    const [selected, setSelected] = useState<string[]>([])

    
    const inArray = (id: string) => {
        return selected.find((item) => {
            return item === id
        })
    }

    const allSelected = selected.length === data.length

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
                              ["Product Name", "Status", "Qty", "Category", "On Sale", "Vendor"].map(item => (
                                  <th key={item} scope="col" className="px-3 py-4 whitespace-nowrap">
                                      <TableSort name={item} />
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
                      <Select options={[]} placholder="Select Action" />
                  </div>
                  <tbody className="bg-white">
                      {
                          data.map(item => (
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