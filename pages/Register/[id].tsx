import { Button, TextField } from '@mui/material';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import { getSession, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { db } from '../../FirebaseConfig';
import { makePayment } from '../../RazorPay';
import { EventData } from '../../types';
interface Props {
    passData: EventData;
    status: number;
    userData: any;
    
}
function index({ passData, status, userData,  }: Props) {
    const { data: session } = useSession();
    const router = useRouter();
    const [name, setName] = useState(session?.user?.name);
    const [phone, setPhone] = useState<number>();
    const { id } = router.query;
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
                <div style={{ display: "flex", flexDirection: "column", padding: 10, }}>
                    <p>{id} registration page</p>
                    <p>{JSON.stringify(userData)}</p>
                    <p>{JSON.stringify(passData)}</p>
                    <p>{id}</p>
                    <TextField label={"enter your name"} value={name} onChange={(e) => { setName(e.target.value) }} />
                    <TextField label={"enter your email"} value={session.user?.email} disabled={true} />
                    <TextField label={"enter your number"} value={phone} type="number" onChange={(e) => { setPhone(parseInt(e.target.value)) }} />

                    <Button variant='contained' onClick={() => { makePayment(id,name,session.user?.email,phone) }}>
                        Checkout and Register
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

export default index