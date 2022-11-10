import { NextApiRequest, NextApiResponse } from "next";
const Razorpay = require('razorpay');
var instance = new Razorpay({  key_id: process.env.RAZORPAY_KEY,  key_secret: process.env.RAZORPAY_SECRET})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const orderID = req.query.orderID;
    try{

        const order = await instance.orders.fetch(orderID)
        if(orderID){
            res.status(200).send(order)
        }
        else{
            res.status(400).send("oops something went wrong")
        }
    }catch{
        res.status(400).send("laude trying scam huhhhh")
    }
}