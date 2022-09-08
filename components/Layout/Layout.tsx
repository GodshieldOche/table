import React from 'react'
import Link from '../common/Link'

const Layout: React.FC<any> = ({children}) => {
  return (
    <div className=' w-full h-full font-Poppins text-mainBlack bg-bgColor'>
          <header className='w-full h-[46px] flex items-center space-x-6 px-3 '>
              <Link text="Main Tab" active={true} />
              <Link text="Archived" active={false} />
          </header>
        {children}
    </div>
  )
}

export default Layout