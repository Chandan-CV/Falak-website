import { createTheme, LinearProgress, ThemeProvider} from '@mui/material'
import { GetServerSidePropsContext } from 'next';
import { getSession, signIn, signOut, useSession } from 'next-auth/react'
import { title } from 'process';
import MainPagePassComponent from '../components/MainPagePassComponent';
import Navbar from '../components/Navbar';
import Placard from '../components/Placard';
import Tile from '../components/Tile';
import styles from '../styles/Home.module.css'
import { OurTeam } from '../types';
import Head from 'next/head';
import useWindowDimensions from '../components/useWindowDimensions';
import Footer from '../components/Footer';
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
interface Props{
  TilesData: any;
  status:number;
  userData:any;
  userDataStatus: number;
  team:OurTeam;
  CarouselImages: string[]
}

export default function Home({TilesData,status,userData, userDataStatus, team,CarouselImages}:Props) {
  const {width, height} = useWindowDimensions();
  const{data:session} = useSession();
  const theme = createTheme({
    palette:{
      primary:{
        main:"#B7482D",
        
      },
      secondary:{
        main:"#FFFFFF"
      }
    }
  })
  return(
  <ThemeProvider theme={theme}>
<Head>
  <title>
    Falak 2022
  </title>
</Head>
  <div className={styles.container}>
   <Navbar/>
    <div className='flex flex-row'>
      <Carousel autoPlay showArrows={false} interval={5000} infiniteLoop={true} showIndicators={false} showStatus={false} showThumbs={false} stopOnHover={false}>
      {
        CarouselImages.map((e)=>{
          return <div key={e.length/10}>
            <img src={e} alt='' width={width} key={e}/>
            </div>
            
        })
      }
      </Carousel>
    </div>
      <div className='flex w-full justify-center items-center mt-20 text-center'>
      <p className='text-[50px] text-[#EEE3DA] font-Amita'>25th - 27th November!</p>
      </div>
    
    {
      session?
      <MainPagePassComponent userData={userData} userDataStatus={userDataStatus}/>
:null
    }
    <div className='flex w-full justify-center items-center text-white font-bold min-[600px]:hidden'>
      
    {session?
          <button className={'bg-[#6C72D9] rounded-full p-2 m-2 px-5 border-2 box-border hover:opacity-60'} onClick={()=>{signOut()}}>SIGN OUT</button>
          :
          <button className={'bg-[#6C72D9] rounded-full p-2 px-5 m-2 border-2 box-border hover:opacity-60'} onClick={()=>{signIn()}}>SIGN IN</button>
        }
        </div>
    <div className="flex justify-center items-center">
      <div className={styles.about_us}>
        <p className=' text-center text-5xl font-bold text-white'>About Us</p>
        <div className={styles.underline}/>
        <div className='flex flex-row items-center justify-center mt-5'>
        <p className='flex flex-end content-center text-center text-xl text-white'>

Falak is a celebration of a sense of belonging, a palace where participants from a variety of different backgrounds, over the span of three days, come together to partake in their desired events united by their own volition, fostering teamwork and companionship among the participants and spectators alike.


 </p>
        </div>
      </div>
    </div>
    <div className='flex justify-center p-20'>
    {width?width<600?
   <iframe width={1200} height={600*3/4}
   src="https://www.youtube.com/embed/oC-jc_dDaiU">
 </iframe>: <iframe width={1200} height={900*3/4}
   src="https://www.youtube.com/embed/oC-jc_dDaiU">
 </iframe>:null

  }
    </div>
    <div className={styles.events}  id="eventstag">
      <p className='text-center text-5xl font-bold text-white mt-10'>Events</p>
      <div className={styles.underline3}/>
      <div className={styles.grid_container}>
{
    TilesData.map((tile:any)=><Tile src={tile[4]} name={tile[0]} date={tile[2]} description={tile[1]} pass={tile[3]} key={title[0]}/>
    )
}
      </div>
      <div>
        <div className='flex flex-col items-center'>
      <p className=' text-5xl font-bold text-white mt-36'>Meet The Team</p>
      <div className={styles.underline3}/>
        </div>
        <div className={styles.grid_container}>
        {
          team[1].map((member)=>{
            return <Placard name={member.name} src={member.image} pos={member.position} key={member.name}/>
          })
        }
      </div>  
      <div className={styles.grid_container}>
        {
          team[2].map((member)=>{
            return <Placard name={member.name} src={member.image} pos={member.position} key={member.name}/>
          })
        }
      </div>
      </div>
    </div>
    <Footer/>
  </div>
  </ThemeProvider>
)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)
    const response = await fetch(`${process.env.BASE_URL}/api/getEventsTiles`)
    const responseJson = await response.json();
    const status = response.status;
    const userDataRaw = await fetch(`${process.env.BASE_URL}/api/getUserData?email=${session?.user?.email}`)
    const userData = await userDataRaw.json()
    const userDataStatus = userDataRaw.status;
    const teamRaw = await fetch(`${process.env.BASE_URL}/api/getNewTeam`)
    const teamJson = await teamRaw.json();
    const team = teamJson.team
    const CarouselImagesRaw = await fetch(`${process.env.BASE_URL}/api/getCarousel`)
    const CarouselImages = await CarouselImagesRaw.json()
    return{
      props:{
        TilesData:responseJson.data,
        status,
        userData,
        userDataStatus,
        team,
        CarouselImages
      }
    }
}
