import { Button, TextField } from '@mui/material';
import { GetServerSidePropsContext } from 'next';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
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
                <div style={{ display: "flex", flexDirection: "column", padding: 10, }}>
                    <p>{id} registration page</p>
                    <p>{JSON.stringify(passData)}</p>
                    <p>{id}</p>
                    <TextField label={"enter your name"} value={name} onChange={(e) => { setName(e.target.value) }} />
                    <TextField label={"enter your email"} value={session.user?.email} disabled={true} />
                    <TextField label={"enter your number"} value={phone} type="number" onChange={(e) => { setPhone(parseInt(e.target.value)) }} />

                    <Button variant='contained' onClick={() => { makePayment(id,name,session.user?.email,phone,paymentCallBack) }}>
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
    const { id } = context.query;
    const data = await fetch(`http://localhost:3000/api/getPassData?passName=${id}`);
    const jsonData = await data.json();
    const status = await data.status;
    return {
        props: { passData: jsonData, status }
    }
}

export default index