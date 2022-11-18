import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'


interface Props{
    src: StaticImageData[]
}


function Carousel({src}:Props) {
    const [i, seti] = useState(0)

    const changeSlide = ()=>{
        console.log(i)
        if (i==src.length)
            seti(-1)
        seti(i+1)
        setTimeout(changeSlide,2000)
    }
  return (
    <div className='flex flex-row'>
        {
            src.map((e)=>{
                return(<Image alt='' src={e}/>)
            })
        }
    </div>
  )
}

export default Carousel
