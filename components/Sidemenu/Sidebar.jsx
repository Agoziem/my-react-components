import React from 'react'
import {sidebarData} from './menudata'
import Sidebarmenu from './Sidebarmenu'

const Sidebar = () => {
  return (
    <div className='sidebar w-[150px] bg-[#1440cf] text-white py-6'>
      <Sidebarmenu list={sidebarData} />
    </div>
  )
}

export default Sidebar