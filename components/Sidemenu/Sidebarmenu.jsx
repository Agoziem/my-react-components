"use client"
import React,{useEffect, useState} from 'react'
import SidebarmenuItem from './Sidebarmenuitem'


const Sidebarmenu = ({list=[]}) => {

  return (
    <ul className='menu-list-container m-4'>
        {
            list && list.length 
            ? list.map((listitem) => <SidebarmenuItem item = {listitem} />) 
            : null
        }
    </ul>
  )
}

export default Sidebarmenu
