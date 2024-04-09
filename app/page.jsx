import React from 'react'
import Dropdown from '../components/Dropdown/DropdownMenu'
import Spinner from "@/components/Spinners/Spinner"
import Pictureuploader from '@/components/Form/Pictureuploader'
import InputWithIcons from '@/components/Form/inputwithicons'
import Select from '@/components/Form/Select'
import {MultiSelectDropdown} from '@/components/Form/MultiSelect'
import Carousel from '@/components/Carousel/Carousel'
import Sidebar from '@/components/Sidemenu/Sidebar'

const page = () => {
  return (
    <div >
      <div className='flex flex-row'>
        <div>
          <Dropdown />
        </div>
        <div>
          <Spinner />
        </div>
      </div>
      <div>
        <Pictureuploader />
      </div>
      
      <div className='flex justify-center space-x-8'>
        <div>
          <MultiSelectDropdown />
        </div>
        <div>
          <InputWithIcons />
        </div>
        <div>
          <Select />
        </div>
      </div>

      <div>
        <Carousel />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default page