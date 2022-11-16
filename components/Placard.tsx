import React from 'react'
import styles from '../styles/placard.module.css'

interface Props{
    name: string,
    year?: '1'|'2',
    pos: string,
    src: string
}

export default function Placard({name,year,pos,src}:Props) {
  return (
    <div className={styles.container}>
        <img className='absolute w-[291px] h-[392px] rounded-[39px]' src={src}/>
        <div className= 'flex flex-col items-center text-center absolute w-[291px] h-1/5 bg-[#292929] rounded-b-[39px] -mb-[1px]'>
        <p className='font-semibold text-3xl text-white m-[20px]'>{name}</p>
        {/* <p className={(year=='1')? styles.year1:styles.year2} >{(year=='1')? "First-Year":"Second-Year"}</p> */}
        <p className='font-semibold text-lg text-white '>{pos}</p>
        </div>
    </div>
  )
}
