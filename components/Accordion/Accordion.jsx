"use client";
import React, { useState } from 'react';

const Accordion = ({accordiandata}) => {
 const [selected,setSelected] = useState(null)
 const [enableMultipleSelection,setEnableMultipleSelection] = useState(false)
 const [multiple,setMultiple] = useState([])

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id)
  }

  const handleMultipleSelection = (id) => {
    if(multiple.includes(id)){
      setMultiple(multiple.filter(item => item !== id))
    }else{
      setMultiple([...multiple,id])
    }
  }
  return (
    <div className="flex justify-center my-5">
        <div className='accordion'>
            {accordiandata && accordiandata.map((accordionitem) => (
                <div key={accordionitem.id} className='accordion-item'>
                    <div className='accordion-question' onClick={enableMultipleSelection 
                    ? () => handleMultipleSelection(accordionitem.id)
                    : () => handleSingleSelection(accordionitem.id)
                  }>
                        {accordionitem.question}
                    </div>
                    {
                        (selected === accordionitem.id || multiple.includes(accordionitem.id)) && (
                            <div className='accordion-answer'>
                                {accordionitem.answer}
                            </div>
                        )
                    }
                </div>
            ))}
        </div>
    </div>
  )
}

export default Accordion;


// Example Data in a List of objects with id, Question and Answer as keys
// const accordiandata = [
//     {
//         id: 1,
//         question: 'Question 1',
//         answer: 'Answer 1'
//     },
//     {
//         id: 2,
//         question: 'Question 2',
//         answer: 'Answer 2'
//     },
//     {
//         id: 3,
//         question: 'Question 3',
//         answer: 'Answer 3'
//     },
//
// ]