import { Button } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {data:session} = useSession();
if(session){
return(
  <div>
    <Button onClick={()=>{signOut()}}>Sign out</Button>
    <p>
      {JSON.stringify(session.user)}
    </p>
    <img src={session.user?.image!=null?session.user.image:undefined}/>
  </div>
)
}
else{

  return (
    <div>
        <Button onClick={()=>{signIn()}}>
          sign in
        </Button>
      </div>
  )
}
} 
