import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

function PriceFields() {
  return (

    <div className='overflow-scroll p-7 scrollbar-hide bg-[#AB7A4A] rounded-lg w-3/4 m-10'>
      <Table className='text-white' title='lolz'>

        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white", fontSize: 24, fontWeight: "bold" }}> Features</TableCell>
            <TableCell align="center" sx={{ color: "white", fontSize: 24, fontWeight: "bold" }} >MUN</TableCell>
            <TableCell align="center" sx={{ color: "white", fontSize: 24, fontWeight: "bold" }} >Bronze</TableCell>
            <TableCell align="center" sx={{ color: "white", fontSize: 24, fontWeight: "bold" }} >Silver</TableCell>
            <TableCell align="center" sx={{ color: "white", fontSize: 24, fontWeight: "bold" }} >Gold</TableCell>
            <TableCell align="center" sx={{ color: "white", fontSize: 24, fontWeight: "bold" }} >MUN Gold</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" sx={{ color: "white", fontSize: 20, fontWeight: "light" }}>
              MUN
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'} />
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faX} color={"#FF0000"} size={'2x'} />
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faX} color={"#FF0000"} size={'2x'} />
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faX} color={"#FF0000"} size={'2x'} />
            </TableCell>   <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'} />
            </TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" sx={{ color: "white", fontSize: 20, fontWeight: "light" }}>
              All other events
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faX} color={"#FF0000"} size={'2x'} />
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'} />
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'} />
            </TableCell> <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'} />
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'} />
            </TableCell>
          </TableRow>


          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" sx={{ color: "white", fontSize: 20, fontWeight: "light" }} >
              Music and dance events
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faX} color={"#FF0000"} size={'2x'} />
            </TableCell> <TableCell align="center">
              <FontAwesomeIcon icon={faX} color={"#FF0000"} size={'2x'} />
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'} />
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'} />
            </TableCell> <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'} />
            </TableCell>
          </TableRow>


          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" sx={{ color: "white", fontSize: 20, fontWeight: "light" }}>
              Standup and Concert
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faX} color={"#FF0000"} size={'2x'} />
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faX} color={"#FF0000"} size={'2x'} />
            </TableCell>  
            <TableCell align="center">
              <FontAwesomeIcon icon={faX} color={"#FF0000"} size={'2x'} />
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'} />
            </TableCell>
            <TableCell align="center">
              <FontAwesomeIcon icon={faCheck} color={"#2EFF00"} size={'2x'} />
            </TableCell>
          </TableRow>

        </TableBody>
      </Table>

    </div>
  )
}

export default PriceFields