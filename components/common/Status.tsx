import React from 'react'

interface Props {
    status: string
}

const Status: React.FC<Props> = ({ status}) => {
    return (
        <div className='w-full'>
            <h3 className={`w-fit font-semibold px-3 !bg-opacity-50 `} style={{ color: `${status}` }} >
                {status}
                </h3> 
        </div>    
  )
}

export default Status