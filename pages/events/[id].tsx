import { useRouter } from 'next/router'
import React from 'react'
import Navbar from '../../components/Navbar';

function EventPage() {
    const router = useRouter();
    const { id } = router.query;
  return (
    <div className='bg-[rgb(0,0,44)] '>
        <Navbar/>
        <div>
            <p className='m-60'>{id}</p>
        </div>
        {id}
    </div>
  )
}

export default EventPage