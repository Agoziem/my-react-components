"use client"
import React from 'react'
import { CgSpinner } from "react-icons/cg";
import { ImSpinner } from "react-icons/im";

const Spinner = () => {
    return (
        <div className='flex flex-row'>
            <button type="button" className="btn-primary" disabled>
                <div className='flex'>
                    <CgSpinner className="animate-spin h-5 w-5 mr-3" />
                    Processing...
                </div>
            </button>

            <button type="button" className="btn-primary" disabled>
                <div className='flex'>
                    <ImSpinner className="animate-spin h-5 w-5 mr-3" />
                    Processing...
                </div>
            </button>

            <button type="button" className='btn-primary-soft'>
                <p> Transparent btn</p>
            </button>
            
            <div className="relative flex h-3 w-3 mt-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </div>
            
        </div>
        
    )
}

export default Spinner
