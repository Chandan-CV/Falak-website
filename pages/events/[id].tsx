import { Button, createTheme, ThemeProvider } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../../components/Navbar';
import PlacardLong from '../../components/PlacardLong';
import { EventPageData } from '../../types';
import styles from '../../styles/Home.module.css'
interface Props{
  data: EventPageData;
  status:number;
}

interface LoaderProps{
  src:string;
  width:number;
  quality?: number;
}
const theme = createTheme({
  palette:{
    primary:{
      main:"#6C72D9",
      "100":"#6C72D9"
    },
    secondary:{
      main:"#6C72D9"
    }
  }
})
function EventPage({data,status}:Props) {
    const router = useRouter();
    const { id } = router.query;
  return (
    <ThemeProvider theme={theme}>

    <div className='bg-[rgb(0,0,44)] min-w-full min-h-screen'>
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
          <p className='text-5xl font-semibold'>Event Description</p>
          <div className={styles.underline}/>
          <p className='text-2xl mt-10 w-[75vw]'>{data.description}</p>
        </div>
        <div className='w-full flex justify-center'>
          <Button className='w-[30vw] h-[10vh] rounded-[50px] text-3xl m-32 bg-[#6C72D9] p-3 px-5' variant='contained' onClick={()=>{router.push(`/Register/${data.pass.toLowerCase().replace(" ","")}`)}}>
            Register Now!
          </Button>
        </div>
        <div className='flex min-w-full text-center justify-center items-center flex-col'>
          <p className='text-5xl text-white font-bold'>Event Managers</p>
          <div className={styles.underline3}/>
        </div>
        <div className='flex flex-wrap'>
        {data.coordinators.map((e)=> <PlacardLong contact={e.phone} email={e.email} name={e.name} src={e.image}/>)}
        </div>
    </div>
</ThemeProvider>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext){
  const eventName = context.query.id;
  const response = await fetch(`${process.env.BASE_URL}/api/getEventData?eventName=${eventName}`)
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