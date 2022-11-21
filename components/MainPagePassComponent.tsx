import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'
import QRCode from 'react-qr-code'
import { json } from 'stream/consumers'

interface Props{
  userData: any;
  userDataStatus:number;
}
function MainPagePassComponent({userData, userDataStatus}:Props) {
 const router =useRouter();
  const qrCodeData = {
    name:userData.name,
    pass: userData.pass,
    email: userData.email,
    college: userData.college
  }
  return (
    <div className='w-full flex flex-col justify-center mt-10 items-center'>
      <p className='text-white text-3xl'>
      Your pass: {(userData?.pass)?.toUpperCase()}
      </p>
      <div className='p-5'>
      {
        userDataStatus==200?
        <QRCode
        value={JSON.stringify(qrCodeData)}
        bgColor="#292929"
        fgColor='#FAFAFA'
        />:<p className='text-white'>no pass yet</p>
      }
    
    </div> 
    {
      userDataStatus==200?
      <div className='m-5 '>
    <Button variant='outlined' color='secondary' onClick={()=>{router.push('https://linktr.ee/falak.mitblr')}}>Register to events now!</Button>
    </div>:null
    }
      </div>
  )
}

export default MainPagePassComponent