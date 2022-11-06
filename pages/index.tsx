import { Button } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react'

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
