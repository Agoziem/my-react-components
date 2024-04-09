"use client"
import React,{useEffect, useState} from 'react'
import Image from 'next/image';
import { FaAngleRight,FaAngleLeft } from "react-icons/fa6";
import { imagedata } from './images';

const Carousel = () => {
    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [autoplay, setAutoplay] = useState(true)

    // fetch images from an API
    useEffect(() => {
        setLoading(true)
        setImages(imagedata)
        setLoading(false)
    },[] )

    // enable autoplay of the Carousel
    useEffect(() => {
        let intervalId;
        if (autoplay) {
            intervalId = setInterval(() => {
                handleNext();
            }, 3000); // 3 seconds
        }
        return () => clearInterval(intervalId);
    }, [autoplay, currentImage]);

    // handle next image
    const handleNext = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
    }

    // handle previous image
    const handlePrevious = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
    }

    if(loading) return <p>Loading...</p>

  return (
    <div className='flex flex-col items-center justify-center border-dotted border-blue-50'>
        <div className='relative my-4 w-[400px] flex flex-col items-center justify-center'>
            <FaAngleLeft className='absolute top-1/2 left-0 transform -translate-y-1/2 h-6 w-6 text-[#1475cf] cursor-pointer' onClick={handlePrevious}/>
                { 
                    images && images.length 
                    ? images.map((image,index) => (
                        <Image 
                        src={image.url} 
                        alt={image.name} 
                        width={300} 
                        height={300} 
                        key={image.id}
                        className={`image ${index === currentImage ? 'block' : 'hidden'}`}
                        />
                    ))
                    : null
                }
            <FaAngleRight className='absolute  top-1/2 right-0 transform -translate-y-1/2 h-6 w-6 text-[#1475cf] cursor-pointer' onClick={handleNext}/>
            
        </div>
        <div className='flex space-x-1 mb-4'>
                {
                    images && images.length 
                    ? images.map((image,index) => (
                        <div 
                        key={image.id} 
                        className={`rounded-full cursor-pointer w-2 h-2 mb-4 ${index === currentImage ? 'bg-[#1475cf]' : 'bg-slate-500'}`}
                        onClick={() => setCurrentImage(index)}
                        ></div>
                    ))
                    : null
                }
        </div>
        {/* indicators */}
        
    </div>
  )
}

export default Carousel