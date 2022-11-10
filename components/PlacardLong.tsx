import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
interface Props{
    name:string,
    src:string,
    contact: number,
    email: string,
}

function PlacardLong({name,src,contact,email}:Props) {
  return (
    <div className='w-[600px] h-[300px] rounded-[43px] bg-[#1A1A1A] m-10 flex'>
        <img className='w-[200px] h-[300px] rounded-l-[43px]' src={src}/>
        <div className=' flex flex-col justify-between'>
            <div className='text-white text-[30px] m-7 font-semibold text-center'>
                {name}
            </div>
            <div className='text-white font-medium w-[400px] p-7'>
                <FontAwesomeIcon className='text-[20px]' icon={faPhone}/>
                <p className='text-[30px] p-2'>
                    {contact}
                </p>
                <FontAwesomeIcon className='text-[20px]' icon={faEnvelope}/>
                <p className=''>
                    {email}
                </p>
            </div>
        </div>
    </div>
  )
}

export default PlacardLong