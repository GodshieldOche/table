import { NextRouter, useRouter } from 'next/router'
import React from 'react'
import { data } from '../../pages'
import Pagination from '../common/Pagination'
import Filter from './Filter'
import Table from './Table'

interface Props {
    data: data;
    totalItems: number;
    filter: string[]
}

const Home: React.FC<Props> = ({data, filter, totalItems}) => {

    const router: NextRouter = useRouter()
    const page = Number(router.query.page) || 1

    return (
        <div className='w-full space-y-6'>
            <Filter filter={filter} />
            <Table data={data} />
            <div className='w-full flex items-center justify-center lg:justify-start '>
                {
                    totalItems > 5 && <Pagination page={page} itemsPerPage={5} totalItems={totalItems} />

                }
            </div>
        </div>
    )
}

export default Home