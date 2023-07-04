import { Button } from '@mui/material';
import { GetServerSidePropsContext } from 'next'
import React from 'react'
import Navbar from '../../components/Navbar'

function StandupUsers({userData}:any) {
  return (
    <div>
        <Navbar/>
        <div>
        <p>{JSON.stringify(userData)}</p>
        </div>
        <h1>{JSON.stringify(userData?.standup)}</h1>
        {userData?.standup?<h1>User already registered</h1>:<Button onClick={()=>{}}>register User</Button>}
    </div>
  )
}

export async function getServerSideProps(context:GetServerSidePropsContext){
const email = context.query.email;
const userDataRaw = await fetch(`${process.env.BASE_URL}/api/getUserData?email=${email}`)
const userData = await userDataRaw.json();
return({
    props:{
        userData
    }
}) 
}

export default StandupUsers