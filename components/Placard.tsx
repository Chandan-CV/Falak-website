import React from 'react'
import styles from '../styles/placard.module.css'
import {faCalendar, faClock} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props{
    name: string,
    venue: string,
    date: string,
    time: string
}

export default function placard({name,venue,date,time}:Props) {
  return (
    <div className={styles.container}>
        <p className='font-bold text-xl'>{name}</p>
        <p className='font-semibold text-lg'>Venue: {venue}</p>
        <div className='flex flex-row justify-center items-center'>
            <FontAwesomeIcon icon={faCalendar} className='m-2'/><p className='m-2'>{date}</p>
            <FontAwesomeIcon icon={faClock} className='m-2'/><p className='m-2'>{time}</p>
        </div>
    </div>
  )
}
