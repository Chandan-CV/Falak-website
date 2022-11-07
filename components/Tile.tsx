import React, { useState } from 'react'   
import styles from '../styles/tiles.module.css'

interface Props{
    src: string,
    name: string,
    description: string,
    date: string,
    pass: 'bronze'|'silver'|'gold'|'platinum',
}


function Tile({src,name,description,date,pass}:Props) {
    const [color,setColor]=useState('#CD7F32')
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <div className={styles.front}>
                <img className={'opacity-50 w-full h-full rounded-[31px] shadow-lg shadow-yellow-600'} src={src}/>
                <p className={styles.frontName}>{name}</p>
            </div>
            <div className={styles.back}>
                <img />
                <div className='m-5'>
                    {name}
                </div>
                <div className='m-2'>
                    {description}
                </div>
                <div className='m-2'>
                    {date}
                </div>
            </div>
        </div>
    </div>
  )
}


export default Tile