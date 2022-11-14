import { AppBar, Button, createTheme, LinearProgress, ThemeProvider, Toolbar } from '@mui/material'
import { GetServerSidePropsContext } from 'next';
import { getSession, signIn, signOut, useSession } from 'next-auth/react'
import { title } from 'process';
import MainPagePassComponent from '../components/MainPagePassComponent';
import Navbar from '../components/Navbar';
import Placard from '../components/Placard';
import PlacardLong from '../components/PlacardLong';
import Tile from '../components/Tile';
import styles from '../styles/Home.module.css'
import Logo from '../assets/Logo.png';
import { OurTeam } from '../types';
import Image from 'next/image';

interface Props{
  TilesData: any;
  status:number;
  userData:any;
  userDataStatus: number;
  team:OurTeam[];
}

export default function Home({TilesData,status,userData, userDataStatus, team}:Props) {
  const{data:session} = useSession();
  const theme = createTheme({
    palette:{
      primary:{
        main:"#6C72D9",
        
      },
      secondary:{
        main:"#FFFFFF"
      }
    }
  })
  return(
  <ThemeProvider theme={theme}>

  <div className={styles.container}>
   <Navbar/>
    <div className={styles.logo_bg}>
      <Image src={Logo} alt={''} height={730}/>
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

Falak is a celebration of a sense of belonging, a palace where participants from a variety of different backgrounds, over the span of five days, come together to partake in their desired events united by their own volition, fostering teamwork and companionship among the participants and spectators alike.


 </p>
        </div>
      </div>
    </div>
    <div className='flex justify-center p-20'>
    <iframe width={800} height={450}
      src="https://www.youtube.com/embed/tgbNymZ7vqY">
    </iframe>
    </div>
    <div className={styles.events}  id="eventstag">
      <p className='text-center text-5xl font-bold text-white mt-10'>Events</p>
      <div className={styles.underline2}/>
      <div className={styles.grid_container}>
{
    TilesData.map((tile:any)=><Tile src={tile[4]} name={tile[0]} date={tile[2]} description={tile[1]} pass={tile[3]} key={title[0]}/>
    )
}
      </div>
      <div>
        <div className='flex flex-col items-center'>
      <p className=' text-5xl font-bold text-white mt-36'>The Team</p>
      <div className={styles.underline3}/>
        </div>
      <div className={styles.grid_container}>
        {
          team.map((member)=>{

            return <Placard name={member.name} src={member.imageURL} year={member.year} pos={member.position} key={member.name}/>
          })
        }
      </div>
      </div>
    </div>
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
    const teamRaw = await fetch(`${process.env.BASE_URL}/api/getTeam`)
    const teamJson = await teamRaw.json();
    const team = teamJson.team
    return{
      props:{
        TilesData:responseJson.data,
        status,
        userData,
        userDataStatus,
        team
      }
    }
}
