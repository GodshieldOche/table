import React from 'react'

interface Props {
    status: string
}

const Status: React.FC<Props> = ({ status}) => {
    return (
        <h3
            className={`w-fit font-semibold `} >
            {status}
        </h3>
)
}

export default Status