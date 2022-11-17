import { GetServerSidePropsContext } from 'next';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import useWindowDimensions from '../components/useWindowDimensions';

interface Props{
  schedule:string,
  scheduleStatus: number
}
function Schedule({schedule, scheduleStatus}:Props) {

  const {width,height} = useWindowDimensions();

  return (
    <div className='h-[100vh] bg-[#00002C] text-white '>
      <Navbar/>
      <div className='flex justify-center items-center w-full p-5'>
      <p className='text-3xl self-center justify-center'>SCHEDULE</p>
      </div>
      <p className='text-white font-extrabold text-4xl m-28'>To Be Announced...</p>
      {/*
        scheduleStatus==200?
        <iframe 
        src={schedule} width={width} height={1000}/>:<p>oops something went wrong</p>
  */}
  
    </div>
  )
  
}


export async function getServerSideProps(context:GetServerSidePropsContext) {
  const dataRaw = await fetch(`${process.env.BASE_URL}/api/getSchedulePDF`);
  const data = await dataRaw.json();

  return{
    props:{
      schedule: data.url,
      scheduleStatus: dataRaw.status
    }
  }
}

export default Schedule