import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

function PriceFields() {
    const rows:any=[

    ]
//     return (
//         <div className='flex flex-row text-white p-10 bg-[#151e8e] text-lg my-10 rounded-lg overflow-scroll w-2/3'>

// <Table/>
//             <div className='bg-cyan-400' style={{width:700, padding:30}}>
                
//             <ul className='text-center'>
//                 <li className='font-bold border-b'>
//                     Features
//                 </li>
//                 <br />
//                 <li className=''>

//                     All other events
//                 </li>
//                <li>Music and Dance Events</li>
//                 <li>
//                     Stand-up comedy
//                 </li>
//                 <li>
//                     Concert
//                 </li>
//             </ul>
//             </div>
          
//   <ul className='mx-5  px-5 flex flex-col items-center'>
//                 <li className='font-bold border-b'>
//                     Bronze
//                 </li>
//                 <br />
//                 <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"}  /></li>
//                 <li> <FontAwesomeIcon icon={faX} color={"#FF0000"} /></li>
//                 <li> <FontAwesomeIcon icon={faX} color={"#FF0000"} /></li>
//                 <li> <FontAwesomeIcon icon={faX} color={"#FF0000"} /></li>
//             </ul>
            
//             <ul className='mx-5  px-5 flex flex-col items-center'>
//                 <li className='font-bold border-b'>
//                     Silver
//                 </li>
//                 <br />
//                 <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
//                 <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
//                 <li> <FontAwesomeIcon icon={faX} color={"#FF0000"} /></li>
//                 <li> <FontAwesomeIcon icon={faX} color={"#FF0000"} /></li>
//             </ul>            
//             <ul className='mx-5  px-5 flex flex-col items-center'>
//                 <li className='font-bold border-b'>
//                     Gold
//                 </li>
//                 <br />
//                 <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
//                 <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
//                 <li> <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} /></li>
//                 <li> <FontAwesomeIcon icon={faX} color={"#FF0000"} /></li>

//             </ul>            
//         </div>
    // )
    return(
        
<div className='overflow-scroll p-10 w-full scrollbar-hide'>
    <Table className='text-white' title='lolz'>

        <TableHead>
          <TableRow>
            <TableCell className='text-white font-extrabold text-2xl'>Features</TableCell>
            <TableCell align="center" className='text-white font-extrabold text-2xl'>Bronze</TableCell>
            <TableCell align="center" className='text-white font-extrabold text-2xl'>Silver</TableCell>
            <TableCell align="center" className='text-white font-extrabold text-2xl'>Gold</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row" className='text-white text-xl'>
                All other events
              </TableCell>
              <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'}/>
              </TableCell>
              <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'}/>
              </TableCell>
              <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'}/>
              </TableCell>
            </TableRow>


            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row" className='text-white text-xl'>
                Music and dance events
              </TableCell>
              <TableCell align="center">
              <FontAwesomeIcon icon={faX} color={"#FF0000"} size={'2x'} />
              </TableCell>
              <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'}/>
              </TableCell>
              <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'}/>
              </TableCell>
            </TableRow>


            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              <TableCell component="th" scope="row" className='text-white text-xl'>
              Standup and Concert
              </TableCell>
              <TableCell align="center">
              <FontAwesomeIcon icon={faX} color={"#FF0000"} size={'2x'}/>
              </TableCell>
              <TableCell align="center">
              <FontAwesomeIcon icon={faX} color={"#FF0000"} size={'2x'}/>
              </TableCell>
              <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'}/>
              </TableCell>
            </TableRow>

        </TableBody>
    </Table>

                  </div>
    )
}

export default PriceFields