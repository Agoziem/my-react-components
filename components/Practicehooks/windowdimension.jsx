"use client";
import React from 'react'
import  useWindowResize  from "@/hooks/useWindowResize";

const Windowdimension = () => {
    const windowSize = useWindowResize();
  return (
        <div>
            <p>Window Width: {windowSize.width}</p>
            <p>Window Height: {windowSize.height}</p>
        </div>
  )
}

export default Windowdimension