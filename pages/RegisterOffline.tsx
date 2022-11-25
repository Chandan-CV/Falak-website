import { GetServerSidePropsContext } from 'next';
import email from 'next-auth/providers/email';
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import { makePayment } from '../components/Razorpay';
import { EventData } from '../types';

interface Props {
    passData: EventData;
    status: number;
    userData: any;
    
}

function RegisterOffline({passData,status,userData}:Props) {
    const { data: session } = useSession();
    const router = useRouter();
    const [name, setName] = useState<string>();
    const [phone, setPhone] = useState<number>();
    const [college, setCollege] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [registerer, setRegisterer] = useState(session?.user?.email)
    const { id } = router.query;
    const paymentCallBack =()=>{
        router.replace('/');
        alert("callback function called")
    }

    if (session) { 
            return (
                <div style={{ display: "flex", flexDirection: "column",  backgroundColor: '#00002C',height: "100%", alignItems:'center'}}>
                    <Navbar/>
                        <p className='text-white text-center text-6xl m-8 font-semibold'>Register</p>
                <div>
                    <div className='flex flex-col mt-6 m-2'>
                        <p className='text-white ml-5 m-1'>Name</p>
                        <div className='bg-[#B7482D] rounded-3xl border-white border-2 px-5'>
                            <input className='bg-[#B7482D] w-60 h-10 outline-none font-semibold text-white' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col m-2'>
                        <p className='text-white ml-5 m-1'>Email</p>
                        <div className='bg-[#B7482D] rounded-3xl border-white border-2 px-5'>
                            <input className='bg-[#B7482D] w-60 h-10 outline-none font-light text-white' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <p className='text-white ml-5 m-1'>College</p>
                        <div className='bg-[#B7482D] rounded-3xl border-white border-2 px-5'>
                            <input className='bg-[#B7482D] w-60 h-10 outline-none font-light text-white' value={college} onChange={(e)=>{setCollege(e.target.value)}} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col m-2'>
                        <p className='text-white ml-5 m-1'>Phone Number</p>
                        <div className='bg-[#B7482D] rounded-3xl border-white border-2 px-5'>
                            <input className='bg-[#B7482D] font-bold w-60 h-10 outline-none text-white' value={phone} type="number" onChange={(e) => { setPhone(parseInt(e.target.value)) }}  />
                        </div>
                    </div>
                </div>
                    <button className={'rounded-3xl bg-blue-500 m-20 p-2 px-5 text-white hover:opacity-60 '} onClick={()=>{}}>Register</button>
                    </div> 
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getSession(context)
     const { id } = context.query;
     const data = await fetch(`${process.env.BASE_URL}/api/getPassData?passName=${id}`);
     const jsonData = await data.json();
     const status = await data.status;
     var userData = null;
     var userStatus = 0;
     if(session){
         const userDataRaw = await fetch(`${process.env.BASE_URL}/api/getUserData?email=${session.user?.email}}`)
         userData = await userDataRaw.json();
         userStatus = userDataRaw.status;
     }
     return {
         props: { passData: jsonData.data,status, userData, userStatus }
     }
 }

export default RegisterOffline