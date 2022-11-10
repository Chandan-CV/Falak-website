import { Button, TextField } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import { getSession, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { makePayment } from '../../components/Razorpay';
import Navbar from '../../components/Navbar';
import { EventData } from '../../types';
interface Props {
    passData: EventData;
    status: number;
    userData: any;
    
}
function Index({ passData, status, userData,  }: Props) {
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
                        <div className='bg-[#747CE6] rounded-3xl border-white border-2'>
                            <TextField className='bg-[#747CE6] mx-5 h-10 text-white' size='small' value={name} onChange={(e) => { setName(e.target.value) }} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col m-2'>
                        <p className='text-white ml-5 m-1'>Email</p>
                        <div className='bg-[#747CE6] rounded-3xl border-white border-2'>
                            <TextField className='bg-[#747CE6] mx-5 h-10 text-white' size='small' value={session.user?.email} disabled={true}/>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <Button className={ id=='bronze'?'rounded-3xl bg-[#CD7F32] m-2 text-gray-700 font-extrabold':'rounded-3xl bg-blue-500 m-2 text-gray-700'} variant='outlined' onClick={() => {router.push('/Register/bronze')}}>
                        Bronze
                    </Button>
                    <Button className={id=='silver'? 'rounded-3xl bg-[#757575] m-2 text-gray-700 font-extrabold':'rounded-3xl bg-blue-500 m-2 text-gray-700'} variant='outlined' onClick={() => {router.push('/Register/silver')}}>
                        Silver
                    </Button>
                    <Button className={id=='gold'? 'rounded-3xl bg-[#ffd700] m-2 text-gray-700 font-extrabold border border-solid':'rounded-3xl bg-blue-500 m-2 text-gray-700'} variant='outlined' onClick={() => {router.push('/Register/gold')}}>
                        Gold
                    </Button>
                    <Button className={id=='platinum'?'rounded-3xl bg-[#E5E4E2] m-2 text-gray-700 font-extrabold':'rounded-3xl bg-blue-500 m-2 text-gray-700'} variant='outlined' onClick={() => {router.push('/Register/platinum')}}>
                        Platinum
                    </Button>
                </div>
                <div>
                    <div className='flex flex-col m-2'>
                        <p className='text-white ml-5 m-1'>Phone Number</p>
                        <div className='bg-[#747CE6] rounded-3xl border-white border-2'>
                            <TextField className='bg-[#747CE6] mx-5 h-10 text-white' size='small' value={phone} type="number" onChange={(e) => { setPhone(parseInt(e.target.value)) }}  />
                        </div>
                    </div>
                </div>
                    <Button className='rounded-3xl bg-blue-500 m-20' variant='contained' onClick={() => { makePayment(id,name,session.user?.email,phone,paymentCallBack) }}>
                        Register
                    </Button>
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
   const session = await getSession(context)
    const { id } = context.query;
    const data = await fetch(`${process.env.BASE_URL}/api/getPassData?passName=${id}`);
    const jsonData = await data.json();
    const status = await data.status;
    var userData = null;
    var userStatus = 0;
    if(session){
        const userDataRaw = await fetch(`${process.env.BASE_URL}/api/getUserData?email=${session.user?.email}`)
        userData = await userDataRaw.json();
        userStatus = userDataRaw.status;
    }
    return {
        props: { passData: jsonData, status, userData, userStatus }
    }
}

export default Index