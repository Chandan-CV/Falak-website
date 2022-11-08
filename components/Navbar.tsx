import { AppBar, Button, Toolbar } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/Home.module.css';

function Navbar() {
    const{data:session} = useSession();
    const router = useRouter();
  return (
    <AppBar>
    <Toolbar className={styles.appbar}>
      <div className='flex flex-row justify-between items-center w-full'>
        <p>Falak 22</p>
        <div className={styles.appBarShit}>
          <Button variant='contained' className='rounded-full' onClick={()=>{router.replace('/')}}>HOME</Button>
          <Button variant='contained' className='rounded-full'>EVENTS</Button>
          <Button variant='contained' className='rounded-full'>SCHEDULE</Button>
          {session?
            <Button variant='contained' className='rounded-full' color='secondary' onClick={()=>{signIn()}}>sign in</Button>
          :
            <Button className='rounded-full' variant='contained' color='secondary' onClick={()=>{signOut()}}>sign out</Button>
          }
        </div>
      </div>
    </Toolbar>
  </AppBar>

  )
}

export default Navbar