import React from 'react'
import Filter from './Filter'
import Table from './Table'

const Home: React.FC = () => {
    return (
        <div className='w-full space-y-[16px]'>
            <Filter />
            <Table />
        </div>
    )
}

export default Home