import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../FirebaseConfig";

export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    const docRef = doc(db, 'Misc', 'Team')
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
        res.status(200).send((docSnap.data()))
    }else{
        res.status(400).send("oops you are a noob")
    }
}