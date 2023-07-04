import { collection, getCountFromServer } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../FirebaseConfig";

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    try{
        const col = collection(db,'Users');
        const data = await getCountFromServer(col);
        res.send(data.data())
    }
    catch(e){
        res.send(e)
    }
}