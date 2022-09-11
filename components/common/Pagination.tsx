import { NextRouter, useRouter } from 'next/router';
import React from 'react'
import Paginate from 'react-js-pagination'


interface Props {
    page: number;
    itemsPerPage: number;
    totalItems: number
}

const Pagination: React.FC<Props> = ({ page, itemsPerPage, totalItems }) => {
    
    const router: NextRouter = useRouter()

    const handlePagination = (pageNumber: number) => {
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
                page: pageNumber
            },
        })
    }

  return (
      <div className='w-fit px-3 !mt-[35px]'>
          <Paginate
              activePage={page}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={totalItems}
              onChange={handlePagination}
              pageRangeDisplayed={4}
              hideFirstLastPages={true}
              nextPageText="Next"
              prevPageText="Prev"
              innerClass='border border-secondaryFive flex rounded-r-[4px] rounded-l-[4px]'
              activeClass='bg-secondaryOne '
              itemClass='border-r border-secondaryFive py-[8px] px-[13px]'
              linkClass='text-secondaryTwo text-sm lg:text-base lg:py-[8px] lg:px-[8px] py-[5px] px-[5px]'
              itemClassNext='!border-r-0'
              activeLinkClass="text-secondaryTwo text-sm lg:text-base lg:py-[8px] lg:px-[8px] py-[5px] px-[5px]"
          />
      </div>
  )
}

export default Pagination