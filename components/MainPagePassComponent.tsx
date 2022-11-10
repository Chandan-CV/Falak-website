import React from 'react'
import QRCode from 'react-qr-code'
import { json } from 'stream/consumers'

function MainPagePassComponent({userData}:any) {
 
  const qrCodeData = {
    pass: userData.pass,
    name:userData.name,
    email: userData.email,
  }
  return (
    <div className='w-full flex flex-col justify-center mt-10 items-center'>
      <p className='text-white text-3xl'>
      Your pass: {(userData?.pass)?.toUpperCase()}
      </p>
      <div className='p-5'>
      {
        Object.values(qrCodeData).length!=0?
        <QRCode
        value={JSON.stringify(qrCodeData)}
        bgColor="#292929"
        fgColor='#FAFAFA'
        />:<p>no pass yet</p>
      }
    
    </div>
      </div>
  )
}

export default MainPagePassComponent