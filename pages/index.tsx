import { AppBar, Button, createTheme, LinearProgress, ThemeProvider, Toolbar } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react'
import Navbar from '../components/Navbar';
import Placard from '../components/Placard';
import Tile from '../components/Tile';
import styles from '../styles/Home.module.css'
export default function Home() {
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
      <img src=''/>
    </div>
    <div className="flex justify-center items-center">
      <div className={styles.about_us}>
        <p className=' text-center text-5xl font-bold text-white'>About Us</p>
        <div className={styles.underline}/>
        <div className='flex flex-row items-center justify-center mt-10'>
        <p className='flex flex-end content-center text-center text-xl text-white'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        </div>
      </div>
    </div>
    <div className='flex justify-center p-20'>
      <video className=' bg-slate-600 w-10/12 rounded'></video>
    </div>
    <div className={styles.events}>
      <p className='text-center text-5xl font-bold text-white'>Events</p>
      <div className={styles.underline2}/>
      <div className={styles.grid_container}>
        <Tile src='https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg' name='Event Name' date='Dec 25' description='Lal Chadi Santa, raat ko bajayega ghanta' pass='platinum'/>
        <Tile src='https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg' name='Event Name' date='Dec 25' description='Lal Chadi Santa, raat ko bajayega ghanta' pass='platinum'/>
        <Tile src='https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg' name='Event Name' date='Dec 25' description='Lal Chadi Santa, raat ko bajayega ghanta' pass='platinum'/>
        <Tile src='https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg' name='Event Name' date='Dec 25' description='Lal Chadi Santa, raat ko bajayega ghanta' pass='platinum'/>
        </div>
    </div>
  </div>
  </ThemeProvider>
)
} 
