import { AppBar, Button, Toolbar } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'
import styles from '../styles/Home.module.css';

function Navbar() {
    const{data:session} = useSession();
  return (
    <AppBar>
    <Toolbar className={styles.appbar}>
      <div className='flex flex-row justify-between items-center w-full'>
        <p>Falak 22</p>
        <div className={styles.appBarShit}>
          <Button variant='contained' className='rounded-full'>HOME</Button>
          <Button variant='contained' className='rounded-full'>EVENTS</Button>
          <Button variant='contained' className='rounded-full'>SCHEDULE</Button>
          {session?
          <Button className='rounded-full' variant='contained' color='secondary' onClick={()=>{signOut()}}>sign out</Button>
          :
          <Button variant='contained' className='rounded-full' color='secondary' onClick={()=>{signIn()}}>sign in</Button>
          }
        </div>
      </div>
    </Toolbar>
  </AppBar>

  )
}

export default Navbar