import { useSession } from 'next-auth/react'
import React from 'react'
import Navbar from '../components/Navbar'

function RegisterOffline() {
    const {data:session} = useSession();
  if(session){

      return (
          <Navbar/>
          )
        }else{
            return(
            <div>
            <Navbar/>
            please login
            </div>
            
            )
        }
}

export default RegisterOffline