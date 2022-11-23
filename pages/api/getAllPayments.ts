import { NextApiRequest, NextApiResponse } from "next";
const Razorpay = require('razorpay');
var instance = new Razorpay({  key_id: process.env.RAZORPAY_KEY,  key_secret: process.env.RAZORPAY_SECRET})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const type = req.query.type;

    try{
        const order = await instance.payments.all({count:100})
        if(type == 'captured'){
            const data = order.items.filter((e:any)=>{
                if(e.status=='captured')
                return e  
        })
        res.send(data)
        }
        res.send(order)
    }catch{
        res.status(400).send("laude trying scam huhhhh")
    }
}