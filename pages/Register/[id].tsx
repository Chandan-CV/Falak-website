import { Button, TextField } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function index() {
    const {data:session} = useSession();
    const router = useRouter();
    const [name, setName] = useState(session?.user?.name);
    const [email, setEmail] = useState(session?.user?.email);
    const [phone,setPhone] = useState<Number>();
   useEffect(()=>{
    if(session){
        if(name!=session.user?.name){
            setName(session.user?.name)
        }
    }
   },[session])
    const {id} = router.query;
    if(session){

        return (
            <div style={{display:"flex", flexDirection:"column", padding:10, }}>
        <p>{id} registration page</p>
        <TextField label={"enter your name"} value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <TextField label={"enter your email"} value={session.user?.email} disabled={true} />
        <TextField label={"enter your number"} value={phone} type="number"/>

        <Button variant='contained'>
            Checkout and Register
        </Button>
    </div>
  )
}else{
    return(
        <div>
            <Button onClick={()=>{signIn()}}>
                Sign IN
            </Button>
        </div>
    )
}
}

export default index