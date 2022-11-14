import { Button, TextField } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import { getSession, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { makePayment } from '../../components/Razorpay';
import Navbar from '../../components/Navbar';
import { EventData } from '../../types';
import PriceFields from '../../components/PriceFields';
import Head from 'next/head';
interface Props {
    passData: EventData;
    status: number;
    userData: any;

}
function Index({ passData, status, userData, }: Props) {
    const { data: session } = useSession();
    const router = useRouter();
    const [name, setName] = useState(session?.user?.name);
    const [phone, setPhone] = useState<number>();
    const { id } = router.query;
    const paymentCallBack = () => {
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
                <div style={{ display: "flex", flexDirection: "column", backgroundColor: '#00002C', height: '100%', alignItems: 'center' }}>
                    <Head>
                        <title>
                            Falak 2022 {id}
                        </title>
                    </Head>
                    <Navbar />
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
                                <TextField className='bg-[#747CE6] h-10 text-white' size='small' value={session.user?.email} disabled={true} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center mt-3'>
                        <button className={'rounded-3xl bg-[#CD7F32] m-2 text-gray-700 p-2 px-5 hover:opacity-60'} onClick={() => { router.push('/Register/bronze') }}>BRONZE</button>
                        <button className={'rounded-3xl bg-[#757575] m-2 text-gray-700 p-2 px-5 hover:opacity-60'} onClick={() => { router.push('/Register/silver') }}>SILVER</button>
                        <button className={'rounded-3xl bg-[#ffd700] m-2 text-gray-700 p-2 px-5 hover:opacity-60'} onClick={() => { router.push('/Register/gold') }}>GOLD</button>
                    </div>
                    <div>
                        <div className='flex flex-col m-2'>
                            <p className='text-white ml-5 m-1'>Phone Number</p>
                            <div className='bg-[#747CE6] rounded-3xl border-white border-2 px-5'>
                                <TextField className='bg-[#747CE6] h-10 text-white' size='small' value={phone} type="number" onChange={(e) => { setPhone(parseInt(e.target.value)) }} />
                            </div>
                        </div>
                    </div>
                    <div className='text-white text-xl'>
                        <p>
                            Pass Selected: <strong>{id?.toString().toUpperCase()}</strong> ~ {passData.fee} INR</p>
                    </div>
                    <PriceFields />
                    <button className={'rounded-3xl bg-blue-500 m-20 p-2 px-5 text-white hover:opacity-60 '} onClick={() => { makePayment(id, name, session.user?.email, phone, paymentCallBack) }}>Register</button>
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
    if (session) {
        const userDataRaw = await fetch(`${process.env.BASE_URL}/api/getUserData?email=${session.user?.email}}`)
        userData = await userDataRaw.json();
        userStatus = userDataRaw.status;
    }
    return {
        props: { passData: jsonData.data, status, userData, userStatus }
    }
}

export default Index