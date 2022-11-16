import { doc, getDoc } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'
import { db } from '../../FirebaseConfig';



async function handle(req:NextApiRequest,res:NextApiResponse) {
    const docRef = doc(db, 'Misc', 'New Team')
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        res.status(200).send((docSnap.data()))
    }else{
        res.status(400).send("oops you are a noob")
    }
}

export default handle