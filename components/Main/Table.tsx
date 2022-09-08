import Image from 'next/image'
import React from 'react'
import CheckBox from '../common/CheckBox'


const list = [
    {
        "createdAt": "2022-08-18T17:44:50.044Z",
        "name": "Bespoke Fresh Bike",
        "images": "http://loremflickr.com/640/480/abstract",
        "status": "yellow",
        "onSale": false,
        "category": "Books",
        "vendor": "Erdman - Murphy",
        "quantity": 84,
        "id": "1"
    },
    {
        "createdAt": "2022-08-19T02:05:10.638Z",
        "name": "Handcrafted Rubber Sausages",
        "images": "http://loremflickr.com/640/480/abstract",
        "status": "gold",
        "onSale": true,
        "category": "Baby",
        "vendor": "Steuber, Bednar and Runolfsdottir",
        "quantity": 85,
        "id": "2"
    },
    {
        "createdAt": "2022-08-19T00:05:57.928Z",
        "name": "Generic Bronze Chips",
        "images": "http://loremflickr.com/640/480/abstract",
        "status": "grey",
        "onSale": true,
        "category": "Grocery",
        "vendor": "Wolff, Wisoky and Kohler",
        "quantity": 11,
        "id": "3"
    },
    {
        "createdAt": "2022-08-19T00:19:28.119Z",
        "name": "Fantastic Rubber Bacon",
        "images": "http://loremflickr.com/640/480/abstract",
        "status": "tan",
        "onSale": false,
        "category": "Jewelery",
        "vendor": "Langosh and Sons",
        "quantity": 66,
        "id": "4"
    },
    {
        "createdAt": "2022-08-19T10:24:39.448Z",
        "name": "Ergonomic Concrete Keyboard",
        "images": "http://loremflickr.com/640/480/abstract",
        "status": "maroon",
        "onSale": false,
        "category": "Automotive",
        "vendor": "Harber LLC",
        "quantity": 13,
        "id": "5"
    }
]

const Table: React.FC = () => {
  return (
    <div>
          <table className="w-full ">
            <thead className="bg-secondaryOne text-primaryTwo ">
                <tr className="">
                    <th scope="col" className="px-3 py-[12px] text-left justify-start">
                        <CheckBox />
                    </th>
                    <th scope="col" className="text-sm font-normal px-3 py-[12px] text-left">
                        
                    </th>
                    {
                        ["Product Name", "Status", "Qty", "Category", "On Sale", "Vendor"].map(item => (
                            <th scope="col" className="text-sm text-primaryTwo font-normal px-3 py-4 text-left">
                                {item}
                            </th>
                        ))
                    }
                </tr>
              </thead>
              <tbody className="bg-white  ">
                  {
                      list.map(item => (
                          <tr key={item.id} className="">
                              <td className="px-3 py-4 whitespace-nowrap text-sm  ">
                                  <CheckBox />
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap text-sm  ">
                                  <div className='relative w-[85px] h-[85px] border border-secondaryTwo rounded-[5px] '>
                                      <Image
                                          src={item.images}
                                          layout="fill"
                                          objectFit='cover'
                                          className='w-full h-full rounded-[5px]'
                                      />
                                  </div>
                              </td>
                              <td className="px-3 py-4 whitespace-normal text-sm  ">
                                  <div className='max-w-[200px] font-normal'>
                                      <h3 className='!font-normal'>{item.name}</h3>
                                      <h3 className='!font-normal'>SKU 46442353</h3>
                                  </div>
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap text-sm capitalize  ">
                                  {item.status}
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
  )
}

export default Table