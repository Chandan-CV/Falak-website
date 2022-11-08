import React, { useState } from 'react'   
import styles from '../styles/tiles.module.css'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const star = require('./Vector.png')
interface Props{
    src: string,
    name: string,
    description: string,
    date: string,
    pass: 'Bronze'|'Silver'|'Gold'|'Platinum',
}


function Tile({src,name,description,date,pass}:Props) {
    const [color,setColor]=useState('#CD7F32')
  return (
    <div className={styles.container}>
        <div className={(pass=='Silver')? styles.card_slv:(pass=='Gold')? styles.card_gold:(pass=='Platinum')? styles.card_plat:styles.card_br}>
            <div className={styles.front}>
                <img className={'opacity-50 w-full h-full rounded-[31px]'} src={src}/>
                <p className={styles.frontName}>{name}</p>
            </div>
            <div className={styles.back}>
                <div className='flex flex-row justify-between'>
                    <div className='m-8 text-left text-white font-bold text-4xl'>
                        {name}
                        <div className={styles.underline}/>
                    </div>
                    <div className={styles.event_Prop +" "+ ((pass=='Silver')? styles.slv:(pass=='Gold')? styles.gold:(pass=='Platinum')? styles.plat:styles.br)}>
                        <FontAwesomeIcon icon={faStar}/>  
                        <p className='m-2'>{pass} Event</p>
                    </div>
                </div>
                <div className='m-2 text-white text-lg'>
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