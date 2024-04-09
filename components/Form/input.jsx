import React from 'react';

const input = ({value,setValue,type}) => {
  return (
    <div className='flex justify-center my-5'>
    <input 
     type={type} 
     name={value}
    value={value}
    onChange={(e) => setValue(e.target.value)}
     />
    </div>
  )
}

export default input