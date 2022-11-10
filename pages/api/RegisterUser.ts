import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../FirebaseConfig";
const Razorpay = require('razorpay')
var instance = new Razorpay({  key_id: process.env.RAZORPAY_KEY,  key_secret: process.env.RAZORPAY_SECRET})
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;
    try{
        const order = await instance.orders.fetch(body.orderID)
        await addDoc(collection(db,'Users'),body)
        res.status(200).send("registered user")
    }catch(e){
        res.status(400).send(e)
    }
}