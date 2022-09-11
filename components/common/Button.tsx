import React from 'react'

interface Props {
  handleSubmit: () => void
}

const Button: React.FC<Props> = ({handleSubmit}) => {
  return (
    <button
      onClick={handleSubmit}
      className='py-2 px-3 w-full md:w-fit bg-primaryTwo rounded-[3px]'>
        <h2 className='text-white'>Apply</h2>
    </button>
  )
}

export default Button