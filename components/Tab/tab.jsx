import React,{useState} from 'react'

const tab = ({tabdata}) => {
    const [currenttabindex,setCurrentTabindex] = useState(0)

  return (
    <div className="flex justify-center my-5">
        <div className='tab-header'>
            {tabdata.map((tabitem,index) => (
                <div key={tabitem.label} className={`cursor-pointer px-4 py-2  ${currenttabindex === index ? 'bg-gray-400' : ''}`} onClick={() => setCurrentTabindex(index)}>{tabitem.label}</div>
            ))}
        </div>
        <div className='tab-content'>
            {
               tabdata[currenttabindex] && tabdata[currenttabindex].content
            }
        </div>
    </div>
  )
}

export default tab

// Example Data in a List of objects with Label and Content as keys
// const tabdata = [
//     {
//         label: 'Tab 1',
//         content: <div>Tab 1 Content</div>
//     },
//     {
//         label: 'Tab 2',
//         content: <div>Tab 2 Content</div>
//     },
//     {
//         label: 'Tab 3',
//         content: <div>Tab 3 Content</div>
//  },
// ]