import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'

function PriceFields() {
    return (
        <div className='flex flex-row text-white p-10 bg-[#151e8e] text-lg my-10 rounded-lg'>
            <ul className='text-center'>
                <li className='font-bold border-b'>
                    Features
                </li>
                <br />
                <li className=''>

                    All other events
                </li>
               <li>Music and Dance Events</li>
                <li>
                    Stand-up comedy
                </li>
                <li>
                    Concert
                </li>
            </ul>
            <ul className='mx-5  px-5 flex flex-col items-center'>
                <li className='font-bold border-b'>
                    Bronze
                </li>
                <br />
                <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"}  /></li>
                <li> <FontAwesomeIcon icon={faX} color={"#FF0000"} /></li>
                <li> <FontAwesomeIcon icon={faX} color={"#FF0000"} /></li>
                <li> <FontAwesomeIcon icon={faX} color={"#FF0000"} /></li>
            </ul>
            
            <ul className='mx-5  px-5 flex flex-col items-center'>
                <li className='font-bold border-b'>
                    Silver
                </li>
                <br />
                <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
                <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
                <li> <FontAwesomeIcon icon={faX} color={"#FF0000"} /></li>
                <li> <FontAwesomeIcon icon={faX} color={"#FF0000"} /></li>
            </ul>            
            <ul className='mx-5  px-5 flex flex-col items-center'>
                <li className='font-bold border-b'>
                    Gold
                </li>
                <br />
                <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
                <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
                <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
                <li> <FontAwesomeIcon icon={faX} color={"#FF0000"} /></li>

            </ul>            
            <ul className='mx-5 px-5 flex flex-col items-center'>
                <li className='font-bold border-b'>
                    Platinum
                </li>
                <br />
                <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
                <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
                <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
                <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
            </ul>
        </div>
    )
}

export default PriceFields