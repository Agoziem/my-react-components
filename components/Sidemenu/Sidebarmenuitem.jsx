"use client"
import React,{ useState } from 'react'
import Sidebarmenu from './Sidebarmenu'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const SidebarmenuItem = ({item}) => {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    const handleToggleChildren = (label) => {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [label]: !displayCurrentChildren[label]
        })
    }
    
    
  return (
    <li>
        <> 
            {
                item.children && item.children.length > 0
                ? (<div className='flex items-center justify-between cursor-pointer' onClick={() => handleToggleChildren(item.label)}>
                        <p>{ item.label }</p>
                        <div>
                            {
                            displayCurrentChildren[item.label] 
                            ? <FaAngleUp   /> 
                            : <FaAngleDown />
                            }
                        </div>
                   </div>)
                : <div className='cursor-pointer'>
                    
                    <p>{ item.label }</p>
                  </div>
            }
        </>
        
        {
           item.children && item.children.length > 0 && displayCurrentChildren[item.label]
            ? <Sidebarmenu list={item.children} />       
            : null
        }
    </li>
  )
}

export default SidebarmenuItem