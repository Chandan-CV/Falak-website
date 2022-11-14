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

interface Props{
  TilesData: any;
  status:number;
  userData:any;
  userDataStatus: number;
}

export default function Home({TilesData,status,userData, userDataStatus}:Props) {
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
      <img className='ml-8 w-[100vw] ' src='https://firebasestorage.googleapis.com/v0/b/falak-28f37.appspot.com/o/falaklogo.png?alt=media&token=83f83582-69c7-4a23-a276-76a2d0aeb60c'/>
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
        <Placard name='Chandu' src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' year='1' pos='Senior Developer'/>
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
    return{
      props:{
        TilesData:responseJson.data,
        status,
        userData,
        userDataStatus
      }
    }
}
