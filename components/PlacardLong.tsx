import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
interface Props {
    name: string,
    src: string,
    contact: number,
    email: string,
}

function PlacardLong({ name, src, contact, email }: Props) {
    return (
        <div className=' h-[300px] rounded-[43px] bg-[#1A1A1A] m-10 flex items-center justify-center max-sm:w-5/6 max-sm:m-2'>
            <img className='w-[200px] h-[300px] rounded-l-[43px] max-sm:hidden' src={src} />
            <div className=' flex flex-col justify-between max-sm:justify-center max-sm:items-center'>
                <div className='text-white text-[30px] mt-5 font-semibold text-center'>
                    {name}
                </div>
                <div className='text-white font-medium p-7 max-sm:p-0'>
                <div
                className='flex flex-row'
                >
                <FontAwesomeIcon className='text-[20px]' icon={faPhone}/>
                <p className='ml-1 text-xl'>
                    {contact}
                </p>
                </div>
                <div className='flex flex-row w-full break-words'>
                <FontAwesomeIcon className='text-[20px]' icon={faEnvelope}/>
                <p className='ml-1'>
                   {email}
                </p>
                 </div>
            </div>
            </div>
        </div>
    )
}

export default PlacardLong