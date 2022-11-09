import { Button } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../../components/Navbar';
import { EventPageData } from '../../types';

interface Props{
  data: EventPageData;
  status:number;
}

interface LoaderProps{
  src:string;
  width:number;
  quality?: number;
}
function EventPage({data,status}:Props) {
    const router = useRouter();
    const { id } = router.query;
  return (
    <div className='bg-[rgb(0,0,44)]  min-h-screen'>
        <Navbar/>
        <div className='w-full p-10 flex justify-center items-center'>
          <p className='text-white text-6xl font-medium'>{data.name}</p>
        </div>
        <div className='w-full p-10 flex justify-center items-center'>
        <img
        src={data.image}
        />
        </div>
        <div className='flex p-10 text-white flex-col text-center justify-center items-center'>
          <p className='text-4xl mb-10 font-medium'>About the event</p>
          <p className='text-2xl '>{data.description}</p>
        </div>
        <div className='w-full flex justify-center'>
          <Button color='secondary' variant='contained' onClick={()=>{router.push(`/Register/${data.pass.toLowerCase().replace(" ","")}`)}}>
            Register Now!
          </Button>
        </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext){
const eventName = context.query.id;
const response = await fetch(`http://localhost:3000/api/getEventData?eventName=${eventName}`)
const responseJson = await response.json();
const status = response.status;
return{
  props:{
    data:responseJson,
    status
  }
}
}
export default EventPage