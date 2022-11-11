import { AppBar, Button, Toolbar } from '@mui/material'
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
        <p>Falak 22</p>
        <div className={styles.appBarShit}>
          <button className={'bg-[#6C72D9] rounded-full m-2 p-2 px-5 border-2 box-border hover:opacity-60'} onClick={()=>{router.replace('/')}}>HOME</button>
          <button className={'bg-[#6C72D9] rounded-full m-2 p-2 px-5 border-2 box-border hover:opacity-60'} onClick={()=>{router.replace('/')}}>EVENTS</button>
          <button className={'bg-[#6C72D9] rounded-full p-2 m-2 px-5 border-2 box-border hover:opacity-60'} onClick={()=>{router.replace('/')}}>SCHEDULE</button>
          {session?
          <button className={'bg-[#6C72D9] rounded-full p-2 m-2 px-5 border-2 box-border hover:opacity-60'} onClick={()=>{signIn()}}>SIGN IN</button>
          :
          <button className={'bg-[#6C72D9] rounded-full p-2 px-5 m-2 border-2 box-border hover:opacity-60'} onClick={()=>{signOut()}}>SIGN OUT</button>
          }
        </div>
      </div>
    </Toolbar>
  </AppBar>

  )
}

export default Navbar