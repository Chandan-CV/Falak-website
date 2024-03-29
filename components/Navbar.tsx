import { AppBar, Toolbar } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/Home.module.css';

function Navbar() {
    const{data:session} = useSession();
    const router = useRouter();
  return (
    <AppBar position='sticky'>
    <Toolbar className={styles.appbar}>
      <div className='flex flex-row justify-between items-center w-full'>
        <p className='font-Amita text-3xl cursor-pointer' onClick={()=>{router.push('/')}}>Falak 22</p>
        <div className={styles.appBarShit}>
          <button className={'bg-[#B7482D] rounded-full m-2 p-2 px-5  box-border hover:opacity-60'} onClick={()=>{router.replace('/')}}>HOME</button>
          <button className={'bg-[#B7482D] rounded-full m-2 p-2 px-5  box-border hover:opacity-60'} onClick={()=>{
            router.replace('/#eventstag');
        }}>EVENTS</button>
          <button className={'bg-[#B7482D] rounded-full p-2 m-2 px-5  box-border hover:opacity-60'} onClick={()=>{router.replace('/schedule')}}>SCHEDULE</button>
          {session?
          <button className={'bg-[#B7482D] rounded-full p-2 m-2 px-5  box-border hover:opacity-60'} onClick={()=>{signOut()}}>SIGN OUT</button>
          :
          <button className={'bg-[#B7482D] rounded-full p-2 px-5 m-2  box-border hover:opacity-60'} onClick={()=>{signIn()}}>SIGN IN</button>
          }
        </div>
      </div>
    </Toolbar>
  </AppBar>

  )
}

export default Navbar