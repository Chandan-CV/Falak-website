import { Button, TextField } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';
import { makePayment } from '../../RazorPay';
import { EventData } from '../../types';
interface Props {
    passData: EventData;
    status: number;
}
function index({ passData, status }: Props) {
    const { data: session } = useSession();
    const router = useRouter();
    const [name, setName] = useState(session?.user?.name);
    const [phone, setPhone] = useState<number>();
    const { id } = router.query;
    const paymentCallBack =()=>{
        router.replace('/');
        alert("callback function called")
    }
    useEffect(() => {
        if (session) {
            if (name != session.user?.name) {
                setName(session.user?.name)
            }
        }
    }, [session])
    if (session) {
        if (status == 200) {

            return (
                <div style={{ display: "flex", flexDirection: "column",  backgroundColor: '#00002C',height: '100vh', alignItems:'center'}}>
                    <Navbar/>
                        <p className='text-white text-center text-6xl m-8 font-semibold'>Register</p>
                <div>
                    <div className='flex flex-col mt-6 m-2'>
                        <p className='text-white ml-5 m-1'>Name</p>
                        <div className='bg-[#747CE6] rounded-3xl border-white border-2 px-5'>
                            <TextField className='bg-[#747CE6] h-10 text-white' size='small' value={name} onChange={(e) => { setName(e.target.value) }} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col m-2'>
                        <p className='text-white ml-5 m-1'>Email</p>
                        <div className='bg-[#747CE6] rounded-3xl border-white border-2 px-5'>
                            <TextField className='bg-[#747CE6] h-10 text-white' size='small' value={session.user?.email} disabled={true}/>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                <button className={'rounded-3xl bg-[#CD7F32] m-2 text-gray-700 p-2 px-5 hover:opacity-60'} onClick={()=>{router.push('/Register/bronze')}}>BRONZE</button>
                <button className={'rounded-3xl bg-[#757575] m-2 text-gray-700 p-2 px-5 hover:opacity-60'} onClick={()=>{router.push('/Register/silver')}}>SILVER</button>
                <button className={'rounded-3xl bg-[#ffd700] m-2 text-gray-700 p-2 px-5 hover:opacity-60'} onClick={()=>{}}>GOLD</button>
                <button className={'rounded-3xl bg-[#E5E4E2] m-2 text-gray-700 p-2 px-5 hover:opacity-60'} onClick={()=>{}}>PLATINUM</button>
                </div>
                <div>
                    <div className='flex flex-col m-2'>
                        <p className='text-white ml-5 m-1'>Phone Number</p>
                        <div className='bg-[#747CE6] rounded-3xl border-white border-2 px-5'>
                            <TextField className='bg-[#747CE6] h-10 text-white' size='small' value={phone} type="number" onChange={(e) => { setPhone(parseInt(e.target.value)) }}  />
                        </div>
                    </div>
                </div>
                    <button className={'rounded-3xl bg-blue-500 m-20 p-2 px-5 text-white hover:opacity-60 '} onClick={()=>{makePayment(id,name,session.user?.email,phone,paymentCallBack)}}>Register</button>
                </div>
            )
        } else {
            return (
                <div><p>oops page not found</p></div>
            )
        }
    } else {
        return (
            <div>
                <Button onClick={() => { signIn() }}>
                    Sign In
                </Button>
            </div>
        )
    }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { id } = context.query;
    const data = await fetch(`http://localhost:3000/api/getPassData?passName=${id}`);
    const jsonData = await data.json();
    const status = await data.status;
    return {
        props: { passData: jsonData, status }
    }
}

export default index